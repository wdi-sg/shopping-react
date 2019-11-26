json.extract! product, :id, :title, :content, :user_id, :created_at, :updated_at
json.url product_url(product, format: :json)
