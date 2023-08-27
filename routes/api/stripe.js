const auth = require('../../middleware/auth');
const express = require("express");
const router = express.Router();
const Stripe = require('stripe');
const Plan = require('../../models/Plan');
const Profile = require('../../models/Profile');
const { compareSync } = require('bcryptjs');
const stripe = Stripe
const config=require('config');
const STRIPE_KEY=config.get('STRIPE_KEY');
const CLIENT_URL=config.get('CLIENT_URL');
(STRIPE_KEY);
   const data={
       user:"123456789123",
       Active:true,
       monthlyType:"monthly",
       PlanType:1,
       price:0,
       startDate:Date.now(),
   } 

// router.get("/getProfile",async(req,res)=>{
//   try{
//     const foundProfile=await Profile.findOne({_id:data.user});
//     if(foundProfile){
//         return res.status(200).send(foundProfile);
//     }
//     else{
//       return res.status(300).json({"msg":"no profile exists"});
//     }
//   }
//   catch(error){
//   }
// })

router.get('/success',async(req,res)=>{
      try{
        console.log("request recidees")
      const foundProfile=await Profile.findOne({user:data.user});
            if(foundProfile){
              foundProfile.Action=data.Active;
              foundProfile.monthlyPrice=data.monthlyPrice;
              foundProfile.planType=data.planType;
              foundProfile.price=data.price;
              foundProfile.startDate=data.startDate;
              await foundProfile.save();
            }
            else{
               const profile=new Profile(data);
              await  profile.save();
            }
            res.send("saved successfully");
            console.log("saved successfully")
      }
      catch(error){
          console.log(error);
      }
})
router.post('/create-checkout-session', auth, async (req, res) => {
  try {
    const { mt, pt } = req.body.items;
    console.log(req.user.id);
    console.log(pt)
    const plans = await Plan.find();
    console.log(plans[0].planType.Premium.monthlyPrice)
    data.user=req.user.id;
    data.monthlyType=mt==1?"monthly":"yearly";
    planType=pt;
    const sri=mt==0?1:0;
    const val=["basic","Mobile","standard","premium"];
    data.price=plans[sri].planType.Basic.monthlyPrice;
    data.startDate=Date.now();
    console.log(data);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: (mt ? "Monthly Subscription" : "Yearly Subscription")+(val[pt-1]) ,
            },
            unit_amount:plans[sri].planType.Basic.monthlyPrice,
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
