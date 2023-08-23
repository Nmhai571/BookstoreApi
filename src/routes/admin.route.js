"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var book_controller_1 = require("../controllers/book.controller");
var order_controller_1 = require("../controllers/order.controller");
var currentUser_1 = require("../middlewares/currentUser");
var Router = express_1["default"].Router();
Router.route("/product").get(currentUser_1.currentUser, book_controller_1.adminGetAll).post(currentUser_1.currentUser, book_controller_1.createOne);
Router.route("/product/:id")["delete"](currentUser_1.currentUser, book_controller_1.deleteOne);
Router.route("/product/:slug").get(currentUser_1.currentUser, book_controller_1.adminGetOne).put(currentUser_1.currentUser, book_controller_1.updateOne);
Router.route("/order").get(currentUser_1.currentUser, order_controller_1.adminGetOrders);
exports["default"] = Router;
//# sourceMappingURL=admin.route.js.map