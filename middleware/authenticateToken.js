const JWT = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
  const token = req.header("x-auth-token");
  // return res.json({token});
  if (!token) {
    res.status(401).json({
      errors: [
        {
          msg: "Token not found",
        },
      ],
    });
  }
  try {
    const user = await JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // return res.json({user});
    req.user = user.email;
    next();
  } catch (error) {
    res.status(403).json({
      errors: [
        {
          msg: "Invalid token",
        },
      ],
    });
  }
};
module.exports = authToken;