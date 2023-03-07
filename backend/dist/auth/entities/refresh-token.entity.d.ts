declare class RefreshToken {
    constructor(init?: Partial<RefreshToken>);
    id: number;
    userId: number;
    Username: string;
    Email: string;
    Password: string;
    RoleId: string;
    Created_at: Date;
    sign(): string;
}
export default RefreshToken;
