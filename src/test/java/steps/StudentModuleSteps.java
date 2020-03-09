package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.AddStudentPage;
import pages.AllStudentsPage;
import pages.EditStudentPage;
import pages.HomePage;
import utilities.DBUtility;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.util.List;
import java.util.Map;

public class StudentModuleSteps {

    HomePage homePage = new HomePage();
    AddStudentPage addStudentPage = new AddStudentPage();
    AllStudentsPage allStudentsPage = new AllStudentsPage();
    EditStudentPage editStudentPage = new EditStudentPage();

    @When("User clicks on Student module")
    public void user_clicks_on_Student_module() {
        SeleniumUtils.explicitWaitForVisibility(homePage.studentDropdown,5);
      homePage.studentDropdown.click();
    }

    @When("User clicks on Add Student link")
    public void user_clicks_on_Add_Student_link() {
        SeleniumUtils.explicitWaitForVisibility(homePage.addStudent,5);
        homePage.addStudent.click();
    }

    @When("User fills all fields using bellow data")
    public void user_fills_all_fields_using_bellow_data(io.cucumber.datatable.DataTable dataTable) {
        Map<String, String> data = dataTable.asMap(String.class, String.class);
        SeleniumUtils.pauseWithTreadSleep(5);
        addStudentPage.firstName.sendKeys(data.get("FirstName"));
        TempStorage.addData("FirstName2",data.get("FirstName"));
        addStudentPage.lastName.sendKeys(data.get("LastName"));
        TempStorage.addData("LastName2",data.get("LastName"));
        addStudentPage.email.sendKeys(data.get("Email"));
        TempStorage.addData("Email2",data.get("Email"));
        addStudentPage.joiningDate.sendKeys(data.get("Joining_Date"));

        while (!addStudentPage.password.getAttribute("value").isEmpty()){
            addStudentPage.password.sendKeys(Keys.BACK_SPACE);
        }
        addStudentPage.password.sendKeys(data.get("Password"));

        while (!addStudentPage.companyName.getAttribute("value").isEmpty()){
            addStudentPage.confirmPassword.sendKeys(Keys.BACK_SPACE);
        }
        addStudentPage.confirmPassword.sendKeys(data.get("Confirm_Password"));

        addStudentPage.subject.sendKeys(data.get("Subject"));
        addStudentPage.mobileNumber.sendKeys(data.get("Mobile_number"));
        Select select = new Select(addStudentPage.genderDropdown);
        select.selectByVisibleText(data.get("Gender"));
        TempStorage.addData("Gender2",data.get("Gender"));
        addStudentPage.admissionNo.sendKeys(data.get("Admission_No"));
        addStudentPage.birthDate.sendKeys(data.get("Birth_Date"));
        addStudentPage.major.sendKeys(data.get("Major"));
        Select select1 = new Select(addStudentPage.batch);
        select1.selectByVisibleText(data.get("Batch"));
        while (!addStudentPage.section.getAttribute("value").isEmpty()){
            addStudentPage.section.sendKeys(Keys.BACK_SPACE);
        }
        addStudentPage.section.sendKeys(data.get("Section"));
        addStudentPage.permanentAddress.sendKeys(data.get("Permanent_Address"));

        addStudentPage.companyName.sendKeys(data.get("Company_name"));
        addStudentPage.title.sendKeys(data.get("Title"));

        addStudentPage.startDate.sendKeys(data.get("Start_Date"));
        addStudentPage.city.sendKeys(data.get("City"));
        addStudentPage.street.sendKeys(data.get("Street"));
        addStudentPage.zipCode.sendKeys(data.get("ZipCode"));
        addStudentPage.state.sendKeys(data.get("State"));

    }

    @Then("User sees created student in All Student list")
    public void user_sees_created_student_in_All_Student_list() {
        DBUtility.createConnection();
        List<Map<Object, Object>> students = DBUtility.executeQuery("select * FROM student WHERE first_name = 'Daniel' and last_name = 'Brown'");
        DBUtility.close();
        for(Map<Object,Object> student: students){
            if(student.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName2")) &&
                    student.get("LAST_NAME").toString().equals(TempStorage.getData("LastName2"))){
                Assert.assertEquals(student.get("GENDER").toString(), TempStorage.getData("Gender2"));
            }else{
                Assert.assertTrue(false);
            }
        }
    }

    @When("User clicks on All Students link")
    public void user_clicks_on_All_Students_link() {
        SeleniumUtils.explicitWaitForVisibility(homePage.allStudents,10);
        homePage.allStudents.click();
    }

    @When("User picks {string} from students list and click on edit button")
    public void user_picks_from_students_list_and_click_on_edit_button(String string) {
        List<WebElement> studentsName = allStudentsPage.allStudentsName;
        List<WebElement> changeButton = allStudentsPage.threeDots;

        SeleniumUtils.pauseWithTreadSleep(5);
        for(int i = 0; i < studentsName.size(); i++){

            if(studentsName.get(i).getText().equalsIgnoreCase("Daniel")){
                SeleniumUtils.explicitWaitForVisibility(changeButton.get(i),10);
                changeButton.get(i).click();
                SeleniumUtils.explicitWaitForVisibility(allStudentsPage.edit.get(i),10);
                allStudentsPage.edit.get(i).click();
                break;
            }
        }
    }
    @When("User changes major to {string}")
    public void user_changes_major_to(String string) {
        SeleniumUtils.explicitWaitForVisibility(editStudentPage.major,10);
        TempStorage.addData("Major",string);
        while (!editStudentPage.major.getAttribute("value").isEmpty()){
            editStudentPage.major.sendKeys(Keys.BACK_SPACE);
        }
        editStudentPage.major.sendKeys(string);
    }

    @Then("User sees the updated major in updated student info")
    public void user_sees_the_updated_phone_number_in_updated_student_info() {
        DBUtility.createConnection();
        List<Map<Object, Object>> students = DBUtility.executeQuery("select * FROM student WHERE first_name = 'Daniel' and last_name = 'Brown'");
        DBUtility.close();
        for(Map<Object,Object> student: students){
            if(student.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName2")) &&
                    student.get("LAST_NAME").toString().equals(TempStorage.getData("LastName2"))){
                Assert.assertEquals(TempStorage.getData("Major"), student.get("MAJOR"));
            }else{
                Assert.assertTrue(false);
            }
        }
    }

    @When("User picks {string} from students list and click on delete button")
    public void user_picks_from_students_list_and_click_on_delete_button(String string) {
        List<WebElement> studentsName = allStudentsPage.allStudentsName;
        List<WebElement> changeButton = allStudentsPage.threeDots;

        SeleniumUtils.pauseWithTreadSleep(5);
        for(int i = 0; i < studentsName.size(); i++){
            if(studentsName.get(i).getText().equalsIgnoreCase(string)){
                changeButton.get(i).click();
                SeleniumUtils.explicitWaitForVisibility(allStudentsPage.delete.get(i),10);
                allStudentsPage.delete.get(i).click();
                break;
            }
        }

        SeleniumUtils.explicitWaitForVisibility(allStudentsPage.deletePopUp,10);
        allStudentsPage.deletePopUp.click();
    }

    @Then("User verifies deleted student is not in the students list")
    public void user_verifies_deleted_student_is_not_in_the_students_list() {
        DBUtility.createConnection();
        List<Map<Object, Object>> students = DBUtility.executeQuery("select first_name, last_name FROM student");
        DBUtility.close();
        for(Map<Object,Object> student: students){
            if(student.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName2")) &&
                    student.get("LAST_NAME").toString().equals(TempStorage.getData("LastName2"))){
                Assert.assertTrue(false);
            }else{
                Assert.assertTrue(true);
            }
        }
    }

}
