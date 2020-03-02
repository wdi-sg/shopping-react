class ProductsController < ApplicationController
    
    def main 
    end
    
    def index
        @products = Product.all()

        respond_to do |format|
            format.json {
                render :json => @products
            }
          
            format.html
          end
    end

    def show
        @product = Product.find(params[:id])

        respond_to do |format|
            format.json {
                render :json => @product
            }
            format.html
          end
    end
    
end
