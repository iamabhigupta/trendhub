import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth user and token
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordMatched = await user.matchPassword(password);

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

  res.send('User login');
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('registerUser');
});

// @desc    Logout user / clear cookies
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout user');
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get user profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user profile');
});

// @desc    Get users
// @route   GET /api/users
// @access  Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get users');
});

// @desc    Get user
// @route   GET /api/users/:id
// @access  Private / Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('getUserById');
});

// @desc    Delete users
// @route   DELETE /api/users/:id
// @access  Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user');
});

// @desc    Update users
// @route   PUT /api/users/:id
// @access  Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user');
});

export {
  login,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
