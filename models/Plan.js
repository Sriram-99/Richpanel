const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const PlanSchema=new Schema({
    monthlyType:{
        type:String,
    },
    planType:{
        Mobile:{
            monthlyPrice:Number,
            resolution:String,
            video:String,
            screens:Number,
            Devices:[String]
        },
        Basic:{
            monthlyPrice:Number,
            Resolution:String,
            video:String,
            screens:Number,
            Devices:[String]
        },
        Standard:{
            monthlyPrice:Number,
            Resolution:String,
            video:String,
            screens:Number,
            Devices:[String]
        },
        Premium:{
            monthlyPrice:Number,
            Resolution:String,
            video:String,
            screens:Number,
            Devices:[String]
        },
    },
});
module.exports=Plan=mongoose.model('Plan',PlanSchema);