"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var gray_matter_1 = __importDefault(require("gray-matter"));
var marked_1 = __importDefault(require("marked"));
var config = __importStar(require("../config.json"));
var sanitize_1 = __importDefault(require("./sanitize"));
function parse(files) {
    var pages = [];
    return new Promise(function (resolve, reject) {
        files.map(function (file) {
            var filePath = "".concat(config.paths.content, "/").concat(file);
            var fileData = fs_extra_1.default.readFileSync(filePath);
            var fileMeta = (0, gray_matter_1.default)(fileData).data;
            var renderedHtml = (0, sanitize_1.default)((0, marked_1.default)((0, gray_matter_1.default)(fileData).content));
            pages.push({
                path: filePath,
                markup: renderedHtml,
                meta: __assign(__assign({}, fileMeta), { tags: fileMeta.tags.split(',') })
            });
        });
        resolve(pages);
    });
}
exports.default = parse;
