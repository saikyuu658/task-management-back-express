import type { Request, Response, NextFunction } from 'express';
import { doubleCsrf } from "csrf-csrf";


const {
    generateCsrfToken, 
    validateRequest, 
    doubleCsrfProtection, 
} = doubleCsrf({
    getSecret: (req: any) => 'secret',
    getSessionIdentifier: (req: Request) => 'pao',
    cookieName: "__Host-psifi.x-csrf-token",
    cookieOptions: {
        sameSite : "none",
        path : "/",
        secure : false,
        httpOnly : false,
    },
    size: 32,
    getCsrfTokenFromRequest: (req: Request) => req.headers['x-csrf-token'] 
});

export const CsrfProtection = doubleCsrfProtection;


export const generateToken = (req: Request, res: Response) => {
    const token = generateCsrfToken(req, res);
    if (!token) throw new Error('Erro ao gerar token')
    return token
}


export const ValidateCrsfToken = (req: Request,): boolean => {
    const token = validateRequest(req);
    if (!token) throw new Error('Token inválido')
    return true
}



