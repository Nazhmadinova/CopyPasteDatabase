package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.*;

public class Hooks {

    @Before // cucumber.api.java
    public void setup(Scenario scenario){

        Log.start(scenario.getName());
        ExtentReport.startTest(scenario.getName());
    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()){

            byte [] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
            ExtentReport.fail();
        }else{
            ExtentReport.pass();
        }

        SeleniumUtils.pauseWithTreadSleep(5);
        Driver.quitDriver();
    }

}
