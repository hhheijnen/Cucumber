package nl.ing.cucumber.my_hotel_app;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class MyWebDriver {

	private static FirefoxDriver driver = null;

	private static String browser = "firefox";
	private static String baseURL = "http://www.adactin.com/HotelAppBuild2/";

	private static Logger logger = Logger.getGlobal();
	
	public static void createDriver() {
		createDriver(browser);
		OpenURL(baseURL);
		logger.info(driver.toString());
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
		logger.info("Application is closed");
	}

	public static void sendKeys(String id, String value, boolean clear) {
		if (clear) {
			driver.findElement(By.id(id)).clear();
		}
		driver.findElement(By.id(id)).sendKeys(value);
		logger.info("Send keys for id: " + id + " value: " + value);
	}

	public static void clickButton(String button) {
		driver.findElement(By.id(button)).click();
		logger.info("Button '" + button + "' is clicked");
	}

	public static void clickLink(String link) {
		driver.findElement(By.partialLinkText(link)).click();
		logger.info("Link '" + link + "' is clicked");
	}

	public static void assertElement(String id, String expected) {
		String actual = driver.findElement(By.id(id)).getAttribute("value").toString();
		Assert.assertTrue(expected.equals(actual));
		logger.info("EXPECTED: Price per night is " + expected);
		logger.info("ACTUAL: Price per night is " + actual);

	}
	
	public static void assertText(String name, String value) {
		String idName = name.split("=")[0];
		String idValue = value.split("=")[0];
		logger.info("EXPECTED: " + value.split("=")[1]);
		if (idName.equals("id")) {
			if (idValue.equals("text")) {
				Assert.assertTrue(value.split("=")[1].equals(driver.findElement(By.id(name.split("=")[1])).getText()));
				logger.info("ACTUAL: " + driver.findElement(By.id(name.split("=")[1])).getText());
			}
			else {
				Assert.assertTrue(value.split("=")[1].equals(driver.findElement(By.id(name.split("=")[1])).getAttribute(value.split("=")[0])));
				logger.info("ACTUAL: " + driver.findElement(By.id(name.split("=")[1])).getAttribute(value.split("=")[0]));
			}
		}
		if (idName.equals("class")) {
			if (idValue.equals("text")) {
				Assert.assertTrue(value.split("=")[1].equals(driver.findElement(By.className(name.split("=")[1])).getText()));
				logger.info("ACTUAL: " + driver.findElement(By.className(name.split("=")[1])).getText());
			}
			else {
				System.out.println("#class#: ");
			}
		}
		
	}
	
	public static void assertTitle(String value) {
		Assert.assertTrue(value.equals(MyWebDriver.driver.getTitle()));
	}
}
