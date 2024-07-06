import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "refreshToken";

const userController = {
  async signUp(req, res) {
    try {
      const { fullName, email, password } = req.body;

      if (!fullName || !email || !password) {
        return res.json({
          status: 400,
          success: false,
          error: "All fields are required",
        });
      }
      const userName = await User.findOne({ fullName });
      if (userName) {
        return res.json({ status: 400, message: "UserName already exists" });
      }

      const user = await User.findOne({ email });
      if (user) {
        return res.json({ status: 400, message: "User already exists" });
      }

      if (password.length < 8) {
        return res.json({
          status: 400,
          message: "Password must be at least 8 characters",
        });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        fullName,
        email,
        password: hashPassword,
      });
      await newUser.save();
      return res.json({ status: 201, message: "User created successfully" });
    } catch (error) {
      console.log(error);
      return res.json({ status: 500, message: "Internal server error" });
    }
  },
  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, error: "All fields are required" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid credentials" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid credentials" });
      }
      // const authClaims = [{ email: user.email }, { role: user.role }];

      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "30d",
      });

      res.status(200).json({ id: user._id, role: user.role, token: token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  },

  async getUser(req, res) {
    try {
      const  id  = req._id;
      // return res.json({ status: 200, user: req._id });
      const user = await User.findById(id);
      console.log(user, id, "user");
      return res.json({ status: 200, user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async updateAdd(req, res) {
    try {
      const { id } = req.headers;
      const { address } = req.body;
      await User.findByIdAndUpdate(id, { address: address }, { new: true });
      return res.status(200).json({ message: "address updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
export default userController;
