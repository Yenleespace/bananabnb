json.extract! listing,
              :id,
              :title,
              :description,
              :address,
              :state,
              :city,
              :zip_code,
              :price,
              :host_id,
              :created_at,
              :updated_at


if listing.photos.attached?
  json.imageUrls listing.photos.map { |file| url_for(file) }
else
  nil
end

# if listing.photos.attached?
#   json.photos_url listing.photos.map {|photo| url_for(photo)}
# end
# do |photo|
#   photo
# end
# end
