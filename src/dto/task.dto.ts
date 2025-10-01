export type createDtoTask = {
    id? : string
    text: string,
    completed: boolean,
    created?: Date
}


export type updateDtoTask = {
    id: string,
    text: string,
    completed: boolean,
    updated?: Date
}

export type task = {
    id: string,
    text: string,
    completed: boolean,
    created: Date,
    updated: Date
}