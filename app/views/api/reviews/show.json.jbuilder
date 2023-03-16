# json.partial! "reviews/review2", review: @review

json.review do
    json.partial! '/api/reviews/review', review: @review
  end
  
#   json.user do
#     json.partial! '/api/users/user', user: @review.user
#   end
  
  json.reviewerName @review.user.first_name
  