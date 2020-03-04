Feature: Student module
  Scenario: As a User I should able to create student
    Given User on home page
    When User clicks on Student module
    And User clicks on Add Student link
    And User fills all fields
    And User clicks on submit button
    Then User sees created student in All Student list

  Scenario: As a User I should able to update student
    Given User on home page
    When User clicks on Student module
    And User clicks on All Students link
    And User picks student and click on edit button
    And User changes phone number
    And User clicks submit button
    Then User sees the updated phone number

  Scenario: As a User I should able to delete student
    Given User on home page
    When User clicks on Student module
    And User clicks on All Students link
    And User picks student and click on delete button
    Then User verifies deleted student is not in the students list