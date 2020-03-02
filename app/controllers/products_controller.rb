class ProductsController < ApplicationController
    def index
      @product = Product.all

      respond_to do |format|
        format.json {
            render :json => @product
        }
      
        format.html
      end
    end

    def show
        puts "HEHEHEHEHEHEHEHEH"
        puts params[:id]
        @product = Product.find(params[:id])

        respond_to do |format|
          format.json {
              render :json => @product
          }
        
          format.html
        end
      end
  end