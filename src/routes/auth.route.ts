import { Router } from "express";
import type { Request, Response } from "express";
import { generateToken } from "../services/csrf.js";
const authRouter = Router()

authRouter.get('/token', (req: Request, res: Response) => {
   try {
    const csrfToken = generateToken(req, res)
    if(!csrfToken) throw new Error()
    res.json({
      success: true,
      csrfToken: csrfToken,
      message: 'Token CSRF gerado com sucesso'
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).json('Erro ao gerar token CSRF');
  }
})

export default authRouter