"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getAll = exports.getWard = exports.getDistrict = exports.getProvince = exports.getWards = exports.getDistricts = exports.getProvinces = void 0;
var provinces_json_1 = __importDefault(require("../jsons/provinces.json"));
var districts_json_1 = __importDefault(require("../jsons/districts.json"));
var wards_json_1 = __importDefault(require("../jsons/wards.json"));
function getProvinces(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2, res.send(provinces_json_1["default"])];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getProvinces = getProvinces;
function getDistricts(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (req.query.province_code)
                    return [2, res.send(districts_json_1["default"].filter(function (district) { return district.province_code === +req.query.province_code; }))];
                return [2, res.send(districts_json_1["default"])];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getDistricts = getDistricts;
function getWards(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (req.query.district_code)
                    return [2, res.send(wards_json_1["default"].filter(function (ward) { return ward.district_code === +req.query.district_code; }))];
                return [2, res.send(wards_json_1["default"])];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getWards = getWards;
function getProvince(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2, res.send(provinces_json_1["default"].find(function (province) { return province.code === +req.params.province_code; }))];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getProvince = getProvince;
function getDistrict(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2, res.send(districts_json_1["default"].find(function (district) { return district.code === +req.params.district_code; }))];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getDistrict = getDistrict;
function getWard(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2, res.send(wards_json_1["default"].find(function (ward) { return ward.code === +req.params.ward_code; }))];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getWard = getWard;
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2, res.send({
                        message: "Get all success",
                        data: {
                            province: provinces_json_1["default"].find(function (province) { return province.code === req.body.province_code; }),
                            district: districts_json_1["default"].find(function (district) { return district.code === req.body.district_code; }),
                            ward: wards_json_1["default"].find(function (ward) { return ward.code === req.body.ward_code; })
                        }
                    })];
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getAll = getAll;
//# sourceMappingURL=address.controller.js.map