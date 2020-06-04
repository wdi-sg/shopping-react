class ProductsController < ApplicationController
  def index
    if params.key?("name")
      @products = Product.where('name LIKE ?', '%' + params[:name] + '%')
    else
      @products = Product.all
    end

    respond_to do |format|
      format.json {render :json => @products}

      format.html
    end
  end

end