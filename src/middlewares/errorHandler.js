"use strict";
exports.__esModule = true;
function errorMiddleware(error, _req, res, next) {
    var status = error.status || 500;
    var message = error.message || "Something went wrong";
    res.status(status).send({
        message: message,
        status: status
    });
}
exports["default"] = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map