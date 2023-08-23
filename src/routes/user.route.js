"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user.controller");
var currentUser_1 = require("../middlewares/currentUser");
var Router = express_1["default"].Router();
Router.post("/login", user_controller_1.loginWithGoogle);
Router.route("/").get(currentUser_1.currentUser, user_controller_1.getUser).patch(currentUser_1.currentUser, user_controller_1.updateUser);
Router.route("/whitelist").post(currentUser_1.currentUser, user_controller_1.addToWhitelist)["delete"](currentUser_1.currentUser, user_controller_1.removeFromWhitelist);
Router.route("/address").post(currentUser_1.currentUser, user_controller_1.createAddress).put(currentUser_1.currentUser, user_controller_1.updateOneAddress);
Router.route("/mail").post(user_controller_1.userSubcribe);
exports["default"] = Router;
//# sourceMappingURL=user.route.js.map