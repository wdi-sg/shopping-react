class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /products
  # GET /products.json
  def index
    puts params[:foo]

    if params[:foo] == "all"
    @products = Product.all


    elsif params[:foo] == "name"
      puts "I am in the name section"
      if params[:productName] == nil
        @products = Product.all.order("name")
      else
        @products = Product.where("name like ?", "%#{params[:productName]}%").order("name")
      end

    elsif params[:foo] == "id"
      puts "I am in the id section"
      if params[:id] == nil
        @products = Product.all.order("price")
      else
        @products = Product.where(id: params[:id])
      end

    elsif params[:foo] == "price"
      puts "I am in the price section"
      if params[:productName] == nil
        puts "hello price"

        @products = Product.all.order("price")
      else
        puts "Not pricesty"
        @products = Product.where("name like ?", "%#{params[:productName]}%").order("price")

      end
    elsif params[:foo] == "searchName"

      @products = Product.where("name like ?", "%#{params[:productName]}%")

    else
      puts "bye"
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :price, :image_url, :description)
    end
end