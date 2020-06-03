class ProductsController < ApplicationController
    def index
        @products = Product.all 
        respond_to do |format|
            format.json {
                render :json => @products
            }
          
            format.html
          end
    end
end
