import jwt from 'jsonwebtoken'
import { UnauthenticatedError } from '../error/customError.js';
import Admin from '../models/admin.js'

export const authAdmin = async (req, res, next) => {
    const {admin_token}  = req.cookies
    try {
        if(!admin_token){
            throw new UnauthenticatedError("Please Login")
        }
        const decoded = jwt.verify(admin_token, process.env.JWT_SECRET);
        const adminData = await Admin.findById(decoded._id).select("-password"); 
        req.admin = adminData
        next()
    } catch (error) {
        next(error)
    }
}