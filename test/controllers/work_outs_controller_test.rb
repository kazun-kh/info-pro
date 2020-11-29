require 'test_helper'

class WorkOutsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get work_outs_index_url
    assert_response :success
  end

end
