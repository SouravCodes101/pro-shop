import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

//@desc Auth User and get token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@desc Register User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register user');
});

//@desc Logout / Clear cookie
//@route POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout user');
});

//@desc Get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get user profile');
});

//@desc Update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user profile');
});

//@desc Get  users
//@route PUT /api/users
//@access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get users ');
});

//@desc Get user by ID
//@route DELETE /api/users/:id
//@access Private/admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('Get user by ID');
});

//@desc Delete  users
//@route DELETE /api/users
//@access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user ');
});

//@desc Update user
//@route PUT /api/users/:id
//@access Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user ');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
