"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var order_controller_1 = require("../controllers/order.controller");
var currentUser_1 = require("../middlewares/currentUser");
var Router = express_1["default"].Router();
Router.route("/").post(currentUser_1.currentUser, order_controller_1.createOrder).get(currentUser_1.currentUser, order_controller_1.getOrders);
Router.route("/:id").post(currentUser_1.currentUser, order_controller_1.rateOrder);
exports["default"] = Router;
//# sourceMappingURL=order.route.js.map