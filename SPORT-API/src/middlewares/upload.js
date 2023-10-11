const multer = require("multer");
const fs = require("fs");
const path = require("path");
// image uplode

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "spoart_img") {
      fs.mkdirSync(path.join(__dirname, "../public/spoart_images"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/spoart_images"));
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("Only .png , .jpg and .jpeg format  are allowed.!");
    }
    cb(null, new Date().getTime() + ext);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { upload };
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// // images uplode    
// const storage = multer.diskStorage({
//     destination: function (req, res, cb) {
//         if (file.fieldname == "spoart_img") {
//             fs.mkdirSync(path.join(__dirname, "../public/spoart_images"), {
//                 recursive: true
//             });
//             cb(null, path.join(__dirname, "../public/spoart_images"));
//         }
//     },
//     filename: function (req, res, cb) {
//         const ext = path.extname(file.originalname);
//         if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
//             cb("Only .png , .jpg and .jpeg format  are allowed.!");
//         }
//         cb(null, new Date().getTime() + ext)
//     }
// });

// const upload = multer({
//     storage: storage,
// });

// module.exports = { upload };