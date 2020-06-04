class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.text :description
      t.text :image_url

      t.timestamps
    end
  end
end
