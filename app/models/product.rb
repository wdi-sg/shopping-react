class Product < ApplicationRecord
    def self.order_list(sort_order)
    if sort_order == "price"
      order(price: :asc)
    elsif sort_order == "name"
      order(name: :asc)
    else
      order(created_at: :asc)
    end
  end
end