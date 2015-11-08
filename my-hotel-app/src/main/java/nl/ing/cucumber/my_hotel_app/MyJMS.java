package nl.ing.cucumber.my_hotel_app;

import javax.jms.ConnectionFactory;

import com.tibco.tibjms.*;

public class MyJMS {
	
	String serverURL = "tcp://localhost:7111,tcp://localhost:7222";
	
	ConnectionFactory factory = new TibjmsConnectionFactory(serverURL);
}
