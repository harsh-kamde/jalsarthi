const bcrypt = require("bcryptjs");
const mongoose = require("mongoose"); //defining the schema
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default:'user', required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

// secure the password with the bcrypt
userSchema.pre("save", async function () {
  console.log("pre method: " + this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//compare the password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this.id.toString(),
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
