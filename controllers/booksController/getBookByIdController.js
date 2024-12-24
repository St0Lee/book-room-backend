const Books = require("../../models/books");

const getBookById = async(req, res) => {
    const {id} = req.params;
    
    const result = await Books.findOne({_id: id}, "-createdAt -updatedAt");
    if(!result) {
        throw new Error(`Book with id ${id} was not found.`)
    }
    res.status(200).json({
        result
    })
};

module.exports = getBookById;