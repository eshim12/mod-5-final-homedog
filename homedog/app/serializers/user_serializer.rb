class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password_digest, :is_host, :description, :address, :blob, :lat, :lng
  # , :img THIS KEEPS GIVING ME AN ERROR PUT IN CONTROLLER AS WELL LATER

  # As Host
  has_many :host_reservations

  # # As Pet_owner
  has_many :owner_reservations
  has_many :pets
  has_many :reviews
end
