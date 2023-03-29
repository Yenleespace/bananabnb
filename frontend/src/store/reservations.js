import csrfFetch from "./csrf.js";
import { showSuccessfulReservation } from "./ui"




const ADD_RESERVATION = 'reservations/addReservation';
const ADD_RESERVATIONS = 'reservations/addReservations';
const REMOVE_RESERVATION = 'reservations/removeReservation';

const addReservation = reservation => ({
    type: ADD_RESERVATION,
    payload: reservation
});

const removeReservation = reservation => ({
    type: REMOVE_RESERVATION,
    payload: reservation
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
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    dispatch(removeReservation(data));
    // dispatch(addListing(data.listing));
    return response;
};

function reservationsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_RESERVATION: {
            const reservation = action.payload;            
            return { ...state, [reservation.id]: reservation };
        }
        case REMOVE_RESERVATION: {
            const reservation = action.payload;
            const { [reservation.id]: _remove, ...newState } = state;
            return newState;
        }
        case ADD_RESERVATIONS:
            const reservations = action.payload;            
            return { ...state, ...reservations };
        default:
            return state;
    }
}

export default reservationsReducer;
