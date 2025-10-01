import type { promises } from "dns"
import type { createDtoTask, updateDtoTask } from "../dto/task.dto.js"


class TaskModel {
    async findAll (): Promise<updateDtoTask[]> {
        try {
            await new Promise(e=> setTimeout(e,1000))
            const task: updateDtoTask[] = []
            return task;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async findOneById ( params: { id : string} ) : Promise<updateDtoTask | null>{
        try {
            const { id } = params;
            await new Promise(e=> setTimeout(e,1000))
            const task = null
            return task;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async create ( newTask : createDtoTask ): Promise<createDtoTask> {
        try {
            await new Promise(e=> setTimeout(e,1000))
            return newTask;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async update (task: updateDtoTask):Promise<updateDtoTask> {
        try {
            await new Promise(e=> setTimeout(e,1000))
            return task;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async delete (params : {id: string}): Promise<string | null> {
        try {
            const {id} = params;
            await new Promise(e=> setTimeout(e,1000))
            return id;
        } catch (error:any) {
            throw new Error(error.message)
            
        }
    }
}

export default TaskModel
