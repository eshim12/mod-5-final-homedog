class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :content

  belongs_to :reservation
end
