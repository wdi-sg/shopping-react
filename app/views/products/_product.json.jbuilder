json.extract! product, :id, :name, :price, :url, :description, :created_at, :updated_at
json.url product_url(product, format: :json)
