"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var book_controller_1 = require("./../controllers/book.controller");
var Router = express_1["default"].Router();
Router.route("/").get(book_controller_1.getAll).post(book_controller_1.createOne);
Router.route("/:slug").get(book_controller_1.getOne);
exports["default"] = Router;
//# sourceMappingURL=book.route.js.map