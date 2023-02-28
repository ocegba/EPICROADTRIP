import { sign } from 'jsonwebtoken';

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
    return sign({ ...this }, process.env.RESFRESH_SECRET);
  }
}
export default RefreshToken;
