class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :reservation_id

      t.timestamps
    end
  end
end
