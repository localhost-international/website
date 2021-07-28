"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var js_beautify_1 = __importDefault(require("js-beautify"));
var config = __importStar(require("../config.json"));
var templates = __importStar(require("./templates"));
function store(page) {
    fs_extra_1.default.copySync('public', 'dist');
    return new Promise(function (resolve, reject) {
        var fileDist = config.paths.dist + "/" + page.meta.slug + ".html";
        var fileSanitized = page.markup;
        var fileMeta = page.meta;
        var template = page.meta.template === 'index' ?
            templates.indexTemplate :
            templates.defaultTemplate;
        var fileRendered = js_beautify_1.default.html(template(fileMeta, fileSanitized), {
            indent_with_tabs: true,
            indent_size: 1
        });
        console.log('store::', fileRendered);
        fs_extra_1.default.writeFile(fileDist, fileRendered, function (err) {
            if (err)
                reject('Ooops');
        });
        resolve({ fileDist: fileDist, fileRendered: fileRendered });
    });
}
exports.default = store;
