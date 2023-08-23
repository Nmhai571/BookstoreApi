"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    birthday: {
        type: Date
    }
});
var Author = mongoose_1["default"].models.Author || mongoose_1["default"].model("Author", authorSchema);
exports["default"] = Author;
//# sourceMappingURL=Author.model.js.map