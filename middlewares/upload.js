const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, tempDir);
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
    limits: {filesize: 2048}
});

const upload = multer({
    storage: multerConfig,
});

module.exports = upload;