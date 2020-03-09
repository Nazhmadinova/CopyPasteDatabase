package runners;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import utilities.ExtentReport;
import utilities.TempStorage;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/parallel-cucumber1.json",
        },
        features = "src/test/resources/features/StudentModule.feature",
        glue = "steps"
)
public class StudentModuleParallelRunner {

        @AfterClass
        public static void tearDown(){
                TempStorage.clear();
                ExtentReport.endReport();
        }

}
