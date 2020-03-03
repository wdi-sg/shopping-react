require "application_system_test_case"

class ShoppingsTest < ApplicationSystemTestCase
  setup do
    @shopping = shoppings(:one)
  end

  test "visiting the index" do
    visit shoppings_url
    assert_selector "h1", text: "Shoppings"
  end

  test "creating a Shopping" do
    visit shoppings_url
    click_on "New Shopping"

    fill_in "Description", with: @shopping.description
    fill_in "Imgurl", with: @shopping.imgurl
    fill_in "Name", with: @shopping.name
    fill_in "Price", with: @shopping.price
    click_on "Create Shopping"

    assert_text "Shopping was successfully created"
    click_on "Back"
  end

  test "updating a Shopping" do
    visit shoppings_url
    click_on "Edit", match: :first

    fill_in "Description", with: @shopping.description
    fill_in "Imgurl", with: @shopping.imgurl
    fill_in "Name", with: @shopping.name
    fill_in "Price", with: @shopping.price
    click_on "Update Shopping"

    assert_text "Shopping was successfully updated"
    click_on "Back"
  end

  test "destroying a Shopping" do
    visit shoppings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Shopping was successfully destroyed"
  end
end
