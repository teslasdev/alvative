const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true,"Please Provide Valid Email"],
        unique : [true,"Username Exist"]
    },
    password : {
        type : String,
        required : [true,"Please Provide a Password"],
        unique : false
    }
})


// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Sig JWT and return
  UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, 'whateverpokgojjfndnfkdfdf', {
      expiresIn: '5h',
    });
  };
  
  // Match user entered password to hashed password in database
  UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // Generate and hash password token
  UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hash token and set to resetPassword token field
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  
    return resetToken;
  };
  
module.exports = mongoose.model("User", UserSchema);
