import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  password: string;
}
