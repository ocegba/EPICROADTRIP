import { UsersModule } from './../user/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule],
})
export class AuthModule {}
