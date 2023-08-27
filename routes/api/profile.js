const express=require("express");
const router=express.Router();
const request=require('request');
const config=require('config');
const axios=require('axios')

const auth=require("../../middleware/auth")
const Profile =require("../../models/Profile")
const User=require("../../models/User")
const {check,validationResult}=require('express-validator');
//  git request api/profile/me
// this page is private
router.get('/me',auth,async(req,res)=>{
   
   try {
    console.log("hello in server me")
    const profile=await Profile.findOne({user:req.user.id});
    // const profile=await Profile.findOne({user:req.user.id}).populate('user',['name','avatar']);

    if(!profile){
        // even if you have name and avatar added if you don't have profile it won't it shows empty
        return res.status(400).json({msg:"There is no profile for this user"});
    }
    res.json(profile);
   } 
   catch (err) {
    console.log(err);
    res.status(500).send('server error')
   }
});
router.get('/me/update',auth,async(req,res)=>{
   
   try {
    console.log("hello in  sdsfsdf server ")
    const profile=await Profile.findOne({user:req.user.id});
    

    if(!profile){
        // even if you have name and avatar added if you don't have profile it won't it shows empty
        return res.status(400).json({msg:"There is no profile for this user"});
    }
    profile.Active=false;
    profile.save();
    res.json(profile);
   } 
   catch (err) {
    console.log(err);
    res.status(500).send('server error')
   }
});



  


module.exports=router;