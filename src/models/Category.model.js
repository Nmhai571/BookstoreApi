"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});
var Category = mongoose_1["default"].models.Category || mongoose_1["default"].model("Category", categorySchema);
exports["default"] = Category;
//# sourceMappingURL=Category.model.js.map