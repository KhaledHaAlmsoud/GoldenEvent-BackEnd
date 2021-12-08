const mongoose = require("mongoose");


const activModel = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String,  required: true  },
  date:{type:Date ,required: true},
  img: { type: String, required: true },
  tic:{type:String,required: true},
  flg:{type:Boolean},

  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }
});


module.exports = mongoose.model("activModel", activModel);