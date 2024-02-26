class AppError extends Error {
    statusCode: number;
    kind: string = "";

    constructor(message: string, statusCode: number = 500) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}

export default AppError;
