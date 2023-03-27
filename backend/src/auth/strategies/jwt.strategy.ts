import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { env } from 'process';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log('secret: ' + env.ACCESS_SECRET);
    if (!env.ACCESS_SECRET) {
      throw new Error('ACCESS_SECRET is not defined');
    }
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
