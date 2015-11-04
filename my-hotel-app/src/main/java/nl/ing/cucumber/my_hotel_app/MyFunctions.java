package nl.ing.cucumber.my_hotel_app;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.apache.commons.lang3.time.DateUtils;

public class MyFunctions {

	public static String relativeDate(int addDays) throws ParseException {
		
		String today = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Date mydate = format.parse(today);

		mydate = DateUtils.addDays(mydate, addDays);
		String sDate = new SimpleDateFormat("dd/MM/yyyy").format(mydate);
		
		return sDate;
	}

}
