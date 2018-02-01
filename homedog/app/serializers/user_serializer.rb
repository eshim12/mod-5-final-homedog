class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password_digest, :is_host
  # , :img THIS KEEPS GIVING ME AN ERROR PUT IN CONTROLLER AS WELL LATER
  # has_attached_file :img, styles { small: "64x64", med: "100x100", large: "200x200" }
  # validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  # As Host
  has_many :host_reservations

  # # As Pet_owner
  has_many :owner_reservations
  has_many :pets
  has_many :reviews
end
