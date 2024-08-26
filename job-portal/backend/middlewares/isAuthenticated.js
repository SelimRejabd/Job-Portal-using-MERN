import express from "express";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decrypt = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decrypt) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.id = decrypt.userId;
        next();
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
}
export default isAuthenticated;