import { sign } from 'jsonwebtoken';

import { env } from 'process';

// dotenv.config();
class RefreshToken {
  constructor(init?: Partial<RefreshToken>) {
    Object.assign(this, init);
  }

  id: string;
  userId: string;
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
