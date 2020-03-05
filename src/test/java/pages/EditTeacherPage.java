package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EditTeacherPage {

    public EditTeacherPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//input[@type = 'text'])[1]")
    public WebElement firstName;

    @FindBy(xpath = "(//input[@type = 'text'])[2]")
    public WebElement email;

    @FindBy(xpath = "(//input[@type = 'password'])[1]")
    public WebElement password;

    @FindBy(xpath = "(//input[@type = 'text'])[3]")
    public WebElement subject;

    @FindBy(xpath = "(//input[@type = 'text'])[4]")
    public WebElement birthDate;

    @FindBy(xpath = "(//div[@class= 'form-group custom-mt-form-group']/select)[1]")
    public WebElement genderDropdown;

    @FindBy(xpath = "(//input[@type = 'text'])[5]")
    public WebElement batch;

    @FindBy(xpath = "(//input[@type = 'text'])[6]")
    public WebElement lastName;

    @FindBy(xpath = "(//input[@type = 'text'])[7]")
    public WebElement joiningDate;

    @FindBy(xpath = "(//input[@type = 'password'])[2]")
    public WebElement confirmPassword;

    @FindBy(xpath = "(//input[@type = 'number'])")
    public WebElement mobileNumber;

    @FindBy(xpath = "(//div[@class= 'form-group custom-mt-form-group']/select)[2]")
    public WebElement department;

    @FindBy(xpath = "(//input[@type = 'text'])[8]")
    public WebElement salary;

    @FindBy(xpath = "(//input[@type='text'])[9]")
    public WebElement section;

    @FindBy(xpath = "(//textarea[@id= 'message'])")
    public WebElement permanentAddress;

    @FindBy(xpath = "(//button[@type= 'submit'])")
    public WebElement submitButton;

    @FindBy(xpath = "(//button[@type= 'reset'])")
    public WebElement cancelButton;

}
