class AddUrlToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :image_url, :text
  end
end
