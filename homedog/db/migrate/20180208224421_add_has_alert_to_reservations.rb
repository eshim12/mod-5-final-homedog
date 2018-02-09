class AddHasAlertToReservations < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :has_alert, :boolean, default: true
  end
end
