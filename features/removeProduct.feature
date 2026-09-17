@regression
@removeProduct
Feature: Remove Product Functionality

  Scenario: Remove Backpack From Cart

    Given User launches SauceDemo
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks login button
    And User adds Backpack to cart
    And User removes Backpack from cart
    Then Cart badge should not be visible