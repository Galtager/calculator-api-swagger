import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { Auth } from "../interfaces/auth.interface";
import jwt from 'jsonwebtoken';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    // Remove Bearer from string
    const token = authHeader && authHeader.replace(/^Bearer\s+/, "");
    //Checking if the token is null
    if (!token) {
        throw new NotAuthorizedError();
    }
    //Verifying if the token is valid.
    const payload = jwt.verify(token, process.env.JWT_KEY!) as Auth
    if (!payload.email) {
        throw new NotAuthorizedError();
    }
    next();
};
