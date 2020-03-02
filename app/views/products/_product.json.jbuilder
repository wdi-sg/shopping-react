json.extract! product, :id, :image, :title, :content, :price, :user_id, :created_at, :updated_at
json.url product_url(product, format: :json)
