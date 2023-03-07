"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class RefreshToken {
    constructor(init) {
        Object.assign(this, init);
    }
    sign() {
        return (0, jsonwebtoken_1.sign)(Object.assign({}, this), process.env.RESFRESH_SECRET);
    }
}
exports.default = RefreshToken;
//# sourceMappingURL=refresh-token.entity.js.map