@regression
Feature: Product Functionality

  Scenario: Add Backpack Product To Cart

    Given User launches SauceDemo
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks login button
    And User adds Backpack to cart
    Then Cart count should be "1"