class User < ApplicationRecord
  # has_attached_file :img, styles { small: "64x64", med: "100x100", large: "200x200" }
  # validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  
  # As Host
  has_many :reservations, :foreign_key => "host_id"
  has_many :pet_owners, through: :reservations, foreign_key: :host_id
  # As Pet_owner
  has_many :reservations, :foreign_key => "pet_owner_id"
  has_many :hosts, through: :reservations, foreign_key: :pet_owner_id
  has_many :pets, :foreign_key => "pet_owner_id"

  # has_many :reviews, through: :reservations, foreign_key: :pet_owner_id
end
