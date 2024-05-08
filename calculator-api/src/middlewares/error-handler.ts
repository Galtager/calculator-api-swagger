import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

/**
 * errors middleware (takes 4 parameters)
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // if its CustomError use the serializeErrors method to get the error msges
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    // keep the error struct consisted
    res.status(400).send({ errors: [{ message: err.message }] })
};