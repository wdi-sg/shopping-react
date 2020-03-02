class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :image
      t.string :title
      t.text :content
      t.string :price
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
