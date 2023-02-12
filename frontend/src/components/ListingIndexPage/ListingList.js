import React from 'react'
import ListingListItem from './ListingListItem'


function ListingList({ listings }){
    return (
        <div className="listing-list">
            <h1>Listings: </h1>
            {listings.map((listing) => (
                <ListingListItem
                    key={listing.id}
                    listing={listing}
                />
            ))}
                
            
        </div>
    )
}

export default ListingList