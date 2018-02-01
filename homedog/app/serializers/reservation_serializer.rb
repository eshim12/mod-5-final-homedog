class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :host_id, :pet_owner_id, :start_date, :end_date, :review

end
