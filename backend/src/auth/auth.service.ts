import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import RefreshToken from './entities/refresh-token.entity';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private refreshTokens: RefreshToken[] = [];

  constructor(private readonly userService: UsersService) {}

  async refresh(refreshStr: string): Promise<string | undefined> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }

    const user = await this.userService.findOne(String(refreshToken.id));
    if (!user) {
      return undefined;
    }

    const accessToken = {
      userId: refreshToken.id,
    };

    return sign(accessToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  }

  private retrieveRefreshToken(
    refreshStr: string,
  ): Promise<RefreshToken | undefined> {
    try {
      const decoded = verify(refreshStr, process.env.REFRESH_SECRET);
      if (typeof decoded === 'string') {
        return undefined;
      }
      return Promise.resolve(
        this.refreshTokens.find((token) => token.id === decoded.id),
      );
    } catch (e) {
      return undefined;
    }
  }

  async login(
    Email: string,
    Password: string,
    values: { userAgent: string; ipAddress: string }
  ): Promise<{ accessToken: string; refreshToken: string } | undefined> {
    const User = await this.userService.findByEmail(Email);

    if (!User) {
      throw new NotFoundException(`L'utilisateur avec l'email ${Email} n'a pas été trouvé dans la base de donnée`);

    }
    // verify your user -- use argon2 for password hashing!!
    if (User.Password !== Password) {
      throw new NotFoundException(`Mot de passe incorrect`);

    }

    return this.newRefreshAndAccessToken(User, values);
  }

  private async newRefreshAndAccessToken(
    user: User,
    values: { userAgent: string; ipAddress: string },
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const refreshObject = new RefreshToken({
      id:
        this.refreshTokens.length === 0
          ? '0'
          : '' + (+this.refreshTokens[this.refreshTokens.length - 1].id + 1),
      ...values,
      userId: user.Id,
    });
    this.refreshTokens.push(refreshObject);

    return {
      refreshToken: refreshObject.sign(),
      accessToken: sign(
        {
          userId: user.Id,
        },
        process.env.ACCESS_SECRET,
      ),
    };
  }

  async logout(refreshStr): Promise<void> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);

    if (!refreshToken) {
      return;
    }
    // delete refreshtoken from db
    this.refreshTokens = this.refreshTokens.filter(
      (refreshToken) => refreshToken.id !== refreshToken.id,
    );
  }
}
