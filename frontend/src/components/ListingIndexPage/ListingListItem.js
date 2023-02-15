import React from 'react'
import PropTypes from 'prop-types'
import mainpic from '../../assets/1.jpg'
import { useHistory } from 'react-router-dom'

const ListingListItem = ({ listing }) => {        
    const history = useHistory(); 


    return (
        <div className="listing-card"        
            onClick={() => history.push(`/listings/${listing.id}`)}>
            {/* <img alt="1" src={listing.imageUrls[0]} />  */}
            <img className='index-pic' alt="1" src={mainpic} />
            <div className='index-loc-rate'>
            <p className='index-location'>{listing.city}</p>
            <p>★{listing.rating}</p>            
            </div>
            <p className='index-title'>{listing.title}</p>            
            <p>${listing.price} night</p>

            

            
        </div>
    )
}
export default ListingListItem