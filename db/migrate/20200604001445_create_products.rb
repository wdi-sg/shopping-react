class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :url
      t.text :description

      t.timestamps
    end
  end
end
