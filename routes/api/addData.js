const express=require("express");
const router=express.Router();
const Plan =require("../../models/Plan")

router.get("/plans",async(req,res)=>{
    const plans=await Plan.find()
    return res.send(plans);
})
router.post("/",async(req,res)=>{
    try{
        const { monthlyType, planType } = req.body;
        const plan=new Plan({monthlyType,planType});
        plan.save();
        res.send({msg:"saved"})
    }
    catch(err){
            console.log(error);
    }
})
module.exports=router;