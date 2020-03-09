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
formatter.before({
  "status": "passed"
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
  "rows": [
    {
      "cells": [
        "FirstName",
        "Anna"
      ]
    },
    {
      "cells": [
        "LastName",
        "Hanna"
      ]
    },
    {
      "cells": [
        "Email",
        "annahanna@gmail.com"
      ]
    },
    {
      "cells": [
        "Joining_Date",
        "09/28/2019"
      ]
    },
    {
      "cells": [
        "Password",
        "12345"
      ]
    },
    {
      "cells": [
        "Confirm_Password",
        "12345"
      ]
    },
    {
      "cells": [
        "Subject",
        "Math"
      ]
    },
    {
      "cells": [
        "Gender",
        "Female"
      ]
    },
    {
      "cells": [
        "Birth_Date",
        "05/05/55"
      ]
    },
    {
      "cells": [
        "Batch",
        "12"
      ]
    },
    {
      "cells": [
        "Mobile_number",
        "7737857322"
      ]
    },
    {
      "cells": [
        "Department",
        "Maths"
      ]
    },
    {
      "cells": [
        "Salary",
        "200000"
      ]
    },
    {
      "cells": [
        "Section",
        "A"
      ]
    },
    {
      "cells": [
        "Permanent_Address",
        "123 Main st"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_fills_all_fields(DataTable)"
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
  "name": "User sees created teacher in All Teachers list",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_sees_created_student_in_All_Student_list()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat utilities.DBUtility.executeQuery(DBUtility.java:37)\n\tat steps.TeacherModuleSteps.user_sees_created_student_in_All_Student_list(TeacherModuleSteps.java:102)\n\tat ✽.User sees created teacher in All Teachers list(src/test/resources/features/TeacherModule.feature:25)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a User I should able to update teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "User clicks on All Teachers link",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_on_All_Teachers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User picks \"Anna\" and click on edit button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_picks_and_click_on_edit_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User changes phone number to \"7737857373\"",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_changes_phone_number_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees the updated phone number",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_sees_the_updated_phone_number()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat utilities.DBUtility.executeQuery(DBUtility.java:37)\n\tat steps.TeacherModuleSteps.user_sees_the_updated_phone_number(TeacherModuleSteps.java:164)\n\tat ✽.User sees the updated phone number(src/test/resources/features/TeacherModule.feature:35)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a User I should able to delete teacher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "User clicks on All Teachers link",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_on_All_Teachers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User picks \"Anna\" and click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_picks_teacher_and_click_on_delete_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies deleted teacher is not in the teachers list",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_verifies_deleted_teacher_is_not_in_the_teachers_list()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat utilities.DBUtility.executeQuery(DBUtility.java:37)\n\tat steps.TeacherModuleSteps.user_verifies_deleted_teacher_is_not_in_the_teachers_list(TeacherModuleSteps.java:202)\n\tat ✽.User verifies deleted teacher is not in the teachers list(src/test/resources/features/TeacherModule.feature:43)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
});