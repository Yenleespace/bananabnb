import csrfFetch from "./csrf.js";


const ADD_REVIEW = 'reviews/addReview';
const ADD_REVIEWS = 'reviews/addReviews';
const REMOVE_REVIEW = 'reviews/removeReview';

const addReview = review => ({
    type: ADD_REVIEW,
    payload: review
});

const removeReview = review => ({
    type: REMOVE_REVIEW,
    payload: review
});

export const addReviews = reviews => ({
    type: ADD_REVIEWS,
    payload: reviews
});

export const getListingReviews = listingId => state => (Object.values(state.reviews)
        .filter(review => review.listingId === listingId)
        .map(review => ({
            ...review,
            // user: state.users[review.userId]?.firstName
        }))
);

export const createReview = (review) => async dispatch => {
    
    const response = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(review)
    });
    const data = await response.json();
    dispatch(addReview(data.review));
    // dispatch(addUser(data.user));
    // dispatch(addBench(data.listing));
    return response;
};

export const destroyReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    dispatch(removeReview(data.review));
    // dispatch(addListing(data.listing));
    return response;
};

function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_REVIEW: {
            const review = action.payload;
            return { ...state, [review.id]: review };
        }
        case REMOVE_REVIEW: {
            const review = action.payload;
            const { [review.id]: _remove, ...newState } = state;
            return newState;
        }
        case ADD_REVIEWS:
            const reviews = action.payload;            
            return { ...state, ...reviews };
        default:
            return state;
    }
}

export default reviewsReducer;
