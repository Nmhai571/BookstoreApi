"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var utils_1 = require("../utils");
var Schema = mongoose_1["default"].Schema;
var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String
    },
    address: [
        {
            province: {
                type: Number
            },
            ward: {
                type: Number
            },
            district: {
                type: Number
            },
            other: {
                type: String,
                "default": ""
            }
        },
    ],
    image: {
        type: String,
        required: true,
        trim: true
    },
    white_list: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book"
        },
    ],
    status: {
        isActive: {
            type: Boolean,
            "default": true
        },
        isSubscribed: {
            type: Boolean,
            "default": false
        }
    },
    role: {
        type: String,
        "enum": ["admin", "user"],
        "default": "user"
    }
}, {
    timestamps: true
});
userSchema.methods.createToken = function () {
    var token = (0, utils_1.createJWT)(this._id, this.role);
    return token;
};
var User = mongoose_1["default"].models.User || mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
//# sourceMappingURL=User.model.js.map