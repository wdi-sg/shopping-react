class Product < ApplicationRecord
    include PgSearch::Model
    pg_search_scope :search_by_product_name, against: [:name]
end
