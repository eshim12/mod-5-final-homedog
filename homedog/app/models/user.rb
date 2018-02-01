class User < ApplicationRecord
  has_secure_password
  # has_attached_file :img, styles { small: "64x64", med: "100x100", large: "200x200" }
  # validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  # As Host
  has_many :host_reservations, :class_name => "Reservation", :foreign_key => "host_id"

  # As Pet_owner
  has_many :owner_reservations, :class_name => "Reservation", :foreign_key => "pet_owner_id"

  has_many :pets, :foreign_key => "pet_owner_id"

  has_many :reviews, through: :owner_reservations
end
