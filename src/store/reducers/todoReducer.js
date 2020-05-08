const initState={
    todos: [{
        id: 1,
        text :'Vineet',
        completed:false
    }]
}

const todoReducer = (state = initState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            state.todos.push(action.todo)
            return state
        case 'COMPLETED':
            state.todos[action.id-1].completed = action.completed
            return state
        default:
            break
    }
    return state
}

export default todoReducer