"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
var html_1 = require("../html");
var hello_header_html_1 = require("./partials/hello-header.html");
var template = function (meta, markup) {
    return html_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t<!doctype html>\n\t\t", "\n\t\t<html lang=\"en\">\n\t\t\t<head>\n\t\t\t\t<title>", "</title>\n\t\t\t\t<meta name=\"description\" content=\"", "\">\n\t\t\t\t<meta name=\"keywords\" content=\"", "\">\n\t\t\t\t<link rel=\"preload\" href=\"/assets/fonts/manrope/Manrope-VariableFont_wght.ttf\" as=\"font\" crossorigin=\"anonymous\">\n\t\t\t\t<link rel=\"preload\" href=\"/assets/fonts/manrope/Manrope-Regular.ttf\" as=\"font\" crossorigin=\"anonymous\">\n\t\t\t\t<link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<main data-template=\"", "\">\n\t\t\t\t\t<section>", "</section>\n\t\t\t\t</main>\n\t\t\t\t<script src=\"/assets/js/index.js\"></script>\n\t\t\t</body>\n\t\t</html>\n\t"], ["\n\t\t<!doctype html>\n\t\t", "\n\t\t<html lang=\"en\">\n\t\t\t<head>\n\t\t\t\t<title>", "</title>\n\t\t\t\t<meta name=\"description\" content=\"", "\">\n\t\t\t\t<meta name=\"keywords\" content=\"", "\">\n\t\t\t\t<link rel=\"preload\" href=\"/assets/fonts/manrope/Manrope-VariableFont_wght.ttf\" as=\"font\" crossorigin=\"anonymous\">\n\t\t\t\t<link rel=\"preload\" href=\"/assets/fonts/manrope/Manrope-Regular.ttf\" as=\"font\" crossorigin=\"anonymous\">\n\t\t\t\t<link rel=\"stylesheet\" href=\"/assets/css/style.css\">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<main data-template=\"", "\">\n\t\t\t\t\t<section>", "</section>\n\t\t\t\t</main>\n\t\t\t\t<script src=\"/assets/js/index.js\"></script>\n\t\t\t</body>\n\t\t</html>\n\t"])), hello_header_html_1.template(), meta.title, meta.description, meta.tags.join(', '), meta.template, markup);
};
exports.template = template;
var templateObject_1;
