package nl.ing.cucumber.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nl.ing.cucumber.my_hotel_app.MyWebDriver;

public class LoginSteps {


	@Given("^User opens the hotelapp$")
	public void user_opens_the_hotelapp() throws Throwable {
		MyWebDriver.createDriver();
	}

	@Given("^The hotelapp is active$")
	public void the_hotelapp_is_active() throws Throwable {
		String title = "AdactIn.com - Search Hotel";
		Assert.assertTrue(title.equals(MyWebDriver.driver.getTitle()));
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
		MyWebDriver.driver.findElement(By.xpath("//input[@value='Hello " + username + "!']"));
		System.out.println("Welcome text for user " + username + " is displayed");
	}

	@Then("^Logout successfully is displayed$")
	public void message_displayed_logout_successfully() throws Throwable {
		String s = "You have successfully logged out. Click here to login again";
		Assert.assertTrue(s.equals(MyWebDriver.driver.findElement(By.className("reg_success")).getText()));
		System.out.println("Successfully logged out");
	}

	@Then("^Invalid login is displayed$")
	public void invalid_login_is_displayed() throws Throwable {
		MyWebDriver.driver.findElement(By.className("auth_error"));
		System.out.println("Invalid login");
	}

	@Then("^Message \"([^\"]*)\" is displayed$")
	public void message_is_displayed(String errorText) throws Throwable {
		Assert.assertTrue(errorText.equals(MyWebDriver.driver.findElement(By.className("login_error")).getText()));
		System.out.println("Username or password is missing");
	}

	@Then("^User closes the hotelapp$")
	public void user_closes_the_hotelapp() throws Throwable {
		MyWebDriver.closeDriver();
	}

}
