import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
  const token = jwt.sign({ id:user._id,role:user.role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // Set JWT as an HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
