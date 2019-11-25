json.array!(@products) do |product|
    json.extract! product, :name, :price, :image_url, :description, :id
    # json.url products_url(product, format: :json)
end