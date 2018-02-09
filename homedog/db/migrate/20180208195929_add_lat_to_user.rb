class AddLatToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :lat, :decimal
  end
end
