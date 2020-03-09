Feature: Student module

#  @test
  Scenario: As a User I should able to create student
    Given User on home page
    When User clicks on Student module
    And User clicks on Add Student link
    And User fills all fields using bellow data
      | FirstName         | Daniel                |
      | LastName          | Brown                 |
      | Email             | danielbrown@gmail.com |
      | Joining_Date      | 02/03/2016            |
      | Password          | 54321                 |
      | Confirm_Password  | 54321                 |
      | Subject           | IT                    |
      | Gender            | Male                  |
      | Birth_Date        | 02/02/1992            |
      | Batch             | 12                    |
      | Mobile_number     | 7738765432            |
      | Admission_No      | 123                   |
      | Major             | Computer Science      |
      | Section           | A                     |
      | Permanent_Address | 321 Main st           |
      | Company_name      | Cybertek              |
      | Title             | SDET                  |
      | Start_Date        | 03/04/2017                      |
      | City              | Chicago               |
      | Street            | 231 Michigan ave      |
      | ZipCode           | 60786                 |
      | State             | IL                    |
    And User clicks on submit button
    Then User sees created student in All Student list

#  @test
  Scenario: As a User I should able to update student
    Given User on home page
    When User clicks on Student module
    And User clicks on All Students link
    And User picks "Daniel" from students list and click on edit button
    And User changes major to "psychology"
    And User clicks submit button
    Then User sees the updated major in updated student info

#  @test
  Scenario: As a User I should able to delete student
    Given User on home page
    When User clicks on Student module
    And User clicks on All Students link
    And User picks "Daniel" from students list and click on delete button
    Then User verifies deleted student is not in the students list