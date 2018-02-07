class AddImgToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :img, :string
  end
end
