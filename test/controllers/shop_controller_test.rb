require 'test_helper'

class ShopControllerTest < ActionDispatch::IntegrationTest
  test "should get shop" do
    get shop_shop_url
    assert_response :success
  end

end
