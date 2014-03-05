class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :url
      t.string :uri
      t.string :ocw
      t.text :description
      t.date :date_started
      t.boolean :verified
      t.references :user, index: true

      t.timestamps
    end
  end
end
