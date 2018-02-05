class ChangeEndDateInReservation < ActiveRecord::Migration[5.1]
  def change
    change_column :reservations, :end_date, :string
  end
end
