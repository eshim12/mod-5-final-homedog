class User < ApplicationRecord
  has_secure_password
  # validates_attachment :img,
  # content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  # validates :img, attachment_presence: true
  # has_attached_file :img, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  # As Host
  has_many :host_reservations, :class_name => "Reservation", :foreign_key => "host_id"

  # As Pet_owner
  has_many :owner_reservations, :class_name => "Reservation", :foreign_key => "pet_owner_id"

  has_many :pets, :foreign_key => "pet_owner_id"

  has_many :reviews, through: :owner_reservations
end
