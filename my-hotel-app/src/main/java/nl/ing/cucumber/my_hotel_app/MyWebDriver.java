package nl.ing.cucumber.my_hotel_app;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class MyWebDriver {

	  public static WebDriver driver = null;

	  public static String browser = "firefox";
	  public static String baseURL = "http://www.adactin.com/HotelAppBuild2/";

	  public static void createDriver() {
	    createDriver(browser);
	    OpenURL(baseURL);
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
	  }

}
