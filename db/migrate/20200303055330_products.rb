class Products < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t| 
      t.string :name
      t.integer :price
      t.string :image_url
      t.text :description
    end
  end
end
