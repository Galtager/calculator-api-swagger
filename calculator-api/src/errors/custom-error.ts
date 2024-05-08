
// abstracl calss extends error to create a consistent errors handling in the system
export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
    }

    /**
     * method to return a consistent structure to client
     * always return array because express-validator might be return a several errors
     */
    abstract serializeErrors(): { message: string; field?: string }[];
}