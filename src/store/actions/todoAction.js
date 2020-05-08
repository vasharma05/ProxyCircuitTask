const createTodo = (todo)=>{
    return (dispatch) =>{
        dispatch({type:'ADD_TODO', todo})
    }
}

export default createTodo