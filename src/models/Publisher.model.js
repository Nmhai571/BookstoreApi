"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});
var Publisher = mongoose_1["default"].models.Publisher || mongoose_1["default"].model("Publisher", publisherSchema);
exports["default"] = Publisher;
//# sourceMappingURL=Publisher.model.js.map