import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";


export class RequestValidationError extends CustomError {
    statusCode = 400

    constructor(public errors: ValidationError[]) {
        super("Invalid request parameters");
    }
    /**
     * express-validator might be return a several errors , 
     * we need to change the structure of the object to be consistent
     */
    serializeErrors() {
        return this.errors.map((error) => {
            if (error.type === 'field') {
                return { message: error.msg, field: error.path };
            }
            return { message: error.msg };
        });
    }
}