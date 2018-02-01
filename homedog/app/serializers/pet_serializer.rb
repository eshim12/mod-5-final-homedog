class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pet_owner_id

  belongs_to :pet_owner
end
