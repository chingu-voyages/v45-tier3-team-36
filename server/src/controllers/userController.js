const User = require("../models/userModel");

// Controller for signup user
const signupUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await User.signup(firstname, lastname, email, password);
    res
      .status(201)
      .json({ message: "User created. Please verify your email." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for Employers sign up
const employerSignUp = async (req, res) => {
  try {
    console.log({ Employer: req.body });
    const { firstname, lastname, email, password, company } = req.body;
    const employer = await User.registerEmployer(
      firstname,
      lastname,
      email,
      password,
      company
    );
    res
      .status(201)
      .json({
        message: "Employer signup successful. Please verify your email.",
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for email verification
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const user = await User.verifyEmail(token);
    res
      .status(200)
      .json({ message: "Email verified successfully. Please sign in" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    res
      .status(200)
      .json({ message: "Login successful", user, token: user.token });
    console.log(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for initiating password reset
const initiatePasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    await User.initiatePasswordReset(email);
    res.status(200).json({
      message: "Password reset initiated. Check your email for instructions.",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for resending verification email
const resendVerificationEmail = async(req, res) => {
   try {
     const { email } = req.body; // Get the user's email from the request

     // Call the static method to resend the verification email
     const message = await User.resendVerificationEmail(email);

     // Handle the success message and send a response
     return res.status(200).json({ message });
   } catch (error) {
     // Handle errors and send an appropriate response
     return res.status(500).json({ error: "An error occurred" });
   }
}


// Controller for resetting password using reset token
const resetPasswordWithToken = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    const { token } = req.query;

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    await User.resetTokenWithPassword(token, newPassword);
    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      jobTitle,
      userBio,
      age,
      location,
      skills,
      personalWebsite,
      github,
      linkedin,
      receiveJobNotifications,
      jobPreferences,
    } = req.body;

    console.log({ RequestFiles: req.files });

    const { profilePicture, resume } = req.files;
    const profilePicturePath = profilePicture[0].filename;
    const resumePath = resume[0].filename;

    const authHeader = req.headers.authorization || req.headers.Authorization;
    const token = authHeader.split(" ")[1];

    const updates = {
      firstname,
      lastname,
      email,
      jobTitle,
      userBio,
      age,
      location,
      skills,
      personalWebsite,
      github,
      linkedin,
      receiveJobNotifications,
      jobPreferences
    };
    const updatedUser = await User.updateUserProfile(
      token,
      updates,
      profilePicturePath,
      resumePath
    );
    console.log({ Updates: updates });

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const promoteToAdmin = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.promoteToAdmin(email);

    return res
      .status(200)
      .json({ message: `User with email ${email} is now an admin`, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const sendJobNotification = async (req, res) => {
  try {
    await User.sendJobNotifications(); // Trigger the static method

    res.status(200).json({ message: "Job notifications sent successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getUserProfile(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email } = req.body;

    const deletedUser = await User.deleteUser(userId, email);
    res.status(200).json({ message: "User deleted successfully!!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};

module.exports = {
  signupUser,
  verifyEmail,
  loginUser,
  resendVerificationEmail,
  initiatePasswordReset,
  resetPasswordWithToken,
  updateUserProfile,
  promoteToAdmin,
  sendJobNotification,
  employerSignUp,
  getAllUsers,
  getUserProfile,
  deleteUser,
};
