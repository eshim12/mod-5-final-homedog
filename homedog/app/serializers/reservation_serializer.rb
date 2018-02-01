class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :host_id, :pet_owner_id, :start_date, :end_date

  belongs_to :host, :class_name => "User", foreign_key: :host_id
  belongs_to :pet_owner, :class_name => "User", foreign_key: :pet_owner_id

  has_one :review
end
