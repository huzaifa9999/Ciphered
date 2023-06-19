const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true,unique:true },
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true },
    pfp: {
      type: String,
      required: true,
      default:
        "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
    },
  },

  {
    timestamps: true,
  }
);


userSchema.methods.matchPassword= async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.pre('save',async function(next){
  if(!this.isModified){
    next();
  }

  const salt= await bcrypt.genSalt(10);
  this.password= await bcrypt.hash(this.password,salt)
});
const User = mongoose.model("User",userSchema);

module.exports = User;
