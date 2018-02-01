class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password
  # , :img THIS KEEPS GIVING ME AN ERROR PUT IN CONTROLLER AS WELL LATER
  # has_attached_file :img, styles { small: "64x64", med: "100x100", large: "200x200" }
  # validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  # As Host
  has_many :reservations
  has_many :pet_owners, through: :reservations
  # As Pet_owner
  has_many :pets
  has_many :hosts, through: :reservations
  has_many :reviews, through: :reservations
end
