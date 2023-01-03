const mongoose = require("mongoose")


const Detail = mongoose.Schema({
    brandName : String,
    brandIconUrl : String,
    Links:[
        {label:String,
         url: String 
        }
    ] 
});
module.exports = mongoose.model('detail',Detail)