import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // console.log('ACCESS_SECRET:', configService.get('ACCESS_SECRET'));
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_SECRET,
      // secretOrKey: '52FE5615F877C573',
    });
  }

  validate(payload: { userId: any }) {
    return {
      userId: payload.userId,
    };
  }
}
