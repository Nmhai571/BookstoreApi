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
exports.deleteOne = exports.updateOne = exports.adminGetOne = exports.adminGetAll = exports.createOne = exports.getAll = exports.getOne = void 0;
var error_1 = require("./../utils/error");
var Book_model_1 = __importDefault(require("../models/Book.model"));
var Author_model_1 = __importDefault(require("../models/Author.model"));
var Category_model_1 = __importDefault(require("../models/Category.model"));
var Publisher_model_1 = __importDefault(require("../models/Publisher.model"));
function getOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log(req.params.slug);
                    return [4, Book_model_1["default"].findOne({ slug: req.params.slug })
                            .populate("author")
                            .populate("categories")
                            .populate("publisher")];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        throw (0, error_1.handleError)("Book not found", 404);
                    }
                    res.status(200).json({
                        message: "Book fetched successfully",
                        data: book
                    });
                    return [3, 3];
                case 2:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getOne = getOne;
var getAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var results, count, query, page, limit, _a, _b, error_3;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 10, , 11]);
                results = new Array(0);
                return [4, Book_model_1["default"].count({})];
            case 1:
                count = _e.sent();
                query = req.query;
                page = 1;
                limit = count;
                if (!(query.page && query.limit)) return [3, 4];
                page = +query.page;
                limit = +query.limit;
                if (!(page && limit)) return [3, 3];
                return [4, Book_model_1["default"].find({})
                        .limit(limit)
                        .skip(limit * (page - 1))
                        .populate("author")
                        .populate("categories")
                        .populate("publisher")];
            case 2:
                results = _e.sent();
                _e.label = 3;
            case 3: return [3, 6];
            case 4: return [4, Book_model_1["default"].find({}).populate("author").populate("categories").populate("publisher")];
            case 5:
                results = _e.sent();
                _e.label = 6;
            case 6:
                _b = (_a = res.status(200)).json;
                _c = {
                    message: "Books fetched successfully"
                };
                _d = {
                    pages: Math.ceil(count / limit || count),
                    page: query.page || 1,
                    length: count,
                    limit: limit,
                    books: results
                };
                return [4, Author_model_1["default"].find({})];
            case 7:
                _d.author = _e.sent();
                return [4, Category_model_1["default"].find({})];
            case 8:
                _d.category = _e.sent();
                return [4, Publisher_model_1["default"].find({})];
            case 9:
                _b.apply(_a, [(_c.data = (_d.publisher = _e.sent(),
                        _d),
                        _c)]);
                return [3, 11];
            case 10:
                error_3 = _e.sent();
                next(error_3);
                return [3, 11];
            case 11: return [2];
        }
    });
}); };
exports.getAll = getAll;
function createOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, image, description, publisher, author, quantity, year, price, categories, authorId, categoryId, i, authorExists, newAuthor, i, categoryExists, newCategory, publisherId, publisherExists, newPublisher, book;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, title = _a.title, image = _a.image, description = _a.description, publisher = _a.publisher, author = _a.author, quantity = _a.quantity, year = _a.year, price = _a.price, categories = _a.categories;
                    authorId = [];
                    categoryId = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < author.length)) return [3, 6];
                    return [4, Author_model_1["default"].findOne({ name: author[i] })];
                case 2:
                    authorExists = _b.sent();
                    if (!!authorExists) return [3, 4];
                    return [4, Author_model_1["default"].create({ name: author[i] })];
                case 3:
                    newAuthor = _b.sent();
                    authorId.push(newAuthor._id);
                    return [3, 5];
                case 4:
                    authorId.push(authorExists._id);
                    _b.label = 5;
                case 5:
                    i++;
                    return [3, 1];
                case 6:
                    i = 0;
                    _b.label = 7;
                case 7:
                    if (!(i < categories.length)) return [3, 12];
                    return [4, Category_model_1["default"].findOne({ name: categories[i] })];
                case 8:
                    categoryExists = _b.sent();
                    if (!!categoryExists) return [3, 10];
                    return [4, Category_model_1["default"].create({ name: categories[i] })];
                case 9:
                    newCategory = _b.sent();
                    categoryId.push(newCategory._id);
                    return [3, 11];
                case 10:
                    categoryId.push(categoryExists._id);
                    _b.label = 11;
                case 11:
                    i++;
                    return [3, 7];
                case 12: return [4, Publisher_model_1["default"].findOne({ name: publisher })];
                case 13:
                    publisherExists = _b.sent();
                    if (!!publisherExists) return [3, 15];
                    return [4, Publisher_model_1["default"].create({ name: publisher })];
                case 14:
                    newPublisher = _b.sent();
                    publisherId = newPublisher._id;
                    return [3, 16];
                case 15:
                    publisherId = publisherExists._id;
                    _b.label = 16;
                case 16: return [4, Book_model_1["default"].create({
                        title: title || "Harry Potter",
                        image: image,
                        description: description,
                        publisher: publisherId,
                        author: authorId,
                        year: +year,
                        quantity: quantity,
                        price: price,
                        categories: categoryId
                    })];
                case 17:
                    book = _b.sent();
                    res.status(201).json({
                        message: "Book created successfully",
                        data: book
                    });
                    try {
                    }
                    catch (error) {
                        next(error);
                    }
                    return [2];
            }
        });
    });
}
exports.createOne = createOne;
var adminGetAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var books, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, Book_model_1["default"].find({}).populate("author").populate("categories").populate("publisher")];
            case 1:
                books = _a.sent();
                res.status(200).json({
                    message: "Books fetched successfully",
                    data: books
                });
                return [3, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.adminGetAll = adminGetAll;
var adminGetOne = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var book, authors, categories, publishers, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                console.log(req.params.slug);
                return [4, Book_model_1["default"].findOne({ slug: req.params.slug }).populate("author").populate("categories")];
            case 1:
                book = _a.sent();
                if (!book) {
                    throw (0, error_1.handleError)("Book not found", 404);
                }
                return [4, Author_model_1["default"].find({})];
            case 2:
                authors = _a.sent();
                return [4, Category_model_1["default"].find({})];
            case 3:
                categories = _a.sent();
                return [4, Publisher_model_1["default"].find({})];
            case 4:
                publishers = _a.sent();
                res.status(200).json({
                    message: "Book fetched successfully",
                    data: book,
                    authors: authors,
                    categories: categories,
                    publishers: publishers
                });
                return [3, 6];
            case 5:
                error_5 = _a.sent();
                next(error_5);
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
exports.adminGetOne = adminGetOne;
function updateOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id, title, image, description, publisher, author, year, quantity, price, categories, authorId, categoryId, i, authorExists, newAuthor, i, categoryExists, newCategory, book, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 14, , 15]);
                    _a = req.body, _id = _a._id, title = _a.title, image = _a.image, description = _a.description, publisher = _a.publisher, author = _a.author, year = _a.year, quantity = _a.quantity, price = _a.price, categories = _a.categories;
                    authorId = [];
                    categoryId = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < author.length)) return [3, 6];
                    return [4, Author_model_1["default"].findOne({ name: author[i] })];
                case 2:
                    authorExists = _b.sent();
                    if (!!authorExists) return [3, 4];
                    return [4, Author_model_1["default"].create({ name: author[i] })];
                case 3:
                    newAuthor = _b.sent();
                    authorId.push(newAuthor._id);
                    return [3, 5];
                case 4:
                    authorId.push(authorExists._id);
                    _b.label = 5;
                case 5:
                    i++;
                    return [3, 1];
                case 6:
                    i = 0;
                    _b.label = 7;
                case 7:
                    if (!(i < categories.length)) return [3, 12];
                    return [4, Category_model_1["default"].findOne({ name: categories[i] })];
                case 8:
                    categoryExists = _b.sent();
                    if (!!categoryExists) return [3, 10];
                    return [4, Category_model_1["default"].create({ name: categories[i] })];
                case 9:
                    newCategory = _b.sent();
                    categoryId.push(newCategory._id);
                    return [3, 11];
                case 10:
                    categoryId.push(categoryExists._id);
                    _b.label = 11;
                case 11:
                    i++;
                    return [3, 7];
                case 12: return [4, Book_model_1["default"].findOneAndUpdate({ _id: _id }, {
                        title: title,
                        image: image,
                        description: description,
                        publisher: publisher,
                        author: authorId,
                        year: year,
                        quantity: quantity,
                        price: price,
                        categories: categoryId
                    }, { "new": true })];
                case 13:
                    book = _b.sent();
                    res.send({
                        message: "Book updated successfully",
                        data: book
                    });
                    return [3, 15];
                case 14:
                    error_6 = _b.sent();
                    console.log(error_6);
                    next(error_6);
                    return [3, 15];
                case 15: return [2];
            }
        });
    });
}
exports.updateOne = updateOne;
function deleteOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, Book_model_1["default"].findOneAndDelete({ _id: req.params.id })];
                case 1:
                    book = _a.sent();
                    if (!book) {
                        throw (0, error_1.handleError)("Book not found", 404);
                    }
                    res.status(200).json({
                        message: "Book deleted successfully",
                        data: book
                    });
                    return [3, 3];
                case 2:
                    error_7 = _a.sent();
                    next(error_7);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.deleteOne = deleteOne;
//# sourceMappingURL=book.controller.js.map