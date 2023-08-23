"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var user_route_1 = __importDefault(require("./user.route"));
var book_route_1 = __importDefault(require("./book.route"));
var voucher_route_1 = __importDefault(require("./voucher.route"));
var address_route_1 = __importDefault(require("./address.route"));
var order_route_1 = __importDefault(require("./order.route"));
var admin_route_1 = __importDefault(require("./admin.route"));
var withRoute = function (app) {
    app.use("/api/v1/address", address_route_1["default"]);
    app.use("/api/v1/user", user_route_1["default"]);
    app.use("/api/v1/voucher", voucher_route_1["default"]);
    app.use("/api/v1/book", book_route_1["default"]);
    app.use("/api/v1/order", order_route_1["default"]);
    app.use("/api/v1/admin", admin_route_1["default"]);
};
exports["default"] = withRoute;
//# sourceMappingURL=index.js.map