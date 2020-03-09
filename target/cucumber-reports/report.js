$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/StudentModule.feature");
formatter.feature({
  "name": "Student module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a User I should able to create student",
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
  "name": "User clicks on Student module",
  "keyword": "When "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_Student_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Student link",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_Add_Student_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all fields using bellow data",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Daniel"
      ]
    },
    {
      "cells": [
        "LastName",
        "Brown"
      ]
    },
    {
      "cells": [
        "Email",
        "danielbrown@gmail.com"
      ]
    },
    {
      "cells": [
        "Joining_Date",
        "02/03/2016"
      ]
    },
    {
      "cells": [
        "Password",
        "54321"
      ]
    },
    {
      "cells": [
        "Confirm_Password",
        "54321"
      ]
    },
    {
      "cells": [
        "Subject",
        "IT"
      ]
    },
    {
      "cells": [
        "Gender",
        "Male"
      ]
    },
    {
      "cells": [
        "Birth_Date",
        "02/02/1992"
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
        "7738765432"
      ]
    },
    {
      "cells": [
        "Admission_No",
        "123"
      ]
    },
    {
      "cells": [
        "Major",
        "Computer Science"
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
        "321 Main st"
      ]
    },
    {
      "cells": [
        "Company_name",
        "Cybertek"
      ]
    },
    {
      "cells": [
        "Title",
        "SDET"
      ]
    },
    {
      "cells": [
        "Start_Date",
        "03/04/2017"
      ]
    },
    {
      "cells": [
        "City",
        "Chicago"
      ]
    },
    {
      "cells": [
        "Street",
        "231 Michigan ave"
      ]
    },
    {
      "cells": [
        "ZipCode",
        "60786"
      ]
    },
    {
      "cells": [
        "State",
        "IL"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_fills_all_fields_using_bellow_data(DataTable)"
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
  "location": "StudentModuleSteps.user_sees_created_student_in_All_Student_list()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat steps.StudentModuleSteps.user_sees_created_student_in_All_Student_list(StudentModuleSteps.java:97)\n\tat ✽.User sees created student in All Student list(src/test/resources/features/StudentModule.feature:32)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a User I should able to update student",
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
  "name": "User clicks on Student module",
  "keyword": "When "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_Student_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on All Students link",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_All_Students_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User picks \"Daniel\" from students list and click on edit button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_picks_from_students_list_and_click_on_edit_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on MAC (094f934781a7c38a82f38b8c5f50deea)] -\u003e xpath: //a/i[@class\u003d\u0027fa fa-pencil m-r-5\u0027]] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mariyas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c17:3ac:7ac4:492f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f_/236q0x9s24g...}, goog:chromeOptions: {debuggerAddress: localhost:53226}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 094f934781a7c38a82f38b8c5f50deea\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat utilities.SeleniumUtils.explicitWaitForVisibility(SeleniumUtils.java:25)\n\tat steps.StudentModuleSteps.user_picks_from_students_list_and_click_on_edit_button(StudentModuleSteps.java:119)\n\tat ✽.User picks \"Daniel\" from students list and click on edit button(src/test/resources/features/StudentModule.feature:39)\n",
  "status": "failed"
});
formatter.step({
  "name": "User changes major to \"psychology\"",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_changes_major_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees the updated major in updated student info",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentModuleSteps.user_sees_the_updated_phone_number_in_updated_student_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a User I should able to delete student",
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
  "name": "User clicks on Student module",
  "keyword": "When "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_Student_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on All Students link",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_clicks_on_All_Students_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User picks \"Daniel\" from students list and click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "StudentModuleSteps.user_picks_from_students_list_and_click_on_delete_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#\" data-toggle\u003d\"modal\" data-target\u003d\"#delete_employee\" class\u003d\"dropdown-item\"\u003e...\u003c/a\u003e is not clickable at point (441, 648). Other element would receive the click: \u003cdiv class\u003d\"col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mariyas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c17:3ac:7ac4:492f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f_/236q0x9s24g...}, goog:chromeOptions: {debuggerAddress: localhost:53257}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 917d3cd9ebf7c7d5c17bf27a46d828a3\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat steps.StudentModuleSteps.user_picks_from_students_list_and_click_on_delete_button(StudentModuleSteps.java:159)\n\tat ✽.User picks \"Daniel\" from students list and click on delete button(src/test/resources/features/StudentModule.feature:49)\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies deleted student is not in the students list",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentModuleSteps.user_verifies_deleted_student_is_not_in_the_students_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/TeacherModule.feature");
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
  "status": "passed"
});
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on MAC (e0661c1ccd73ec64648703f5b611bcd4)] -\u003e xpath: //a/i[@class\u003d\u0027fa fa-pencil m-r-5\u0027]] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mariyas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c17:3ac:7ac4:492f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f_/236q0x9s24g...}, goog:chromeOptions: {debuggerAddress: localhost:53319}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e0661c1ccd73ec64648703f5b611bcd4\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat utilities.SeleniumUtils.explicitWaitForVisibility(SeleniumUtils.java:25)\n\tat steps.TeacherModuleSteps.user_picks_and_click_on_edit_button(TeacherModuleSteps.java:135)\n\tat ✽.User picks \"Anna\" and click on edit button(src/test/resources/features/TeacherModule.feature:32)\n",
  "status": "failed"
});
formatter.step({
  "name": "User changes phone number to \"7737857373\"",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_changes_phone_number_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherModuleSteps.user_clicks_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees the updated phone number",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_sees_the_updated_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on MAC (4a489cefee325a9bd936d28bbde56cbf)] -\u003e xpath: //a/i[@class\u003d\u0027fa fa-pencil m-r-5\u0027]] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mariyas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c17:3ac:7ac4:492f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/f_/236q0x9s24g...}, goog:chromeOptions: {debuggerAddress: localhost:53367}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4a489cefee325a9bd936d28bbde56cbf\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat utilities.SeleniumUtils.explicitWaitForVisibility(SeleniumUtils.java:25)\n\tat steps.TeacherModuleSteps.user_picks_teacher_and_click_on_delete_button(TeacherModuleSteps.java:184)\n\tat ✽.User picks \"Anna\" and click on delete button(src/test/resources/features/TeacherModule.feature:42)\n",
  "status": "failed"
});
formatter.step({
  "name": "User verifies deleted teacher is not in the teachers list",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherModuleSteps.user_verifies_deleted_teacher_is_not_in_the_teachers_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
});