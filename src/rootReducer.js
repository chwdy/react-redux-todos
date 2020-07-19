import {ADDTODO,REMOVETODO} from "./actionCreator"



const initstate ={
    todos:[],
    id:0
}


export default function rootReducer(state =initstate,action){
    switch(action.type){
        case ADDTODO:
            var newstate = {...state}
            newstate.id++
            debugger
            return {
                ...newstate,
                todos:[...newstate.todos,{task:action.task,id:newstate.id}]
            }
        case REMOVETODO:
            console.log(action.id);
            let todos = state.todos.filter(t=>(t.id !== +action.id))
            return {
                ...state,
                todos:todos
            }
        default:
            return state
    }
}