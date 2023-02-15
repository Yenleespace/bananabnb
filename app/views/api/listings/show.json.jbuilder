
json.listing do
  json.partial! '/api/listings/listing', listing: @listing
  json.hostName @host.first_name
end

listing_reviews = @listing.reviews.includes(:user)

json.reviews do 
  listing_reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end


#   listing_reviews.each do |review|
#     json.set! review.id do
#       json.extract! review,            
#     end
# end
  