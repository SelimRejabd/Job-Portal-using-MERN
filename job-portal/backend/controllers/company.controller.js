import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Company name & email is required", success: false });
    }
    let company = await Company.findOne({ name });
    if (company) {
      return res
        .status(400)
        .json({ message: "Company already exists", success: false });
    }

    company = Company.create({
      name: req.body.name,
      email: req.body.email,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUserCompany = async (req, res) => {
  try {
    const company = await Company.find(req.id);
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }
    return res.status(200).json({ success: true, company });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    return res.status(200).json({ success: true, companies });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findById(id);
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }
    return res.status(200).json({ success: true, company });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCompany = async (req, res) => {
    try {
      const { name, email, website, location, bio } = req.body;
      const file = req.file;
  
      const updateData = {
        name,
        email,
        bio,
        website,
        location,
      };
  
      // If a file is uploaded, handle the file path
      if (file) {
        updateData.logo = file.path; // Adjust this to match your storage path
      }
  
      const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true,
      });
  
      if (!company) {
        return res
          .status(404)
          .json({ message: "Company not found", success: false });
      }
  
      return res
        .status(200)
        .json({ message: "Company information updated", success: true, company });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  