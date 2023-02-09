import { csrfFetch } from "./csrf";

    // ACTION TYPES
    const RECEIVE_USER = 'users/RECEIVE_USER';
    const REMOVE_USER = 'users/REMOVE_USER';

    // ACTION CREATORS
    export const receiveUser = user => ({
        type: RECEIVE_USER,
        payload: user
    });

    export const removeUser = userId => ({
        type: REMOVE_USER,
        userId // userId: userId
    });
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}


    // THUNK ACTION CREATORS
    export const loginUser = (user, setUser) => async dispatch => {
        let res = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify(user)
        });
        let data = await res.json();
        storeCurrentUser(data.user);                
        setUser({ isShown: true })
        dispatch(receiveUser(data.user))
        return res;
    };

    export const logoutUser = (userId) => async dispatch => {
        let res = await csrfFetch('/api/session', {
            method: 'DELETE'
        });
        sessionStorage.setItem('currentUser', null)                
        dispatch(removeUser(userId));
        return res;
    }

    export const createUser = user => async dispatch => {
        let res = await csrfFetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user)
        });
        let data = await res.json();        
        sessionStorage.setItem('currentUser', JSON.stringify(data.user));
        dispatch(receiveUser(data.user));
    }

    const initialState = {
        user: JSON.parse(sessionStorage.getItem("currentUser"))
    };
    // REDUCER
const userReducer = (state = initialState, action ) => {
        const nextState = { ...state };

        switch(action.type) {
            case RECEIVE_USER:   
                return { ...state, user: action.payload };
            case REMOVE_USER:
                delete nextState[action.userId];
                return nextState;
            default:
                return state;
        }
    };

    export default userReducer