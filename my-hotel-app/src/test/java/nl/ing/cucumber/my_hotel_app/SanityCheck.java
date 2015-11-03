package nl.ing.cucumber.my_hotel_app;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				features = "Feature",
				glue = 		"nl.ing.cucumber.stepDefinitions",
				tags = 		{"@Sanity"},
				plugin = 	{ "pretty",
							"html:target/html-report-sanity"
		        			}
				)

public class SanityCheck {

}