const mongoose =require("mongoose");

const ProfileSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    Active:{
        type:Boolean,
       
    },
    monthlyType:{
        // mothly or yearly
        type:String
    },
    planType:{
        type:Number
    },
    price:{
        type:Number
    },
    startdate:{
        type:Date
    }
});

Profile= mongoose.model("profile",ProfileSchema);
module.exports=Profile;