class Product < ApplicationRecord
    def calculate_value(quantity)
        (product_price.to_f * quantity.to_f).round(2)
    end

    def product_price
        request = self.price
        response = (request)
    end

end
