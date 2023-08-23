"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var slugify_1 = __importDefault(require("slugify"));
var Schema = mongoose_1["default"].Schema;
var bookSchema = new Schema({
    slug: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    author: [
        {
            type: mongoose_1["default"].SchemaTypes.ObjectId,
            ref: "Author"
        },
    ],
    publisher: {
        type: mongoose_1["default"].SchemaTypes.ObjectId,
        ref: "Publisher"
    },
    description: {
        type: String
    },
    year: {
        type: Number,
        "default": new Date().getFullYear()
    },
    quantity: {
        type: Number,
        "default": 0
    },
    price: {
        sale: {
            saleType: {
                type: String,
                "enum": ["percent", "price"],
                "default": "percent"
            },
            value: {
                type: Number,
                "default": 0
            }
        },
        priceInitial: {
            type: Number,
            "default": 0
        },
        priceFinal: {
            type: Number,
            "default": 0
        }
    },
    categories: [
        {
            type: mongoose_1["default"].SchemaTypes.ObjectId,
            ref: "Category"
        },
    ],
    rating: {
        rates: [
            {
                user: {
                    type: mongoose_1["default"].SchemaTypes.ObjectId,
                    ref: "User"
                },
                rate: {
                    type: Number,
                    "default": 0
                }
            },
        ],
        average: {
            type: Number,
            "default": 0
        }
    },
    comment: [{ type: mongoose_1["default"].SchemaTypes.ObjectId, ref: "Comment" }]
}, {
    timestamps: true
});
bookSchema.pre("save", function (next) {
    console.log(this);
    if (this.isNew) {
        this.slug = (0, slugify_1["default"])(this.title.toLowerCase());
    }
    next();
});
var Book = mongoose_1["default"].models.Book || mongoose_1["default"].model("Book", bookSchema);
exports["default"] = Book;
//# sourceMappingURL=Book.model.js.map