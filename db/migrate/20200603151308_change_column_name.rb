class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :products, :url, :image_url
  end
end
