import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    deadline: {
        type: Date,
    },
    requiredSkills: {
        type: [String],
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["full-time", "part-time", "internship"],
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    apllications: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        status: {
            type: String,
            default: "pending",
        },
    }],
    applicants: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        status: {
            type: String,
            default: "pending",
        },
    }],
}, {timestamps: true});

export const Job = mongoose.model("Job", jobSchema);