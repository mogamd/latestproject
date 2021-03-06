import { 
    createStore, 
    combineReducers, 
    applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer, 
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({

   

    
    
    // User
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userList : userListReducer,
    userDelete : userDeleteReducer,
    userUpdate: userUpdateReducer,
    // =======================================
    
   

})




const initialState = {
    
    
}



// ===============================================================


// ===============================================================

const middleware = [thunk]

// ===============================================================

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


// ===============================================================


export default store;