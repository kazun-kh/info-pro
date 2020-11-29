require 'test_helper'

class ZavassControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get zavass_index_url
    assert_response :success
  end

end
