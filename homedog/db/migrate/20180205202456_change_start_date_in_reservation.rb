class ChangeStartDateInReservation < ActiveRecord::Migration[5.1]
  def change
    change_column :reservations, :start_date, :string
  end
end
