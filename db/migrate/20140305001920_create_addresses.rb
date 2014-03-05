class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :continent
      t.string :country
      t.string :city
      t.string :address
      t.decimal :lat
      t.decimal :long
      t.references :organization, index: true

      t.timestamps
    end
  end
end
