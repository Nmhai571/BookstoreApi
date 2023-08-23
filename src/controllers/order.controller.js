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
exports.adminGetOrders = exports.rateOrder = exports.getOrders = exports.createOrder = void 0;
var Book_model_1 = __importDefault(require("../models/Book.model"));
var Order_model_1 = __importDefault(require("../models/Order.model"));
var Voucher_model_1 = __importDefault(require("../models/Voucher.model"));
var error_1 = require("../utils/error");
var createOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, voucher, order, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                user = req.user;
                if (!req.body.price.voucher.code) return [3, 3];
                return [4, Voucher_model_1["default"].findOne({ code: req.body.price.voucher.code })];
            case 1:
                voucher = _a.sent();
                if (!voucher)
                    throw (0, error_1.handleError)(new Error("Voucher not found"), 404);
                if (!(voucher.times > 0)) return [3, 3];
                voucher.times -= 1;
                return [4, voucher.save()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                req.body.products.forEach(function (product) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, Book_model_1["default"].findByIdAndUpdate(product.product, { $inc: { quantity: -product.quantity } })];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                return [4, Order_model_1["default"].create({
                        info: {
                            user: user._id,
                            address: req.body.info.address,
                            phone: req.body.info.phone,
                            note: req.body.info.note
                        },
                        products: req.body.products,
                        price: {
                            voucher: req.body.price.voucher.discount,
                            subtotal: req.body.price.subtotal,
                            total: req.body.price.total,
                            shipping: req.body.price.shipping
                        },
                        payment: req.body.payment
                    })];
            case 4:
                order = _a.sent();
                res.status(201).json(order);
                return [3, 6];
            case 5:
                error_2 = _a.sent();
                console.log(error_2);
                next(error_2);
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
exports.createOrder = createOrder;
var getOrders = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, orders, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                return [4, Order_model_1["default"].find({
                        "info.user": user._id
                    })
                        .populate({
                        path: "products.product",
                        select: "title image slug"
                    })
                        .sort({ status: 1, createdAt: -1 })];
            case 1:
                orders = _a.sent();
                res.status(200).json({
                    message: "Get orders successfully",
                    data: orders
                });
                return [3, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                next(error_3);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getOrders = getOrders;
var rateOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, order, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                return [4, Order_model_1["default"].findById(req.params.id)];
            case 1:
                order = _a.sent();
                if (!order)
                    throw (0, error_1.handleError)(new Error("Order not found"), 404);
                if (order.info.user.toString() !== user._id.toString())
                    throw (0, error_1.handleError)(new Error("You are not allowed to rate this order"), 403);
                order.comment = req.body.comment;
                order.isRated = true;
                return [4, order.save()];
            case 2:
                _a.sent();
                res.status(200).json(order);
                return [3, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.rateOrder = rateOrder;
var adminGetOrders = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, Order_model_1["default"].find()
                        .populate({
                        path: "products.product",
                        select: "title image slug"
                    })
                        .sort({ status: 1, createdAt: -1 })];
            case 1:
                orders = _a.sent();
                res.status(200).json({
                    message: "Get orders successfully",
                    data: orders
                });
                return [3, 3];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                next(error_5);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.adminGetOrders = adminGetOrders;
//# sourceMappingURL=order.controller.js.map