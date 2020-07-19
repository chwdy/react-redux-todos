export const ADDTODO = "ADDTODO"
export const REMOVETODO = "REMOVETODO"

export function addtodo(t){
    return {
        type:ADDTODO,
        task:t
    }
}

export function removetodo(id){
    return {
        type:REMOVETODO,
        id:id
    }
}