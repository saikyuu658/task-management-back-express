import type { Request, Response, NextFunction } from 'express';
import lusca from 'lusca';

export const csrfProtection = lusca({
    csrf: {
        secret: process.env.CSRF_SECRET || 'seu-session-secret-super-seguro-aqui',
        cookie: {
            name: '_csrf',
            options: {
                httpOnly: false, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            }
        }
    },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    nosniff: true,
    referrerPolicy: "same-origin",
    xframe: "SAMEORIGIN",
    xssProtection: true,
});


