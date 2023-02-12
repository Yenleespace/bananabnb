class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.text :description
      t.string :address
      t.string :state
      t.string :city
      t.integer :zip_code
      t.float :price
      t.references :host, null: false, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
