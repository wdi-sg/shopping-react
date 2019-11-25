json.array!(@products) do |product|
    json.extract! product, :name, :price, :image_url, :description
    # json.url products_url(product, format: :json)
end