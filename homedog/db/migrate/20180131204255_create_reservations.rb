class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :host_id
      t.integer :pet_owner_id

      t.timestamps
    end
  end
end
