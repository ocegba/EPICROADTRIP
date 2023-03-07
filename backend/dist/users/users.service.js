"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                userId: 1,
                id: 0,
                Username: 'hello',
                Email: 'got@gmail.com',
                Password: '1234',
                RoleId: '1',
                Created_at: new Date(),
            },
        ];
    }
    findByEmail(Email) {
        const user = this.users.find((user) => user.Email === Email);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
    findOne(id) {
        const user = this.users.find((user) => user.id === id);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map