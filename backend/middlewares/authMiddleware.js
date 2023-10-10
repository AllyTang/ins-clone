const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    res.user = user.userId;
    next();
  });
}

module.exports = authenticateToken;
