Feature: Teacher module

  @test
  Scenario: As a User I should able to create teacher
    Given User on home page
    When User clicks on Teacher module
    And User clicks on Add Teacher link
    And User fills all fields
    And User clicks on submit button
    Then User sees created student in All Student list

  Scenario: As a User I should able to update teacher
    Given User on home page
    When User clicks on Teacher module
    And User clicks on All Teachers link
    And User picks teacher and click on edit button
    And User changes phone number
    And User clicks submit button
    Then User sees the updated phone number

  Scenario: As a User I should able to delete teacher
    Given User on home page
    When User clicks on Teacher module
    And User clicks on All Teachers link
    And User picks teacher and click on delete button
    Then User verifies deleted teacher is not in the teachers list


