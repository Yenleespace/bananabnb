import csrfFetch from "./csrf.js";


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

export const createReservation = (reservation) => async dispatch => {

    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify(reservation)
    });
    const data = await response.json();
    dispatch(addReservation(data.reservation));
    // dispatch(addUser(data.user));
    // dispatch(addBench(data.listing));
    return response;
};

export const destroyReservation = (reservationId) => async dispatch => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    dispatch(removeReservation(data.reservation));
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
