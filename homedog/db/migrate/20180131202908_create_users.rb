class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :full_name
      t.string :email
      t.boolean :is_host, default: true
      t.string :password
      t.string :blob

      t.timestamps
    end
  end
end
