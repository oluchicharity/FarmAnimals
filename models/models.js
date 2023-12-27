const mongoose= require("mongoose");

const farmSchema= new mongoose.Schema({
    Name:{
            type:String
    },
    breed: {
        type: String
    },
    age:{
        type:Number
    },

    isMatured:{
        type:Boolean,
        default:false
    },
    isSold:{
        type:Boolean,
        default:false
    }  
})
farmSchema.pre("save",function(next){
    if(this.age >=5){
        this.isMatured=true
    }
  next()
})

const farmModel= mongoose.model("farm",farmSchema)

module.exports= farmModel