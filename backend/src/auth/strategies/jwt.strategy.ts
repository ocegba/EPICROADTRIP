import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log(process.env.ACCESS_SECRET);
    if (!process.env.ACCESS_SECRET) {
      throw new Error('ACCESS_SECRET is not defined');
    }
    // console.log('ACCESS_SECRET:', configService.get('ACCESS_SECRET'));
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.ACCESS_SECRET,
    });
  }

  validate(payload: { userId: any }) {
    return {
      userId: payload.userId,
    };
  }
}
