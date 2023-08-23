"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
var db_1 = __importDefault(require("./db"));
var withConfig = function (app) {
    (0, db_1["default"])();
    app.use(express_1["default"].static("public"));
    app.use((0, cors_1["default"])());
    app.use((0, morgan_1["default"])("dev"));
    app.use(express_1["default"].json({ limit: "10000" }));
    app.use(express_1["default"].urlencoded({ extended: true }));
};
exports["default"] = withConfig;
//# sourceMappingURL=index.js.map