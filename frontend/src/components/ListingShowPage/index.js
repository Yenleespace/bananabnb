import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchListing } from '../../store/listings'
import { Link } from 'react-router-dom'
import { getListingReviews } from '../../store/reviews'
import ReviewForm from '../Reviews/ReviewForm'
import './ListingShow.css'

import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import five from "../../assets/5.jpg"

const ListingShowPage = () => {
  const { listingId } = useParams()
  const dispatch = useDispatch()
  const listing = useSelector(state => state.listings[listingId])
  const sessionUser = useSelector(state => state.session.user);
  const reviews = useSelector(getListingReviews(parseInt(listingId)));

  useEffect(() => {
    dispatch(fetchListing(listingId))
  }, [listingId, dispatch])

  if (!listing) {
    return null;
  }


  debugger
  return (
    <div className="show-card">
      <div>
        <div className='wrapper__header'>
          <h2 className='head-title'>{listing.title}</h2>
          <p className='head-review'>★ · 10 reviews · {listing.city} {listing.state} </p>
        </div>
        <div className='show-card-photos_wrapper'>
          <div className="show-card-photos">
            <img src={listing.imageUrls[0]} alt="foo" className="item" />
            <img src={listing.imageUrls[1]} alt="foo" className="item" />
            <img src={one} className="item" />
            <img src={two} className="item" />
            <img src={three} className="item" />
            {/* <img src={four} className="item" />
        <img src={five} className="item" /> */}
          </div>
        </div>
      </div>



      <div className='listing-container'>
        <div className="listing-info">
          <h3>Home hosted by {listing.hostName}</h3>
          <h5 >3 guests 3 bedrooms 3 bed 1 bath</h5>
        </div>
      </div>
      <iframe
        loading="lazy"
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAbHcAc_XtGY9mK292vxweVUq7vo1G8oX8&q=${listing.address} + ${listing.city} + ${listing.state}`}>
      </iframe>



      <h5>Reviews</h5>
      {reviews.map(review => (
        <div className="review" key={review.id}>

          <p> name: {review.user.first_name} {review.user.last_name}</p>
          <p> {review.review} Rating: {review.rating}</p>
        </div>))}
      <LeaveReview listing={listing} />
      <Link to="/">Back to Listings Index</Link>
    </div>
  )
}


function LeaveReview({ listing }) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return showReviewForm ? (
    <ReviewForm
      listing={listing}
      closeForm={() => setShowReviewForm(false)}
    />
  ) : (
    <button className="button" onClick={() => setShowReviewForm(true)}>
      Leave a Review
    </button>
  );
}

export default ListingShowPage