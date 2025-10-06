import type { NextFunction, Request, Response } from "express";
import { ValidateCrsfToken } from "../services/csrf.js";


export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!ValidateCrsfToken(req)) throw new Error()
        next()
    } catch (error) {
        res.status(403).json('Token inválido')
    }
}