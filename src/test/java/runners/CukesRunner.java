package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-reports","json:target/cucumber.json"},
       features = "src/test/resources/features/",
        glue = "steps",
        dryRun = false,
     tags = "@test"
)

public class CukesRunner {
}
