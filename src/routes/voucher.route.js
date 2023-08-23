"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var voucher_controller_1 = require("./../controllers/voucher.controller");
var currentUser_1 = require("./../middlewares/currentUser");
var express_1 = __importDefault(require("express"));
var Router = express_1["default"].Router();
Router.route("/:slug").get(currentUser_1.currentUser, voucher_controller_1.getOne);
exports["default"] = Router;
//# sourceMappingURL=voucher.route.js.map