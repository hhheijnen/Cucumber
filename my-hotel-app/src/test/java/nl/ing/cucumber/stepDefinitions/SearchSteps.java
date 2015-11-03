package nl.ing.cucumber.stepDefinitions;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.time.DateUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nl.ing.cucumber.my_hotel_app.MyWebDriver;

public class SearchSteps {
	
	@Given("^User navigtes to the search page$")
	public void user_navigtes_to_the_search_page() throws Throwable {
		MyWebDriver.driver.findElement(By.partialLinkText("Search Hotel")).click();
        System.out.println("Clicked 'Search Hotel' link");
	}

	@When("^User selects \"([^\"]*)\" as location$")
	public void user_selects_as_location(String location) throws Throwable {
		MyWebDriver.driver.findElement(By.id("location")).sendKeys(location);
        System.out.println("Selected the next location: " + location);
	}

	@When("^User selects \"([^\"]*)\" as hotel$")
	public void user_selects_as_hotel(String hotel) throws Throwable {
		MyWebDriver.driver.findElement(By.id("hotels")).sendKeys(hotel);
        System.out.println("Selected the next hotel: " + hotel);
	}

	@When("^User selects (\\d+) rooms$")
	public void user_selects_rooms(int rooms) throws Throwable {
		String array[] = {"", "1 - One", "2 - Two", "3 - Three", "4 - Four", "5 - Five", "6 - Six", "7 - Seven", "8 - Eight", "9 - Nine", "10 - Ten"};		
		MyWebDriver.driver.findElement(By.id("room_nos")).sendKeys(array[rooms]);
        System.out.println("Selected the number of rooms: " + rooms);
	}

	@When("^User selects (\\d+) days$")
	public void user_selects_days(int days) throws Throwable {
		String sDate = null;
		
		String today = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");

        Date mydate = format.parse(today);
        sDate = new SimpleDateFormat("dd/MM/yyyy").format(mydate);
        MyWebDriver.driver.findElement(By.id("datepick_in")).clear();
        MyWebDriver.driver.findElement(By.id("datepick_in")).sendKeys(sDate);
		System.out.println("Checkin date is: " + sDate);

        mydate = DateUtils.addDays(mydate, days);
        sDate = new SimpleDateFormat("dd/MM/yyyy").format(mydate);
        MyWebDriver.driver.findElement(By.id("datepick_out")).clear();
        MyWebDriver.driver.findElement(By.id("datepick_out")).sendKeys(sDate);
		System.out.println("Checkout date is: " + sDate);
	}

	@When("^User select \"([^\"]*)\" as roomtype$")
	public void user_select_as_roomtype(String type) throws Throwable {
		MyWebDriver.driver.findElement(By.id("room_type")).sendKeys(type);
        System.out.println("Selected the next room type: " + type);
	}

	@When("^User clicks the search button$")
	public void user_clicks_the_search_button() throws Throwable {
		MyWebDriver.driver.findElement(By.id("Submit")).click();;
        System.out.println("Clicked 'Search' button");
	}

	@Then("^A list of \"([^\"]*)\" available hotels for \"([^\"]*)\" are displayed$")
	public void a_list_of_available_hotels_for_are_displayed(String number, String location) throws Throwable {
		List<WebElement> rows = MyWebDriver.driver.findElements(By.xpath("//table[@class='login']/tbody/tr[2]/td/table/tbody/tr"));
		Assert.assertTrue(number.equals(String.valueOf(rows.size() - 1)));
		System.out.println("Number of rows: " + rows.size());
	}
	
	@Then("^The price per night is \"([^\"]*)\"$")
	public void the_price_per_night_is(String price) throws Throwable {
		String expected = "AUD $ " + price;
		String actual = MyWebDriver.driver.findElement(By.id("price_night_0")).getAttribute("value").toString();
		Assert.assertTrue(expected.equals(actual));
		System.out.println("EXPECTED: Price per night is " + expected);
		System.out.println("ACTUAL: Price per night is " + actual);
	}

	@Then("^The total price is \"([^\"]*)\"$")
	public void the_total_price_is(String price) throws Throwable {
		String expected = "AUD $ " + price;
		String actual = MyWebDriver.driver.findElement(By.id("total_price_0")).getAttribute("value").toString();
		Assert.assertTrue(expected.equals(actual));
		System.out.println("EXPECTED: Total price is " + expected);
		System.out.println("ACTUAL: Total price is " + actual);
	}

}
