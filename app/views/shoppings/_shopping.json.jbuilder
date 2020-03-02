json.extract! shopping, :id, :name, :price, :url, :description, :created_at, :updated_at
json.url shopping_url(shopping, format: :json)
