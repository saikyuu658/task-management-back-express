import type { Request, Response, NextFunction } from "express";
import TaskModel from "../model/task.model.js";
import type { createDtoTask, updateDtoTask } from "../dto/task.dto.js";

const taskModel = new TaskModel()

export const findAll = async (req: Request, res: Response) => {
    try {
        const result = await taskModel.findAll()   
        console.log(result)     
        return res.status(200).json(result)
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
}

export const findOneById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        if(!id) throw new Error('task not found')
        const result = await taskModel.findOneById({id})   
        return res.status(200).json(result)     
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const {task} = req.body
        const newTask:createDtoTask = {
            completed: task.completed,
            text: task.text,
        }
        const result =  await taskModel.create(newTask)   
        return res.status(200).json(result)       
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const {task} = req.body
        const updateTask :updateDtoTask = {
            completed: task.completed,
            id: task.id,
            text: task.text,
        }
       const result =  await taskModel.update(updateTask)
        return res.status(200).json(result)         
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if(!id) throw new Error('task not found')
        const result = await taskModel.delete({id})   
        return res.status(200).json(result)  
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
}