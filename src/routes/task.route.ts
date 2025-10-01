import { Router } from "express";
import * as taskController from "../controllers/task.controller.js"
const taskRouter = Router()


taskRouter.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

taskRouter.get('/', taskController.findAll)
taskRouter.get('/:id', taskController.findOneById)
taskRouter.post('/', taskController.create)
taskRouter.put('/', taskController.update)
taskRouter.delete('/:id', taskController.deleteById)


export default taskRouter;
