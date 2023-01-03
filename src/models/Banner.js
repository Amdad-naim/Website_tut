const mongoose = require("mongoose")


const Banner = mongoose.Schema({
    heading0 : String,
    paragraph0 : String,
    btn0 : String,
    heading1 : String,
    paragraph1 : String,
    image1 : String,
    btn1 : String,
    heading2 : String,
    paragraph2 : String,
    image2 : String,
    btn2 : String,
    aboutTitle : String,
    aboutParams : String,
    aboutBtn : String
});
module.exports = mongoose.model('banner',Banner)