import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

interface JwtPayload {
    userId: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Error 401: Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Error 401: Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Error 401: Unauthorized" });
    }
};
