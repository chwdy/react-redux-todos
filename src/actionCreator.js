export const ADDTODO = "ADDTODO"
export const REMOVETODO = "REMOVETODO"
export const GETTODOS = "GETTODOS"

export function addtodo(t) {
    
    return dispatch => {
        return fetch("http://localhost:3000/api/todos", {
            method: 'post',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body:JSON.stringify({name:t})
        })
            .then(res => res.json())
            .then(data => dispatch(handleAdd(data)))
            .catch(e => console.log(e))
    }
}
export function getTodos() {
    return dispatch => {
        return fetch("http://localhost:3000/api/todos")
            .then(res => res.json())
            .then(data => dispatch(handleTodos(data)))
            .catch(e => console.log(e))
    }
}

export function removetodo(id) {
   return  dispatch=>{
        return fetch(`http://localhost:3000/api/todos/${id}`,{
            method:'delete'
        })
        .then(res=>res)
        .then(data=>dispatch(handleRemove(id)))
        .catch(e=>console.log(e))
    }
}
function handleAdd(t) {
    return {
        type: ADDTODO,
        task: t
    }
}

function handleRemove(id) {
    return {
        type: REMOVETODO,
        id
    }
}

function handleTodos(data) {
    return {
        type: GETTODOS,
        data
    }
}