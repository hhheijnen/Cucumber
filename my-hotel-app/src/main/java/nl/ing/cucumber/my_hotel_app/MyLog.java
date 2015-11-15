package nl.ing.cucumber.my_hotel_app;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;

public class MyLog {

	private static Logger rootLog = Logger.getRootLogger();
	private static Logger logger = Logger.getLogger(MyWebDriver.class.getPackage().getName());

	public static void init() {
		BasicConfigurator.configure();;
		rootLog.setLevel(Level.INFO);
		logger.setLevel(Level.INFO);
	}
	
	public static void info(Object message) {
		logger.info(message);
	}
	
	public static void close() {
		logger = null;
	}
}
