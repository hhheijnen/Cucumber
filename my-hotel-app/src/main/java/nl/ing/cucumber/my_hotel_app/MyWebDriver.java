package nl.ing.cucumber.my_hotel_app;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class MyWebDriver {

	public static FirefoxDriver driver = null;

	public static String browser = "firefox";
	public static String baseURL = "http://www.adactin.com/HotelAppBuild2/";

	public static void createDriver() {
		createDriver(browser);
		OpenURL(baseURL);
		System.out.println(driver.toString());
	}

	public static void createDriver(final String browserId) {
		if (browserId.equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
		}
	}

	public static void OpenURL(String baseURL) {
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(baseURL);
	}

	public static void closeDriver() {
		driver.quit();
		System.out.println("Application is closed");
	}

	public static void sendKeys(String id, String value, boolean clear) {
		if (clear) {
			MyWebDriver.driver.findElement(By.id(id)).clear();
		}
		MyWebDriver.driver.findElement(By.id(id)).sendKeys(value);
		System.out.println("Send keys for id: " + id + " value: " + value);
	}

	public static void clickButton(String button) {
		MyWebDriver.driver.findElement(By.id(button)).click();
		System.out.println("Button '" + button + "' is clicked");
	}

	public static void clickLink(String link) {
		MyWebDriver.driver.findElement(By.partialLinkText(link)).click();
		System.out.println("Link '" + link + "' is clicked");
	}

	public static void assertElement(String id, String expected) {
		String actual = MyWebDriver.driver.findElement(By.id(id)).getAttribute("value").toString();
		Assert.assertTrue(expected.equals(actual));
		System.out.println("EXPECTED: Price per night is " + expected);
		System.out.println("ACTUAL: Price per night is " + actual);

	}
	
}
