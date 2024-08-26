import express from "express";
import { get } from "mongoose";
import {
  getCompanies,
  getCompanyById,
  getUserCompany,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.get("/user", isAuthenticated, getUserCompany);
router.post("/register", isAuthenticated, registerCompany);
router.put("/update/:id", isAuthenticated, updateCompany);

export default router;
