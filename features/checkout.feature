@smoke
@checkout
Feature: Checkout Functionality

  Scenario: Complete Checkout

    Given User launches SauceDemo
    When User logs in with valid credentials
    And User adds Backpack to cart
    And User clicks Cart icon
    And User clicks Checkout button
    And User enters checkout information
    And User clicks Continue button
    Then User should see Checkout Overview page