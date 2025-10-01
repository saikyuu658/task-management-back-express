import type { Request, Response, NextFunction } from "express";
import TaskModel from "../model/task.model.js";

const taskModel = new TaskModel()

export const findAll = async (req: Request, res: Response) => {
    try {
        const result = await taskModel.findAll()   
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
        const result = await taskModel.findOneById({id: parseInt(id)})   
        return res.status(200).json(result)     
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const {task} = req.body
        const result =  await taskModel.create(task)   
        return res.status(200).json(result)       
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const {task} = req.body
        const result =  await taskModel.update(task.id, task)
        return res.status(200).json(result)         
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
}

export const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if(!id) throw new Error('task not found')
        const result = await taskModel.delete({id: parseInt(id)})   
        return res.status(200).json(result)  
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
}