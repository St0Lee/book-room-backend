const booksRouter = require("./routes/booksRouter")

const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/books", booksRouter);
 
app.use((req, res) => {res.status(404).json({message:"Not Found"})});
app.use((error, req, res, next) => {
    const {status = 500, message = "Server Error"} = error;
    res.status(status).json(message);
});

module.exports = app;

