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
exports.userSubcribe = exports.updateUser = exports.createAddress = exports.updateOneAddress = exports.removeFromWhitelist = exports.addToWhitelist = exports.loginWithGoogle = exports.getUser = void 0;
var User_model_1 = __importDefault(require("../models/User.model"));
var axios_1 = __importDefault(require("axios"));
var error_1 = require("../utils/error");
var mailchimp_marketing_1 = __importDefault(require("@mailchimp/mailchimp_marketing"));
mailchimp_marketing_1["default"].setConfig({
    apiKey: "f6a7d8613223be408782bedd6fc3d509-us21",
    server: "us21"
});
var getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _a.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                if (userData.status.isActive === false) {
                    return [2, res.status(401).json({
                            message: "Your account is not active"
                        })];
                }
                res.status(200).json({
                    message: "Login successfully",
                    data: {
                        token: userData.createToken(),
                        user: userData
                    }
                });
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getUser = getUser;
var loginWithGoogle = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name_1, picture, user, newUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                return [4, axios_1["default"]
                        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: {
                            Authorization: "Bearer ".concat(req.body.token)
                        }
                    })
                        .then(function (response) { return response.data; })];
            case 1:
                _a = _b.sent(), email = _a.email, name_1 = _a.name, picture = _a.picture;
                return [4, User_model_1["default"].findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!!user) return [3, 4];
                return [4, User_model_1["default"].create({ email: email, name: name_1, image: picture })];
            case 3:
                newUser = _b.sent();
                return [2, res.status(201).json({
                        message: "Register successfully",
                        data: {
                            token: newUser.createToken(),
                            user: newUser
                        }
                    })];
            case 4:
                if (user.status.isActive === false) {
                    res.status(401).json({
                        message: "Your account is not active"
                    });
                }
                res.status(200).json({
                    message: "Login successfully",
                    data: {
                        token: user.createToken(),
                        user: user
                    }
                });
                return [3, 6];
            case 5:
                error_3 = _b.sent();
                next(error_3);
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
exports.loginWithGoogle = loginWithGoogle;
var addToWhitelist = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, book_id, userData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                book_id = req.body.book_id;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _a.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                if (userData.white_list.includes(book_id))
                    throw (0, error_1.handleError)(new Error("Book already in whitelist"), 400);
                userData.white_list.push(book_id);
                return [4, userData.save()];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Add to whitelist successfully",
                    data: {
                        _id: book_id
                    }
                });
                return [3, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.addToWhitelist = addToWhitelist;
var removeFromWhitelist = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, book_id, userData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                book_id = req.body.book_id;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _a.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                if (!userData.white_list.includes(book_id))
                    throw (0, error_1.handleError)(new Error("Book not in whitelist"), 400);
                userData.white_list.splice(userData.white_list.indexOf(book_id), 1);
                return [4, userData.save()];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Remove from whitelist successfully",
                    data: {
                        _id: book_id
                    }
                });
                return [3, 4];
            case 3:
                error_5 = _a.sent();
                next(error_5);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.removeFromWhitelist = removeFromWhitelist;
var updateOneAddress = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, address_1, userData, addressFind, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                address_1 = req.body.address;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _a.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                addressFind = userData.address.find(function (item) {
                    return item._id + "" === address_1._id;
                });
                if (!addressFind)
                    throw (0, error_1.handleError)(new Error("Address not found"), 404);
                addressFind.province = address_1.province;
                addressFind.district = address_1.district;
                addressFind.ward = address_1.ward;
                addressFind.street = address_1.street;
                addressFind.other = address_1.other;
                return [4, userData.save()];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Update address successfully",
                    data: {
                        _id: userData._id,
                        address: address_1
                    }
                });
                return [3, 4];
            case 3:
                error_6 = _a.sent();
                next(error_6);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.updateOneAddress = updateOneAddress;
var createAddress = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, address, userData, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.user;
                address = req.body.address;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _a.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                userData.address.push(address);
                return [4, userData.save()];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "Update address successfully",
                    data: {
                        address: address
                    }
                });
                return [3, 4];
            case 3:
                error_7 = _a.sent();
                next(error_7);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.createAddress = createAddress;
var updateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a, name_2, phone, subscribe, userData, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                user = req.user;
                _a = req.body, name_2 = _a.name, phone = _a.phone, subscribe = _a.subscribe;
                return [4, User_model_1["default"].findById(user._id)];
            case 1:
                userData = _b.sent();
                if (!userData)
                    throw (0, error_1.handleError)(new Error("User not found"), 404);
                userData.name = name_2;
                userData.phone = phone;
                if (!(userData.status.isSubscribed !== subscribe)) return [3, 5];
                userData.status.isSubscribed = subscribe;
                if (!subscribe) return [3, 3];
                return [4, addMemberSubcribe(userData.email)];
            case 2:
                _b.sent();
                return [3, 5];
            case 3: return [4, removeMemberSubcribe(userData.email)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5: return [4, userData.save()];
            case 6:
                _b.sent();
                res.status(200).json({
                    message: "Update user successfully",
                    data: {
                        user: userData
                    }
                });
                return [3, 8];
            case 7:
                error_8 = _b.sent();
                console.log(error_8);
                next(error_8);
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
exports.updateUser = updateUser;
var userSubcribe = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var email_1, LIST_ID, members, isExist, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                email_1 = req.body.email;
                LIST_ID = "7851c20afb";
                return [4, mailchimp_marketing_1["default"].lists.getListMembersInfo(LIST_ID)];
            case 1:
                members = (_a.sent()).members;
                isExist = members.find(function (item) { return item.email_address === email_1; });
                if (isExist)
                    throw (0, error_1.handleError)(new Error("Email already exist"), 400);
                return [4, mailchimp_marketing_1["default"].lists.addListMember(LIST_ID, {
                        email_address: email_1,
                        status: "subscribed"
                    })];
            case 2:
                _a.sent();
                res.send({
                    message: "Subscribe successfully"
                });
                return [3, 4];
            case 3:
                error_9 = _a.sent();
                next(error_9);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
exports.userSubcribe = userSubcribe;
function addMemberSubcribe(email) {
    return __awaiter(this, void 0, void 0, function () {
        var LIST_ID, members, isExist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    LIST_ID = "7851c20afb";
                    return [4, mailchimp_marketing_1["default"].lists.getListMembersInfo(LIST_ID)];
                case 1:
                    members = (_a.sent()).members;
                    isExist = members.find(function (item) { return item.email_address === email; });
                    if (!isExist) return [3, 3];
                    if (isExist.status === "subscribed")
                        return [2];
                    return [4, mailchimp_marketing_1["default"].lists.updateListMember(LIST_ID, isExist.id, {
                            status: "subscribed"
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2];
            }
        });
    });
}
function removeMemberSubcribe(email) {
    return __awaiter(this, void 0, void 0, function () {
        var LIST_ID, members, isExist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    LIST_ID = "7851c20afb";
                    return [4, mailchimp_marketing_1["default"].lists.getListMembersInfo(LIST_ID)];
                case 1:
                    members = (_a.sent()).members;
                    isExist = members.find(function (item) { return item.email_address === email; });
                    return [4, mailchimp_marketing_1["default"].lists.updateListMember(LIST_ID, isExist.id, {
                            status: "unsubscribed"
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=user.controller.js.map