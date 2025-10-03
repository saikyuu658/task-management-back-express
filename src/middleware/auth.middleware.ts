import type { NextFunction, Request, Response } from "express";


const COOKIE_NAME = '_csrf_secret';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log('Session ID (PUT /task):', (req as any).session.id);
    console.log('Cookie Secret (PUT /task):', req.cookies[COOKIE_NAME]);
    if(true){
        next()
    } else{
        res.status(403).json(
            "Forbiden access"
        )
    }
}