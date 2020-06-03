json.extract! item, :id, :name, :price, :url, :description, :created_at, :updated_at
json.url item_url(item, format: :json)
