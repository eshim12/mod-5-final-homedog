class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pet_owner, :img

end
