package nl.ing.cucumber.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nl.ing.cucumber.my_hotel_app.MyLog;
import nl.ing.cucumber.my_hotel_app.MyWebDriver;

public class LoginSteps {

	@Given("^User opens the hotelapp$")
	public void user_opens_the_hotelapp() throws Throwable {
		MyWebDriver.createDriver();
	}

	@Given("^The hotelapp is active$")
	public void the_hotelapp_is_active() throws Throwable {
		MyWebDriver.assertTitle("AdactIn.com - Search Hotel");
	}

	@When("^User enters \"(.*?)\" in username field$")
	public void user_enters_username(String username) throws Throwable {
		MyWebDriver.sendKeys("username", username, true);
	}

	@When("^User enters \"(.*?)\" in password field$")
	public void user_enters_password(String password) throws Throwable {
		MyWebDriver.sendKeys("password", password, true);
	}

	@When("^User clicks loginbutton$")
	public void user_clicks_loginbutton() throws Throwable {
		MyWebDriver.clickButton("login");
	}

	@When("^User logouts from the application$")
	public void user_Logout_from_the_application() throws Throwable {
		MyWebDriver.clickLink("Logout");
	}

	@Then("^Welcome text for user \"(.*?)\" is displayed$")
	public void message_displayed_login_successfully(String username) throws Throwable {
		MyWebDriver.assertText("id=username_show", "value=Hello " + username + "!");
		MyLog.info("Welcome text for user " + username + " is displayed");
	}

	@Then("^Logout successfully is displayed$")
	public void message_displayed_logout_successfully() throws Throwable {
		MyWebDriver.assertText("class=reg_success", "text=You have successfully logged out. Click here to login again");
		MyLog.info("Successfully logged out is displayed");
	}

	@Then("^Invalid login is displayed$")
	public void invalid_login_is_displayed() throws Throwable {
		MyWebDriver.assertText("class=auth_error", "text=Invalid Login Details");
		MyLog.info("Invalid login is displayed");
	}

	@Then("^Message \"([^\"]*)\" is displayed$")
	public void message_is_displayed(String errorText) throws Throwable {
		if (errorText.equals("Enter Username")) MyWebDriver.assertText("id=username_span", "text=" + errorText);
		if (errorText.equals("Enter Password")) MyWebDriver.assertText("id=password_span", "text=" + errorText);
		MyLog.info("Username or password is missing: " + errorText);
	}

	@Then("^User closes the hotelapp$")
	public void user_closes_the_hotelapp() throws Throwable {
		MyWebDriver.closeDriver();
	}

}
