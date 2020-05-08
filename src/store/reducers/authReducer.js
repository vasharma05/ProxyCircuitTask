const user = {
    authError: null,
    isAuthenticated: false,
    user: null
}
const initState = {
    users:[
        {
            name: 'Vineet Sharma',
            email: 'sharmava05@gmail.com',
            password: 'Vin1234' 
        }
    ]
}

const authReducer = (state=user, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            let user = initState.users.find(user =>user.email === action.email )
            console.log(user)
            if (user === undefined){
                state.authError = 'No User Found'
                return state
            }else if(user.password === action.password){
                state.user = user
                state.isAuthenticated = true
                return state
            }else{
                state.authError = 'Password Mismatch'
                return state
            }
        case 'REGISTER_USER':
            initState.users.push(action.user)
            state.user = action.user
            state.isAuthenticated = true
            return state
            break
        case 'ALL_USERS':
            console.log(initState.users)
            break
        case 'LOGOUT_USER':
            state.user = null
            state.isAuthenticated = false 
            return state
        default:
            break
    }
    return state
}
export default authReducer