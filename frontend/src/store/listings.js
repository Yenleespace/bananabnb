import csrfFetch from "./csrf.js";
import { addReviews } from "./reviews.js";
import { addUsers } from "./users.js";
import { addReservations } from "./reservations.js"

// Listing index start
// 
// 
const SET_LISTINGS = 'listings/setListings';
const RECEIVE_LISTINGS = 'listings/receive_listings';

// const ADD_BENCH = 'benches/addBench';

const setListings = listings => ({
    type: SET_LISTINGS,
    payload: listings    
});

const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
})

export const fetchListings = (filters) => async dispatch => {
    const filterParams = new URLSearchParams(filters);
    const response = await csrfFetch(`/api/listings${filterParams}`);            
    const data = await response.json();          
    dispatch(setListings(data.listings));    
    return response;
};

export const fetchListingsType = (filter) => async dispatch => {
    const res = await csrfFetch(`/api/listings/filters/${filter}`)

    let data = await res.json()
    dispatch(setListings(data.listings));    
    
}

// Listing end
// 
// 

// 
// Listing create start
// 

const ADD_LISTING = 'listings/addListing';

export const addListing = listing => ({
    type: ADD_LISTING,
    payload: listing
});


export const createListing = listingFormData => async dispatch => {    
    
    const response = await csrfFetch("/api/listings", {        
        method: "POST",
        body: listingFormData
    });
    
    const data = await response.json();
    dispatch(addListing(data.listing));    
    // dispatch(addListing(data.user));    
    return response;
};

// 
// Listing create end
// 


// show
export const fetchListing = listingId => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listingId}`);    
    const data = await response.json();           
    dispatch(addListing(data.listing));
    dispatch(addReviews(data.reviews));    
    dispatch(addReservations(data.reservations));    
    return response;
}

// show end




function listingsReducer(state = {}, action) {
    switch (action.type) {
        case SET_LISTINGS:            
            return action.payload;
        case ADD_LISTING:
            const listing = action.payload;
            return { ...state, [listing.id]: listing };
        default:
            return state;
    }
}

export default listingsReducer;
