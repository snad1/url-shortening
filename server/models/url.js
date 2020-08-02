"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    code: String,
    originalUrl: String,
    newUrl: String,
    date: { type: Date, default: new Date() }
});
var model = mongoose.model("url", schema);
exports.default = model;
