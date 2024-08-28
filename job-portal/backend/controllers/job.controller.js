import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      position,
      requirements,
      location,
      salary,
      type,
      experience,
      deadline,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !position ||
      !type ||
      !requirements ||
      !experience ||
      !location ||
      !salary ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields", success: false });
    }
    const company = await Company.findOne({ _id: companyId });
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }
    const job = await Job.create({
      title,
      description,
      position,
      requiredSkills: requirements.split(","),
      location,
      salary,
      type,
      experience,
      deadline,
      companyId,
      createdBy: userId,
    });
    return res.status(201).json({
      message: "Job posted successfully",
      success: true,
      job,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        {
          title: {
            $regex: keyword,
            $options: "i",
          },
          description: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    };

    const jobs = await Job.find(query)
      .populate("companyId")
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found", success: false });
    }

    return res.status(200).json({ success: true, jobs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }
    return res.status(200).json({ success: true, job });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCompanyJobs = async (req, res) => {
  try {
    const companyId = req.params.id;
    const jobs = await Job.find({ companyId });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found", success: false });
    }
    return res.status(200).json({ success: true, jobs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserJobs = async (req, res) => {
  try {
    const id = req.id;
    const jobs = await Job.find({ createdBy: id });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found", success: false });
    }
    return res.status(200).json({ success: true, jobs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
