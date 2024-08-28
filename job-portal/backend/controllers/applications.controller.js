import { Application } from "../models/applications.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Job id is required", success: false });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    const userId = req.id;
    if (!userId) {
      return res.status(400).json({ message: "User not found", success: false });
    }
    const application = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (application) {
      return res
        .status(400)
        .json({ message: "Already applied for this job", success: false });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    job.applicants.push(userId);
    await job.save();
    return res
      .status(201)
      .json({ success: true, message: "Applied successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.id })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "companyId", options: { sort: { createdAt: -1 } } },
      });

    if (!applications) {
      return res
        .status(404)
        .json({ message: "No applications found", success: false });
    }

    return res.status(200).json({ success: true, applications });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getApplications = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "companyId",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant", options: { sort: { createdAt: -1 } } },
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    const applications = await Application.find({ job: jobId })
      .sort({ createdAt: -1 })
      .populate("applicant");

    if (!applications) {
      return res
        .status(404)
        .json({ message: "No applications found", success: false });
    }

    return res.status(200).json({ success: true, applications });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;
    if (!status) {
      return res
        .status(400)
        .json({ message: "Status is required", success: false });
    }

    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res
        .status(404)
        .json({ message: "Application not found", success: false });
    }

    application.status = status.toLowerCase();
    await application.save();
    return res
      .status(200)
      .json({ success: true, message: "Application updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    // const job = await Job.findById(jobId).populate({
    //     path: 'companyId',
    //     options: { sort: { createdAt: -1 } },
    //     populate: { path: 'applicant', options: { sort: { createdAt: -1 } } },
    // });
    // if (!job) {
    //     return res.status(404).json({ message: 'Job not found', success: false });
    // }

    const applications = await Application
        .find({ job: jobId })
        .sort({ createdAt: -1 })
        .populate('applicant');

    if (!applications) {
        return res.status(404).json({ message: 'No applications found', success: false });
    }

    return res.status(200).json({ success: true, applications });
}
catch (error) {
    return res.status(500).json({ message: error.message });
}
};
