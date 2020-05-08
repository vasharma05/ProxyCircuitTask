const initState={
    todos: {
        'sharmava05@gmail.com':[{
            id: 1,
            text :'Vineet',
            completed:false
        }]
    }
}

const todoReducer = (state = initState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            
            if (action.user.email in state.todos){
                state.todos[action.user.email].push(action.todo)
            }else{
                state.todos[action.user.email] = [action.todo]
            }
            return state
        case 'COMPLETED':
            console.log(state.todos[action.email]);
            
            state.todos[action.email][action.id-1].completed = action.completed
            return state
        case 'REGISTERED_USER':
            console.log('here')
            state.todos[action.user.email] = []
            console.log(state.todos[action.user.email])
        default:
            break
    }
    return state
}

export default todoReducer