const { required } = require("joi");
const {Schema, model} = require("mongoose");

const bookSchema = Schema({
    author:{
        type: String,
        default: "N/A",
        required: true,
    },
    title:{
        type: String,
        default: "N/A",
        required: true,
    },
    imageURL:{
        type: String,
        default: "N/A",
        required: true,
    },
    price:{
        type: String,
        default: "N/A",
        required: true,
    },
    category:{
        type: Array,
        default: [],
        required: true,
    }
}, {versionKey: false, timestamps: true});

const Book = model("book", bookSchema);

module.exports = Book;