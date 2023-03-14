import { Test, TestingModule } from '@nestjs/testing';
<<<<<<<< HEAD:backend/src/auth/auth.service.spec.ts
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
========
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
>>>>>>>> main:backend/src/users/users.service.spec.ts
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
