package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class HomePage {

    public HomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//a[@href='#'])[4]")
    public WebElement teachersDropdown;

    @FindBy(xpath = "//a[contains(text(),'Add Teacher')]")
    public WebElement addTeacher;

    @FindBy(xpath = "//a[.='All Teachers']")
    public WebElement allTeachers;

    @FindBy(xpath = "(//a[@href='#'])[5]")
    public WebElement studentDropdown;

    @FindBy(xpath = "//a[.='Add Student']")
    public WebElement addStudent;

    @FindBy(xpath = "//a[.='All Students']")
    public WebElement allStudents;

}
