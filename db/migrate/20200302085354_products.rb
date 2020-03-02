class Products < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :description
      t.string :image_url
      t.timestamps
    end
  end
end
