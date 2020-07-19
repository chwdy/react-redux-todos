import {ADDTODO,REMOVETODO,GETTODOS} from "./actionCreator"



const initstate ={
    todos:[]
}


export default function rootReducer(state =initstate,action){
    switch(action.type){
        case GETTODOS:
            return {...state,todos:action.data}
        case ADDTODO:
            console.log(action);
            return {
                ...state,
            
                todos:[...state.todos,action.task]
            }
        case REMOVETODO:
 //id in todo-api is string
            let todos = state.todos.filter(t=>(t._id !== action.id))
            return {
                ...state,
                todos:todos
            }
        default:
            return state
    }
}