class ChangeUserColumnToPets < ActiveRecord::Migration[5.1]
  def change
    rename_column :pets, :user_id, :pet_owner_id
  end
end
