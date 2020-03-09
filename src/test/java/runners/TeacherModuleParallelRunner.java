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
                "json:target/parallel-cucumber2.json",
        },
        features = "src/test/resources/features/TeacherModule.feature",
        glue = "steps"
)
public class TeacherModuleParallelRunner {

        @AfterClass
        public static void tearDown(){
                TempStorage.clear();
                ExtentReport.endReport();
        }

}
