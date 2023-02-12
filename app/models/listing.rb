class Listing < ApplicationRecord
  belongs_to :host, class_name: 'User'
end
