class OnepageController < ApplicationController
  def index
    @current_page = "index"
  end

  def product
    @cureent_page = "product"
    render 'index'
  end
end