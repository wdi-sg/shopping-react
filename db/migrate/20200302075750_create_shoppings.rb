class CreateShoppings < ActiveRecord::Migration[6.0]
  def change
    create_table :shoppings do |t|
      t.string :name
      t.string :price
      t.string :url
      t.string :description

      t.timestamps
    end
  end
end
