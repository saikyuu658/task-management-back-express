import { Router } from "express";
import type { Request, Response } from "express";
const authRouter = Router()

authRouter.get('/token', (req: Request, res: Response) => {
   try {
    const csrfToken = req.csrfToken ? req.csrfToken() : '';
    
    res.json({
      success: true,
      csrfToken: csrfToken,
      message: 'Token CSRF gerado com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao gerar token CSRF'
    });
  }
})

export default authRouter