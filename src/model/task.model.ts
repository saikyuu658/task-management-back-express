import { Prisma, PrismaClient, type Task } from "@prisma/client"



class TaskModel {

    constructor(
        private prisma = new PrismaClient()
    ) { }

    async findAll (): Promise<Prisma.TaskCreateInput[]> {
        try {
            return await this.prisma.task.findMany()
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async findOneById ( params: { id : number} ) : Promise<Prisma.TaskCreateInput | null>{
        try {
            const { id } = params;
            return await this.prisma.task.findUnique({
                where :{ 
                    id: id
                }
            })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async create ( data : Prisma.TaskCreateInput ): Promise<Prisma.TaskCreateInput> {
        try {
            return await this.prisma.task.create({data});
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async update ( id: number,task: Prisma.TaskUpdateInput):Promise<Prisma.TaskUpdateInput> {
        try {
            return await this.prisma.task.update({data: task, where: {id: id}})
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async delete (params : {id: number}): Promise<Prisma.TaskUpdateInput> {
        try {
            const {id} = params;
            return await this.prisma.task.delete({
                where: {
                    id : id
                }
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    
}

export default TaskModel
