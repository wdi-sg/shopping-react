class FixColumnName < ActiveRecord::Migration[6.0]
  def change
      rename_column :products, :img_url, :image_url
  end
end