"use strict";
exports.__esModule = true;
exports.verifyJWT = exports.createJWT = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var createJWT = function (_id, role) {
    return (0, jsonwebtoken_1.sign)({ _id: _id, role: role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
exports.createJWT = createJWT;
var verifyJWT = function (token) {
    return new Promise(function (resolve, reject) {
        try {
            var decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
            resolve(decoded);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=jsonwebtoken.js.map