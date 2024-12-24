const {Schema, model} = require("mongoose");

const bookSchema = Schema({
    author:{
        type: String,
        default: "N/A",
    },
    title:{
        type: String,
        default: "N/A",
    },
    imageURL:{
        type: String,
        default: "N/A",
    },
    price:{
        type: String,
        default: "N/A",
    },
    category:{
        type: Array,
        default: [],
    }
}, {versionKey: false, timestamps: true});

const Book = model("book", bookSchema);

module.exports = Book;