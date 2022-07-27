const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateToken = require("../utils/generateToken");

 

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  console.log(userExists + "rewtgfwreg");

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token:generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }
});

const authUser = asyncHandler(async (req, res) => {
console.log("j");

    const {  email, password } = req.body;
   const user =await User.findOne({email})

   if(user &&(await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token:generateToken(user._id),
            })
   }else{
    res.status(400);
    throw new Error("Error Occured")
   }
   
  });




module.exports = {registerUser,authUser};
