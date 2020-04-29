
//this is the initial state of the initialSignUpState
const initialSignUpState = {
    isSignedUp: false
}

//Creating a reducer which should be passed as an argument to createStore function
const reducer = (state = initialSignUpState, action) =>{
    if(action.type === 'SIGNUP'){
        return {
            isSignedUp: true
        }
    }
    return state;
}

export default reducer;