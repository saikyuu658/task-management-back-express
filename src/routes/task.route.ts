import { Router } from "express";
import * as taskController from "../controllers/task.controller.js"
import { auth } from "../middleware/auth.middleware.js";



const taskRouter = Router()
taskRouter.get('/', taskController.findAll)
taskRouter.get('/:id', taskController.findOneById)
taskRouter.post('/', auth, taskController.create)
taskRouter.put('/', auth,taskController.update)
taskRouter.delete('/:id', auth,taskController.deleteById)


export default taskRouter;