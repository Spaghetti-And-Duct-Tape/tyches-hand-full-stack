class CreatePlayers < ActiveRecord::Migration[7.2]
  def change
    create_table :players do |t|
      #Player attributes
      t.string :username, null: false
      t.string :password_digest
      t.boolean :is_guest, default: false, null: false
    end
  end
end
