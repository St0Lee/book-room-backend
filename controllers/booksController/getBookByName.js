const Books = require("../../models/books");

const getBookByName = async(req, res) => {

    const {title} = req.query;

    try {
        const result = await Books.find(
            { title: { $regex: title, $options: "i" } }, 
            "-createdAt -updatedAt"
        );

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getBookByName;