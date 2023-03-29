json.extract! reservation, :id, :user_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :created_at, :updated_at
json.listingPropertyType reservation.listing.filter
json.listingCity reservation.listing.city
json.listingOwner reservation.listing.host.first_name
json.imgUrls reservation.listing.photos.map {|file| url_for(file)}



