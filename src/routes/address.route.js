"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var address_controller_1 = require("../controllers/address.controller");
var Router = express_1["default"].Router();
Router.route("/p").get(address_controller_1.getProvinces);
Router.route("/p/:province_code").get(address_controller_1.getProvince);
Router.route("/d").get(address_controller_1.getDistricts);
Router.route("/d/:district_code").get(address_controller_1.getDistrict);
Router.route("/w").get(address_controller_1.getWards);
Router.route("/w/:ward_code").get(address_controller_1.getWard);
Router.route("/").post(address_controller_1.getAll);
exports["default"] = Router;
//# sourceMappingURL=address.route.js.map