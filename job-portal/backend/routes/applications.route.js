import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplications,
  getAppliedJobs,
  updateApplicationStatus,
  getApplicants,
} from "../controllers/applications.controller.js";

const router = express.Router();

router.post("/apply/:id", isAuthenticated, applyJob);
router.get("/", isAuthenticated, getApplications);
router.get("/applied-job", isAuthenticated, getAppliedJobs);
router.get("/:id/applicants", isAuthenticated, getApplicants);
router.get("/status/:id/update", isAuthenticated, updateApplicationStatus);

export default router;
