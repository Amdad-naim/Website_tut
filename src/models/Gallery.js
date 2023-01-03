const mongoose =require('mongoose');


const Gallery = new mongoose.Schema({
    img : String
});

module.exports = mongoose.model('gallery', Gallery)