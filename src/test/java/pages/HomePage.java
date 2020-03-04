package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage {

    @FindBy(xpath = "//span[contains(text(),'Teachers')]")
    public WebElement teachersDropdown;

    @FindBy(xpath = "//a[contains(text(),'Add Teacher')]")
    public WebElement addTeacher;

}
