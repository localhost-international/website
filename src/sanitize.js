"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dompurify_1 = __importDefault(require("dompurify"));
var jsdom_1 = require("jsdom");
var window = new jsdom_1.JSDOM('').window;
// @ts-expect-error
var DOMPurify = (0, dompurify_1.default)(window);
function sanitize(markdown) {
    var sanitised = DOMPurify.sanitize(markdown);
    return sanitised;
}
exports.default = sanitize;
