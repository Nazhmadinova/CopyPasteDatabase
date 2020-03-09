package utilities;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentReport {

    private  static ExtentHtmlReporter configs;
    private static ExtentReports extentReports;
    private static ExtentTest extentTest;

    static {
        configs = new ExtentHtmlReporter("./extendReport/report.html");
        configs.config().setTheme(Theme.DARK);
        configs.config().setDocumentTitle("B14 Extent Report");
        extentReports  = new ExtentReports();
        extentReports.attachReporter(configs);
        extentReports.setSystemInfo("username:","b14");
        extentReports.setSystemInfo("environment:","QA203");
    }

    public static void startTest(String testName){
        extentTest = extentReports.createTest(testName);
    }

    public static void pass(){
        extentTest.pass("PASS");
    }

    public static void fail(){
        extentTest.fail("FAILED");
        //extentTest.fail("message", MediaEntityBuilder.createScreenCaptureFromPath("").build());
    }

    public static void endReport(){
        extentReports.flush();
    }

}
