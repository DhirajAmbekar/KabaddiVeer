const mongoose = require("mongoose");

const Login = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // Add a custom validator for password strength
    validate: {
      validator: (password) => {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
      },
      message:
        "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.",
    },
  },

  created_at: {
    type: Date,
    default: new Date().toISOString(),
    required: true,
  },
});
module.exports = mongoose.model("Login", Login);
