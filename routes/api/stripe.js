const auth = require('../../middleware/auth');
const express = require("express");
const router = express.Router();
const Stripe = require('stripe');
const Plan = require('../../models/Plan');
const Profile = require('../../models/Profile');
const { compareSync } = require('bcryptjs');
const formatDate =require('../utils/formatedate');
const config=require('config');
const STRIPE_KEY=config.get('STRIPE_KEY');
const CLIENT_URL=config.get('CLIENT_URL');
const stripe = Stripe(STRIPE_KEY);
// const getPrice=require("../utils/utils");



   const data={
       user:"123456789123",
       Active:true,
       monthlyType:"monthly",
       planType:null,
       price:500,
       startDate:Date.now(),
   } 
   
const getprice=(plans,a,b)=>{
  const maindata=a==0?plans[0]:plans[1];
  if(b==1) return maindata.planType.Mobile.monthlyPrice;
  if(b==2) return maindata.planType.Basic.monthlyPrice;
  if(b==3) return maindata.planType.Standard.monthlyPrice;
  if(b==4) return maindata.planType.Premium.monthlyPrice;
  else return 0;
}
// router.get("/getProfile",async(req,res)=>{
//   try{
//     const foundProfile=await Profile.findOne({_id:data.user});
//     if(foundProfile){
//         return res.status(200).send(foundProfile);
//     }
//     else{
//       return res.status(300).json({"msg":"no profile exists"});
//     }rs
//   }
//   catch(error){
//   }
// })

router.get('/success',async(req,res)=>{
      try{
        console.log("request recidees");
        console.log(data);
      const foundProfile=await Profile.findOne({user:data.user});
            if(foundProfile){
              // console.log("foundprofile is");
              // console.log(foundProfile);
              // foundProfile.Action=data.Active;
              // foundProfile.monthlyType=data.monthlyType;
              // foundProfile.planType=data.planType;
              // foundProfile.price=data.price;
              // foundProfile.startDate=data.startDate;
                            // const result=await Profile.deleteOne({user:data.user});
                            // if(result>0){
                            //   console.log("delete successfull")
                            // }
              // await foundProfile.save();
              const updatedprofile = await Profile.findByIdAndUpdate(foundProfile._id, data, { new: true });
            }
            else{
              const profile=new Profile(data);
              await  profile.save();
            }
            
               
            console.log("saved successfully")
            return res.send("saved successfully");
            
      }
      catch(error){
          console.log(error);
      }
})
router.post('/create-checkout-session', auth, async (req, res) => {
  try {
    const { mt, pt } = req.body.items;
    console.log(mt)
    const plans = await Plan.find();
    data.user=req.user.id;
    data.planType=pt;
    data.Active=true;
    data.monthlyType=mt==0?"monthly":"yearly";
    console.log(getprice(plans,mt,pt)) ;
    const val=["basic","Mobile","standard","premium"];
    data.price=getprice(plans,mt,pt);
    const dt=formatDate();
    console.log("dt"+dt);
    data.startDate=dt;
    console.log("logging data");
    console.log(data);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: (mt ? "Monthly Subscription " : "Yearly Subscription ")+(val[pt-1]) ,
            },
            unit_amount:getprice(plans,mt,pt)*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${CLIENT_URL}/checkout-success`,
      cancel_url: `${CLIENT_URL}/dashboard`,
    });

    console.log({ url: session.url });
    res.send({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'An error occurred' });
  }
});

module.exports = router;
