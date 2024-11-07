const path = require("path");
const fs = require("fs/promises");
const Books = require("../../models/books");

const imgDir = path.join(__dirname, "../../", "public", )

const addBook = async(req, res) => {
    // const {title, price, img, author} = req.body;
    let imgURL = "";

    if(req.file){
        const {path: tempUpload, filename} = req.file; 
        console.log(req.file)
        const [extension] = filename.split(".").reverse();
        const imgName = `${Date.now()}.${extension}`;
        const resUpload = path.join(imgDir, imgName);

        await fs.rename(tempUpload, resUpload);

        imgURL = path.join("img", imgName);
    }

    const book = await Books.create({...req.body, imgURL});
    res.status(201).json({
        book, 
        message: "Book's added"
    });
};

module.exports = addBook;