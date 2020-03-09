$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TeacherModule.feature");
formatter.feature({
  "name": "Teacher module",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on MAC (a2bf57a5db936c410496898bf2dd5aeb)] -\u003e xpath: //a/i[@class\u003d\u0027fa fa-pencil m-r-5\u0027]] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Akylbeks-MacBook-Pro.local\u0027, ip: \u0027192.168.1.131\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.1\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/_k/f35cd2b56zl...}, goog:chromeOptions: {debuggerAddress: localhost:61793}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a2bf57a5db936c410496898bf2dd5aeb\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat utilities.SeleniumUtils.explicitWaitForVisibility(SeleniumUtils.java:25)\n\tat steps.TeacherModuleSteps.user_picks_teacher_and_click_on_delete_button(TeacherModuleSteps.java:184)\n\tat ✽.User picks \"Anna\" and click on delete button(src/test/resources/features/TeacherModule.feature:42)\n",
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});