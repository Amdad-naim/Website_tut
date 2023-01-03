const express = require("express");
const app = express();
const routes = require('./routes/main');
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const Detail = require("./models/detail");
// const Slider = require("./models/Slider");
// const Service = require("./models/Service");
// const Banner = require("./models/Banner");
// const Gallery = require("./models/Gallery");


app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('',routes); 
app.use("/static",express.static("public"));


// (TEMPLATE ENGINE)
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");



// (DB CONNECTIONS)
const connectDB = async ()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/website_tut');
    // await Gallery.create({
    //   imageUrl:'/static/images/bg1.jpg'
    // })

    // await Banner.create({
    //   heading: 'This is a dynamic heading one',
    //   paragraph: 'lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam laboriosam, modi a aut, adipisci mollitia in quaerat culpa velit nulla ullam aperiam earum delectus ea pariatur est rerum perspiciatis!',
    //   image1 : '/static/images/graphic1.svg',
    //   heading2: 'This is a dynamic heading Two',
    //   paragraph2: 'lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam laboriosam, modi a aut, adipisci mollitia in quaerat culpa velit nulla ullam aperiam earum delectus ea pariatur est rerum perspiciatis!',
    //   image2 : '/static/images/graphic4.svg',
    //   aboutTitle: 'This is a dynamic heading Three',
    //   aboutParams: 'lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo magnam laboriosam, modi a aut, adipisci mollitia in quaerat culpa velit nulla ullam aperiam earum delectus ea pariatur est rerum perspiciatis!',
    // })

    // await Service.create([
    //   {
    //     icon : 'fab fa-accusoft',
    //     title: 'Provide Best Courses',
    //     description: 'We provide courses that helps our students in learning and in placement',
    //     linkText:'https://www.facebook.com/naim_ahmed',
    //     link:'Check'
    //   },
    //   {
    //     icon : 'fab fa-affiliatetheme',
    //     title: 'Learn Project',
    //     description: 'We provide courses that helps our students in learning and in placement',
    //     linkText:'https://www.facebook.com/naim_ahmed',
    //     link:'Check'
    //   },
    //   {
    //     icon : 'fab fa-accusoft',
    //     title: 'Provide Best Courses',
    //     description: 'We provide courses that helps our students in learning and in placement',
    //     linkText:'https://www.facebook.com/naim_ahmed',
    //     link:'Check'
    //   }
    //  ])

    //  await Slider.create([
    //   {
    //     title : 'Learn Javascript',
    //     subTitle: 'Javascrift mostly use for creating web application',
    //     imageUrl: '/static/images/s1.jpg'
    //   },
    //   {
    //     title : 'Learn NOde Js',
    //     subTitle: 'Node js is use for dynamic web site creating',
    //     imageUrl: '/static/images/s2.jpg'
    //   },
    //   {
    //     title : 'Learn MongoDb',
    //     subTitle: 'MongoDb is a database which is mostly femilier with js and node',
    //     imageUrl: '/static/images/s3.jpg'
    //   },
    //  ])

  // await Detail.create({
  //   brandName:"info tech",
  //   brandIconUrl:"https://cdn.logo.com/hotlink-ok/logo-social.png",
  //   Links:[
  //     {label:"Home",
  //      url: "/" 
  //     },
  //     {label:"Services",
  //      url: "/services" 
  //     },
  //     {label:"Gallery",
  //      url: "/gallery" 
  //     },
  //     {label:"About",
  //      url: "/about" 
  //     },
  //     {label:"Contact Us",
  //      url: "/contact" 
  //     }
  // ] 
  // })
}
connectDB()

app.listen(process.env.PORT | 80,()=>{
    console.log("server started")
 })
