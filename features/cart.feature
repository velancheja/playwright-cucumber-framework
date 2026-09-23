@regression
Feature: Cart Functionality

  Scenario: Verify Product In Cart

    Given User launches SauceDemo
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks login button
    And User adds Backpack to cart
    And User clicks Cart icon
    Then User should see "Sauce Labs Backpack" in cart