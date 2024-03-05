const jwt = require("jsonwebtoken");

function generateAuthToken(userId) {
  const payload = { userId };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

module.exports = { generateAuthToken };
