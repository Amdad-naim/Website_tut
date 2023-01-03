const express = require("express");
const { route } = require('express/lib/application');
const routes = express.Router();


const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Banner = require("../models/Banner");
const Gallery = require("../models/Gallery");


routes.get("/",async (req,res)=>{
    const details= await Detail.findOne({"_id":"63a34ad9a9a5233c5805e88f"});
    const sliders= await Slider.find();
    const services= await Service.find();
    const banners= await Banner.find();
   
    res.render("index",{
        details:details,
        sliders:sliders,
        services:services,
        banners:banners});
});

routes.get("/gallery",async (req,res)=>{
    const details= await Detail.findOne({"_id":"63a34ad9a9a5233c5805e88f"});
    const galleries = await Gallery.find();
    res.render("gallery",{
        details:details,
        galleries:galleries});
});

//Process contact form 
routes.post("/process-contact-form",async (req,res)=>{
    console.log("form was submitted");
    console.log(req.body);
    //save data to db
    try {
        const data= await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    } catch (e) {
        console.log(e)
        res.redirect("/")
    }
});

module.exports = routes;