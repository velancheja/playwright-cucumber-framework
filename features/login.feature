@smoke
@login
Feature: Login Functionality

  Scenario: Successful Login

    Given User launches SauceDemo
    When User logs in with valid credentials
    Then User should see Products page