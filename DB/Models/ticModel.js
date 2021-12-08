const mongoose = require("mongoose");


const ticModel = new mongoose.Schema({
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  },
  items:[{quantity:{type:Number} , product :{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }   }],
});


module.exports = mongoose.model("ticModel", ticModel);