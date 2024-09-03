import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    profile: {
      bio: {
        type: String,
        default: "",
      },
      skills: [],
      experience: {
        type: String,
        default: "",
      },
      resume: {
        type: String,
        default: "",
      },
      resumeOriginalName: {
        type: String,
        default: "",
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profileImage: {
        type: Object,
        default: null,
      },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestaps: true }
);

export const User = mongoose.model("User", userSchema);
