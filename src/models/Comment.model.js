"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    }
});
var Comment = mongoose_1["default"].models.Comment || mongoose_1["default"].model("Comment", commentSchema);
exports["default"] = Comment;
//# sourceMappingURL=Comment.model.js.map