package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import utilities.Config;
import utilities.Driver;

public class TeacherModuleSteps {

    HomePage homePage = new HomePage();

    @Given("User on home page")
    public void user_on_home_page() {
        Driver.getDriver().get(Config.getProperties("http://cybertektraining.com/"));
    }

    @When("User clicks on Teacher module")
    public void user_clicks_on_Teacher_module() {
        homePage.teachersDropdown.click();
    }

    @When("User clicks on Add Teacher link")
    public void user_clicks_on_Add_Teacher_link() {
        homePage.addTeacher.click();
    }

    @When("User fills all fields")
    public void user_fills_all_fields() {
        
    }

    @When("User clicks on submit button")
    public void user_clicks_on_submit_button() {

    }

    @Then("User sees created student in All Student list")
    public void user_sees_created_student_in_All_Student_list() {

    }

}
