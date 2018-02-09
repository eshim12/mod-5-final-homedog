class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :content, :rating

  belongs_to :reservation
end
