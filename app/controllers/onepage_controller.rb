class OnepageController < ApplicationController
  def index
    @current_page = "index"
  end

  def product
    @current_page = "product"
    @product = Product.find(params[:id])
    render 'index'
  end
end