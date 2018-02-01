class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.string :host_id
      t.string :pet_owner_id

      t.timestamps
    end
  end
end
