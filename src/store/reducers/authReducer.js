const initState = {
    authError: null,
    isAuthenticated: false,
    users:[
        {
            name: 'Vineet Sharma',
            email: 'sharmava05@gmail.com',
            password: 'Vin1234' 
        }
    ]
}

const authReducer = (state=initState, action) => {
    return state
}
export default authReducer