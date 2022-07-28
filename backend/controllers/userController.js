const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, mobile } = req.body;

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
    mobile,
    status: true,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  console.log(users);
  if (users) {
    res.json({ users });
  } else {
    res.status(400);
    throw new Error("No users available");
  }
});
const blockUser = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  let user = await User.findOne({ _id: _id });

  console.log(user);
  if (user) {
    let success = await User.updateOne(
      { _id: _id },
      {
        $set: { status: false },
      }
    );
    user = await User.findOne({ _id: _id });

    res.json({ user });
  } else {
    res.status(400);
    throw new Error("No users available");
  }
});

const unBlockUser = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  let user = await User.findOne({ _id: _id });

  console.log(user);
  if (user) {
    let success = await User.updateOne(
      { _id: _id },
      {
        $set: { status: true },
      }
    );
    user = await User.findOne({ _id: _id });

    res.json({ user });
  } else {
    res.status(400);
    throw new Error("No users available");
  }
});
const editUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log('9999999999999999');
  const { _id, name, email, mobile } = req.body;
  console.log(_id);
  let user = await User.findOne({ _id: _id });

  console.log(user);
  if (user) {
    let success = await User.updateOne(
      { _id: _id },
      {
        $set: {  name:name,
        
        email:email,
        mobile:mobile
        },
      }
    );
    user = await User.findOne({ _id: _id });

    res.json({ user });
  } else {
    res.status(400);
    throw new Error("No users available");
  }
});

module.exports = {
  registerUser,
  authUser,
  getAllUser,
  blockUser,
  unBlockUser,
  editUser,
};
