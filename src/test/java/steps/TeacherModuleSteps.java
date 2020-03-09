package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.AddTeacherPage;
import pages.AllTeachersPage;
import pages.EditTeacherPage;
import pages.HomePage;
import utilities.*;
import utilities.Driver;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TeacherModuleSteps {

    HomePage homePage = new HomePage();
    AddTeacherPage addTeacherPage = new AddTeacherPage();
    AllTeachersPage allTeachersPage = new AllTeachersPage();
    EditTeacherPage editTeacherPage = new EditTeacherPage();

    @Given("User on home page")
    public void user_on_home_page() {
        Driver.getDriver().get(Config.getProperties("url"));
    }

    @When("User clicks on Teacher module")
    public void user_clicks_on_Teacher_module() {
        SeleniumUtils.explicitWaitForVisibility(homePage.teachersDropdown,5);
        homePage.teachersDropdown.click();
//        WebElement element = Driver.getDriver().findElement(By.xpath("(//a[@href='#'])[4]"));
//        element.click();
    }

    @When("User clicks on Add Teacher link")
    public void user_clicks_on_Add_Teacher_link() {
        SeleniumUtils.explicitWaitForVisibility(homePage.addTeacher,5);
        homePage.addTeacher.click();
    }

    @When("User fills all fields")
    public void user_fills_all_fields(io.cucumber.datatable.DataTable dataTable) {
        Map<String, String> data = dataTable.asMap(String.class, String.class);
        SeleniumUtils.pauseWithTreadSleep(5);
        SeleniumUtils.explicitWaitForVisibility(addTeacherPage.firstName,5);
        addTeacherPage.firstName.sendKeys(data.get("FirstName"));
        TempStorage.addData("FirstName",data.get("FirstName"));

        SeleniumUtils.explicitWaitForVisibility(addTeacherPage.lastName,5);
        addTeacherPage.lastName.sendKeys(data.get("LastName"));
        TempStorage.addData("LastName",data.get("LastName"));

        addTeacherPage.email.sendKeys(data.get("Email"));
        TempStorage.addData("Email",data.get("Email"));

        addTeacherPage.joiningDate.sendKeys(data.get("Joining_Date"));
        addTeacherPage.password.sendKeys(data.get("Password"));
        addTeacherPage.confirmPassword.sendKeys(data.get("Confirm_Password"));
        addTeacherPage.subject.sendKeys(data.get("Subject"));
        addTeacherPage.mobileNumber.sendKeys(data.get("Mobile_number"));
        Select select = new Select(addTeacherPage.genderDropdown);
        select.selectByVisibleText(data.get("Gender"));
        TempStorage.addData("Gender",data.get("Gender"));

        Select select1 = new Select(addTeacherPage.department);
        select1.selectByVisibleText(data.get("Department"));
        addTeacherPage.birthDate.sendKeys(data.get("Birth_Date"));

        while (!addTeacherPage.salary.getAttribute("value").isEmpty()){
            addTeacherPage.salary.sendKeys(Keys.BACK_SPACE);
        }
        SeleniumUtils.pauseWithTreadSleep(2);
        addTeacherPage.salary.sendKeys(data.get("Salary"));

        Select select2 = new Select(addTeacherPage.batch);
        select2.selectByVisibleText(data.get("Batch"));
        addTeacherPage.section.sendKeys(data.get("Section"));
        addTeacherPage.permanentAddress.sendKeys(data.get("Permanent_Address"));

    }

    @When("User clicks on submit button")
    public void user_clicks_on_submit_button() {
        SeleniumUtils.explicitWaitForVisibility(addTeacherPage.submitButton,5);
        addTeacherPage.submitButton.click();
    }

    @Then("User sees created teacher in All Teachers list")
    public void user_sees_created_student_in_All_Student_list() {

        DBUtility.createConnection();
        List<Map<Object, Object>> teachers = DBUtility.executeQuery("select * FROM teacher WHERE first_name = 'Anna' and last_name = 'Hanna'");
        DBUtility.close();
        for(Map<Object,Object> teacher: teachers){
            if(teacher.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName")) &&
            teacher.get("LAST_NAME").toString().equals(TempStorage.getData("LastName"))){
                Assert.assertEquals(teacher.get("GENDER").toString(), TempStorage.getData("Gender"));
                Assert.assertEquals(teacher.get("EMAIL_ADDRESS").toString(), TempStorage.getData("Email"));
            }else{
                Assert.assertTrue(false);
            }
        }

    }

    @When("User clicks on All Teachers link")
    public void user_clicks_on_All_Teachers_link() {
        SeleniumUtils.pauseWithTreadSleep(5);
       homePage.allTeachers.click();
    }

    @When("User picks {string} and click on edit button")
    public void user_picks_and_click_on_edit_button(String string) {
        List<WebElement> teachers = allTeachersPage.allTeachersName;
        List<WebElement> changeButton = allTeachersPage.threeDots;

//        TempStorage.addData("EditTeacherName",teachers.get(teachers.size()-1).getText());
//        System.out.println(teachers.get(teachers.size()-1).getText());
//        changeButton.get(changeButton.size()-1).click();

        SeleniumUtils.pauseWithTreadSleep(5);
        for(int i = 0; i < teachers.size(); i++){
            if(teachers.get(i).getText().contains(string)){
                changeButton.get(i).click();
                SeleniumUtils.explicitWaitForVisibility(allTeachersPage.edit.get(i),5);
                allTeachersPage.edit.get(i).click();
                break;
            }
        }


    }

    @When("User changes phone number to {string}")
    public void user_changes_phone_number_to(String string) {
        TempStorage.addData("Mobile_number",string);
        while(!editTeacherPage.mobileNumber.getAttribute("value").isEmpty()){
            editTeacherPage.mobileNumber.sendKeys(Keys.BACK_SPACE);
        }
        editTeacherPage.mobileNumber.sendKeys(string);
    }

    @When("User clicks submit button")
    public void user_clicks_submit_button() {
        editTeacherPage.submitButton.click();
    }

    @Then("User sees the updated phone number")
    public void user_sees_the_updated_phone_number() {

        DBUtility.createConnection();
        List<Map<Object, Object>> students = DBUtility.executeQuery("select * FROM teacher WHERE first_name = 'Anna' and last_name = 'Hanna'");
        DBUtility.close();
        for(Map<Object,Object> student: students){
            if(student.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName")) &&
                    student.get("LAST_NAME").toString().equals(TempStorage.getData("LastName"))){
                Assert.assertEquals(student.get("PHONE").toString(), TempStorage.getData("Mobile_number"));
            }else{
                Assert.assertTrue(false);
            }
        }
    }

    @When("User picks {string} and click on delete button")
    public void user_picks_teacher_and_click_on_delete_button(String string) {

        List<WebElement> teachers = allTeachersPage.allTeachersName;
        List<WebElement> changeButton = allTeachersPage.threeDots;

        SeleniumUtils.pauseWithTreadSleep(5);
        for(int i = 0; i < teachers.size(); i++){
            if(teachers.get(i).getText().equalsIgnoreCase(string)){
                changeButton.get(i).click();
                SeleniumUtils.explicitWaitForVisibility(allTeachersPage.edit.get(i),5);
                allTeachersPage.delete.get(i).click();
                break;
            }
        }

        SeleniumUtils.explicitWaitForVisibility(allTeachersPage.deletePopUp,5);
        allTeachersPage.deletePopUp.click();

    }

    @Then("User verifies deleted teacher is not in the teachers list")
    public void user_verifies_deleted_teacher_is_not_in_the_teachers_list() {

        DBUtility.createConnection();
        List<Map<Object, Object>> students = DBUtility.executeQuery("select first_name, last_name FROM teacher");
        DBUtility.close();
        for(Map<Object,Object> student: students){
            if(student.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName")) &&
                    student.get("LAST_NAME").toString().equals(TempStorage.getData("LastName"))){
                Assert.assertTrue(false);
            }else{
                Assert.assertTrue(true);
            }
        }

    }


}
