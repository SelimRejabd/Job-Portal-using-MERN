import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { get } from "mongoose";
import getUri from "../utils/data.uri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
   
    const file = req.file;

    if (!name || !email || !password || !role || !file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const fileUri = getUri(file);
    const cloudinaryResponse = await cloudinary.uploader.upload(
      fileUri.content
    );
    console.log(cloudinaryResponse);

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashPassword,
      role,
      profile: {
        bio: "",
        skills: "",
        experience: "",
        resume: "",
        resumeOriginalName: "",
        company: null,
        profileImage: cloudinaryResponse.secure_url,
      },
    });
    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Failed to Sign Up" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1 days",
    });

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 86400000),
        secure: false,
        httpOnly: true,
      })
      .json({ message: "Login successful", success: true, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      bio,
      skills,
      experience,
      resume,
      resumeOriginalName,
      company,
    } = req.body;

    let user = await User.findById(req.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",");
    if (experience) user.profile.experience = experience;
    if (resumeOriginalName)
      user.profile.resumeOriginalName = resumeOriginalName;

    const file = req.file;
    const fileUri = getUri(file);
    const cloudinaryResponse = await cloudinary.uploader.upload(
      fileUri.content
    );
    if (cloudinaryResponse) {
      user.profile.resume = cloudinaryResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }
    await user.save();

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({ user, message: "Profile updated successfully", success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
