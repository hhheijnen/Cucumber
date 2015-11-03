@All
Feature: Search for a hotel
 
@Sanity
Scenario: Starting application and successfull login
	Given User opens the hotelapp
	When User enters "atostestuser" in username field
	And User enters "testuser" in password field
	And User clicks loginbutton
	Then Welcome text for user "atostestuser" is displayed
	
@Sanity	
Scenario: The hotel application is active
	Given The hotelapp is active
	
@Sanity
Scenario Outline:
	Given User navigtes to the search page
	When User selects "<location>" as location
	And User clicks the search button
	Then A list of "<number>" available hotels for "<location>" are displayed
	
	Examples:
		| location	| number	|
		| Sydney	| 4 		|
		| New York	| 3 		|
		| London	| 4 		|
		| Paris		| 4 		|
		
Scenario Outline:
	Given User navigtes to the search page
	When User selects "<location>" as location
	And User selects "<hotel>" as hotel
	And User select "<type>" as roomtype
	And User selects <rooms> rooms
	And User selects <days> days 
	And User clicks the search button
	Then The price per night is "<night>"
	And The total price is "<total>"
	
	Examples:
		| location	| hotel			| type		| rooms		| days	| night	| total	|
		| Sydney	| Hotel Cornice	| Standard	| 1			| 1		| 100	| 100	|
		| Sydney	| Hotel Cornice	| Standard	| 2			| 1		| 100	| 200	|
		| Sydney	| Hotel Cornice	| Standard	| 1			| 2		| 100	| 200	|
		| Sydney	| Hotel Cornice	| Standard	| 2			| 2		| 100	| 400	|


@Sanity
Scenario: Successful LogOut
	When User logouts from the application
	Then Logout successfully is displayed
	And User closes the hotelapp
