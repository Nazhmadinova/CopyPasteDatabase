$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TeacherModule.feature");
formatter.feature({
  "name": "Teacher module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a User I should able to create teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "User on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TeacherModuleSteps.user_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Teacher module",
  "keyword": "When "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_on_Teacher_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Teacher link",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_on_Add_Teacher_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all fields",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_fills_all_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees created student in All Student list",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_sees_created_student_in_All_Student_list()"
});
formatter.result({
  "status": "passed"
});
});