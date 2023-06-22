const mongoose = require('mongoose');

const confessionSchema= mongoose.Schema({
    creator:{type:mongoose.Types.ObjectId,ref:"Username" },
    confession:{type:String, required:true}
},
{
    timestamps: true,
  }
  );

  const Confession = mongoose.model('Confession',confessionSchema);

  module.exports= Confession ;