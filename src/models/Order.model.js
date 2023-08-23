"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var orderSchema = new Schema({
    info: {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        address: String,
        phone: String,
        note: String
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Book"
            },
            quantity: Number,
            price: Number
        },
    ],
    price: {
        voucher: Number,
        subtotal: Number,
        total: Number,
        shipping: Number
    },
    status: {
        type: String,
        "enum": ["pending", "cancelled", "shipping", "delivered"],
        "default": "pending"
    },
    payment: {
        type: String,
        "enum": ["cash", "paypal"],
        "default": "cash"
    },
    comment: {
        type: String,
        "default": ""
    },
    isRated: {
        type: Boolean,
        "default": false
    }
}, {
    timestamps: true
});
var Order = mongoose_1["default"].models.Order || mongoose_1["default"].model("Order", orderSchema);
exports["default"] = Order;
//# sourceMappingURL=Order.model.js.map