Feature: Teacher module

  @test
  Scenario: As a User I should able to create teacher
    Given User on home page
    When User clicks on Teacher module
    And User clicks on Add Teacher link
    And User fills all fields
    |FirstName|Anna|
    |LastName|Hanna|
    |Email|annahanna@gmail.com|
    |Joining_Date|09/28/2019|
    |Password||
    |Confirm_Password||
    |Subject||
    |Gender||
    |Birth_Date||
    |Batch||
    |Mobile_number||
    |Department||
    |Salary||
    |Section||
    |Permanent_Address||
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


#  @t2
#  Scenario: Creating teacher on web
#    Given teacher value
#      | first_name | John |
#      | last_name  | Wick |
#
#  @Given("teacher value")
#  public void teacher_value(io.cucumber.datatable.DataTable dataTable) {
#  Map<String, String> data = dataTable.asMap(String.class, String.class);
#
#  System.out.println(data.get("first_name"));
#  System.out.println(data.get("last_name"));
#
#  }