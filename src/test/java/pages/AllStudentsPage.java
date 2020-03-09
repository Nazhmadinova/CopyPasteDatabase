package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class AllStudentsPage {

    public AllStudentsPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement studentID;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement studentName;

    @FindBy(xpath = "//a[@class = 'btn btn-success btn-block mt-4 mb-2']")
    public WebElement searchButton;

    @FindBy(xpath = "(//i[@class='fa fa-bars'])[2]")
    public WebElement bar;

    @FindBy(xpath = "//h4[@class='user-name m-t-10 m-b-0 text-ellipsis']/a")
    public List<WebElement> allStudentsName;

    @FindBy(xpath = "//div[@class='dropdown profile-action']")
    public List<WebElement> threeDots;

    @FindBy(xpath = "//a/i[@class='fa fa-pencil m-r-5']")
    public List<WebElement> edit;

    @FindBy(xpath = "//a[@data-target='#delete_employee']")
    public List<WebElement> delete;

    @FindBy(xpath = "//button[.='Delete']")
    public WebElement deletePopUp;

}
