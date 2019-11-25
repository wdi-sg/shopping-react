class ProductsController < ApplicationController
  def index
    @products = Product.all
    # render json: @products
  end

  def search
    name = request.params[:name]
    # @products = Product.where(name: name)
    @products = Product.search_by_product_name(name)
    render json: @products
  end

end
