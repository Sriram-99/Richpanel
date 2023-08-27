const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const PlanSchema=new Schema({
    monthlyType:{
        type:String,
    },
    planType:{
        Mobile:{
            monthlyPrice:Number,
            Resolution:String,
            Devices:[String]
        },
        Basic:{
            monthlyPrice:Number,
            Resolution:String,
            Devices:[String]
        },
        Standard:{
            monthlyPrice:Number,
            Resolution:String,
            Devices:[String]
        },
        Premium:{
            monthlyPrice:Number,
            Resolution:String,
            Devices:[String]
        },
    },
});
module.exports=Plan=mongoose.model('Plan',PlanSchema);