package nl.ing.cucumber.stepDefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nl.ing.cucumber.my_hotel_app.MyFunctions;
import nl.ing.cucumber.my_hotel_app.MyWebDriver;

public class SearchSteps {

	@Given("^User navigtes to the search page$")
	public void user_navigtes_to_the_search_page() throws Throwable {
		MyWebDriver.clickLink("Search Hotel");
	}

	@When("^User selects \"([^\"]*)\" as location$")
	public void user_selects_as_location(String location) throws Throwable {
		MyWebDriver.sendKeys("location", location, false);
	}

	@When("^User selects \"([^\"]*)\" as hotel$")
	public void user_selects_as_hotel(String hotel) throws Throwable {
		MyWebDriver.sendKeys("hotels", hotel, false);
	}

	@When("^User selects (\\d+) rooms$")
	public void user_selects_rooms(int rooms) throws Throwable {
		String array[] = {"", "1 - One", "2 - Two", "3 - Three", "4 - Four", "5 - Five", "6 - Six", "7 - Seven", "8 - Eight", "9 - Nine", "10 - Ten"};		
		MyWebDriver.sendKeys("room_nos", array[rooms], false);
	}

	@When("^User selects (\\d+) days$")
	public void user_selects_days(int days) throws Throwable {
		String sDate = null;

		sDate = MyFunctions.relativeDate(0);
		MyWebDriver.sendKeys("datepick_in", sDate, true);

		sDate = MyFunctions.relativeDate(days);
		MyWebDriver.sendKeys("datepick_out", sDate, true);
	}

	@When("^User select \"([^\"]*)\" as roomtype$")
	public void user_select_as_roomtype(String type) throws Throwable {
		MyWebDriver.sendKeys("room_type", type, false);
	}

	@When("^User clicks the search button$")
	public void user_clicks_the_search_button() throws Throwable {
		MyWebDriver.clickButton("Submit");
	}

	@Then("^A list of \"([^\"]*)\" available hotels for \"([^\"]*)\" are displayed$")
	public void a_list_of_available_hotels_for_are_displayed(String number, String location) throws Throwable {
//		List<WebElement> rows = MyWebDriver.driver.findElements(By.xpath("//table[@class='login']/tbody/tr[2]/td/table/tbody/tr"));
//		Assert.assertTrue(number.equals(String.valueOf(rows.size() - 1)));
//		System.out.println("Number of rows: " + rows.size());
	}

	@Then("^The price per night is \"([^\"]*)\"$")
	public void the_price_per_night_is(String price) throws Throwable {
		String expected = "AUD $ " + price;
		MyWebDriver.assertElement("price_night_0", expected);
		
	}

	@Then("^The total price is \"([^\"]*)\"$")
	public void the_total_price_is(String price) throws Throwable {
		String expected = "AUD $ " + price;
		MyWebDriver.assertElement("total_price_0", expected);
	}

}
