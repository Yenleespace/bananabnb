import csrfFetch from "./csrf.js";
import { addReviews } from "./reviews.js";
import { addUsers } from "./users.js";


// Listing index start
// 
// 
const SET_LISTINGS = 'listings/setListings';
// const ADD_BENCH = 'benches/addBench';

const setListings = listings => ({
    type: SET_LISTINGS,
    payload: listings    
});

export const fetchListings = () => async dispatch => {
    // const filterParams = new URLSearchParams(filters);
    const response = await csrfFetch(`/api/listings`);            
    const data = await response.json();          
    dispatch(setListings(data.listings));    
    return response;
};
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
