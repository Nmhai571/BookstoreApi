import { NextFunction, Request, Response } from "express";

function errorMiddleware(error: any, _req: Request, res: Response, next: NextFunction) {
	const status = error.status || 500;
	const message = error.message || "Something went wrong";
	res.status(status).send({
		message,
		status,
	});
}

export default errorMiddleware;
