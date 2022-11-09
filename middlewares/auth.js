import { User } from "../models/user.js"

import jwt from "jsonwebtoken"

export const isAuntheticated = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Login to Access this resource"
            })
        }

        // this will return the id of the user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded._id);
        req.user = user;

        next();

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}