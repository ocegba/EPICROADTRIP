"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const refresh_token_entity_1 = require("./entities/refresh-token.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
        this.refreshTokens = [];
    }
    async refresh(refreshStr) {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        if (!refreshToken) {
            return undefined;
        }
        const user = await this.userService.findOne(refreshToken.id);
        if (!user) {
            return undefined;
        }
        const accessToken = {
            userId: refreshToken.id,
        };
        return (0, jsonwebtoken_1.sign)(accessToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });
    }
    retrieveRefreshToken(refreshStr) {
        try {
            const decoded = (0, jsonwebtoken_1.verify)(refreshStr, process.env.REFRESH_SECRET);
            if (typeof decoded === 'string') {
                return undefined;
            }
            return Promise.resolve(this.refreshTokens.find((token) => token.id === decoded.id));
        }
        catch (e) {
            return undefined;
        }
    }
    async login(email, password, values) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            return undefined;
        }
        if (user.Password !== password) {
            return undefined;
        }
        return this.newRefreshAndAccessToken(user, values);
    }
    async newRefreshAndAccessToken(user, values) {
        const refreshObject = new refresh_token_entity_1.default(Object.assign(Object.assign({ id: this.refreshTokens.length === 0
                ? 0
                : this.refreshTokens[this.refreshTokens.length - 1].id + 1 }, values), { userId: user.id }));
        this.refreshTokens.push(refreshObject);
        return {
            refreshToken: refreshObject.sign(),
            accessToken: (0, jsonwebtoken_1.sign)({
                userId: user.id,
            }, process.env.ACCESS_SECRET, {
                expiresIn: '1h',
            }),
        };
    }
    async logout(refreshStr) {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        if (!refreshToken) {
            return;
        }
        this.refreshTokens = this.refreshTokens.filter((refreshToken) => refreshToken.id !== refreshToken.id);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map