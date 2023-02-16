class Listing < ApplicationRecord
  belongs_to :host, class_name: 'User'

  has_many_attached :photos,
    # class_name: :Listing,
    dependent: :destroy

  has_many :reviews, dependent: :destroy
  has_many :reservations,dependent: :destroy
    


end
