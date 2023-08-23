"use strict";
exports.__esModule = true;
exports.handleError = void 0;
var handleError = function (error, statusCode) {
    var status = statusCode || 500;
    var message = error.message || "Something went wrong";
    throw {
        message: message,
        status: status
    };
};
exports.handleError = handleError;
//# sourceMappingURL=error.js.map