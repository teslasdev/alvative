const User =  require('../models/User.js');
const returnError = require("../utils/returnError");

const sendTokenResponse = (data, statusCode, res) => {
  // Create token
  const token = data.user ? data.user.getSignedJwtToken() : data.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie("apCookie", token, options)
    .json({
      success: true,
      data: {
        token,
        user: data.user ? data.user : data,
      },
    });
};

// POST : https://localhost:5000/api/login
const Login = async (req,res) => {
  try {
    const {email , password} = req.body;

    const newUser = {email: email.toLowerCase(),password} 
    const user = await User.findOne({email}).select("+password")

    if(user) {
      const isMatch = await user.matchPassword(req.body.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          errors: {
            msg: "Invalid Login Credentials",
          },
        });
      }

      user.password = undefined; // Remove password from user before sending response
      const data = {user}
      return sendTokenResponse(data, 200, res);
    } else {
      const registeredUser = await User.create(newUser);
      registeredUser.password = undefined;
      sendTokenResponse(registeredUser, 201, res);
    }
  } catch (err) {
    return returnError(err, res, 500, 'Registration Failed');
  }
}



module.exports = Login;
