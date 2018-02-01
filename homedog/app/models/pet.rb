class Pet < ApplicationRecord
  belongs_to :pet_owner, :class_name => 'User', foreign_key: :pet_owner_id
end
