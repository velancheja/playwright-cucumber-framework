@regression
Feature: Product Functionality

  Scenario: Add Backpack Product To Cart

    Given User launches SauceDemo
    When User logs in with valid credentials
    And User adds Backpack to cart
    Then Cart count should be "1"