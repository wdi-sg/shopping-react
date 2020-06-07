json.extract! product, :id, :name, :price, :imgurl, :description, :created_at, :updated_at
json.url product_url(product, format: :json)
