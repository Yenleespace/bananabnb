import React from 'react'
import PropTypes from 'prop-types'

const ListingListItem = ({ listing }) => {
    
    return (
        <div>
            <h5>title: {listing.title}</h5>
            {/* <h5>description: {listing.description}</h5> */}
            {/* <h5>Address: {listing.address}</h5> */}
            <h5>city: {listing.city}</h5>
            <h5>price: {listing.price}</h5>
            <h5>state: {listing.state}</h5>
            {/* <h5>zipcode: {listing.zipCode}</h5> */}
        </div>
    )
}
export default ListingListItem