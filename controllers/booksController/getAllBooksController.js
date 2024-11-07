const Books = require("../../models/books");

const getAllBooks = async(req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Books.find({}, "", {skip, limit: Number(limit)});
    res.status(200).json({
        result
    });
};

module.exports = getAllBooks;