import csrfFetch from "./csrf.js";
import { showSuccessfulReservation } from "./ui"




const ADD_RESERVATION = 'reservations/addReservation';
const ADD_RESERVATIONS = 'reservations/addReservations';
const REMOVE_RESERVATION = 'reservations/removeReservation';

const addReservation = reservation => ({
    type: ADD_RESERVATION,
    payload: reservation
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    payload: reservationId
});

export const addReservations = reservations => ({
    type: ADD_RESERVATIONS,
    payload: reservations
});

export const getListingReservations = listingId => state => (Object.values(state.reservations)
    .filter(reservation => reservation.listingId === listingId)
    .map(reservation => ({
        ...reservation,
        // user: state.users[review.userId]?.firstName
    }))
);

export const fetchUsersReservations = (userId) => async dispatch => {        
    const res = await csrfFetch(`/api/users/${userId}/reservations`)

    let data = await res.json()
    dispatch(addReservations(data))
}


export const createReservation = (reservation) => async dispatch => {

    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify({reservation: reservation})
    });

    if(response.ok) {
        const data = await response.json();
        dispatch(addReservation(data));
        dispatch(showSuccessfulReservation())

    }
    
    
    return response;
};

export const destroyReservation = (reservationId) => async dispatch => {
    // debugger
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
    });
    // return response;
    if (response.ok) {
        dispatch(removeReservation(reservationId))
    }
};

function reservationsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_RESERVATION: {
            const reservation = action.payload;            
            return { ...state};
        }
        case REMOVE_RESERVATION: {
            // debugger
            const reservationKey = Object.keys(state).filter(key => state[key].id === action.payload? key:null)
            let newState = {...state}
            delete newState[reservationKey[0]]
            // const reservation = action.payload;
            // const { [reservation]: _remove, ...newState } = state;
            return newState;
        }
        case ADD_RESERVATIONS:
            const reservations = action.payload;            
            return {...reservations };
        default:
            return state;
    }
}

export default reservationsReducer;
