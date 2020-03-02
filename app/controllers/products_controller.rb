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

  def show
    @product = Product.where(id: params[:id])

    respond_to do |format|
      format.json {
        render :json => @product
      }

      format.html
    end
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end
