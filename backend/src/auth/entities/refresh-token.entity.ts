import { sign } from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
import { env } from 'process';

// dotenv.config();
class RefreshToken {
  constructor(init?: Partial<RefreshToken>) {
    Object.assign(this, init);
  }

  id: number;
  userId: number;
  Username: string;
  Email: string;
  Password: string;
  RoleId: string;
  Created_at: Date;

  sign(): string {
    return sign({ ...this }, env.REFRESH_SECRET);
  }
}
export default RefreshToken;
