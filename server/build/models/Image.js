"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = new Schema({
    src: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('images', ImageSchema);
