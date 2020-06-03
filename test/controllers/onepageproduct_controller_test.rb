require 'test_helper'

class OnepageproductControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get onepageproduct_index_url
    assert_response :success
  end

end
