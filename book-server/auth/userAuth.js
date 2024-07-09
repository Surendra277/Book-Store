import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res
      .sendStatus(401)
      .json({ message: "Authentication token required" });

  jwt.verify(token, "refreshToken", (err, user) => {
    if (err) {
      return res.Status(403).json("token expired");
    }
    req._id = user._id;
    next();
  });
};

export default authenticateToken;
