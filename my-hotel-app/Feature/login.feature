

@All
Feature: Login the hotel application
 
@Sanity
Scenario: Starting application
	Given User opens the hotelapp

Scenario Outline: Login with missing credentials
	When User enters "<username>" in username field
	And User enters "<password>" in password field
	And User clicks loginbutton
	Then Message "<errorText>" is displayed
	
	Examples:
		| username		| password	| errorText 		|
		| atostestuser	| 			| Enter Password	|
		| 				| testuser	| Enter Username	|
		| 				| 			| Enter Username	|

Scenario Outline: Login with invalid credentials
	When User enters "<username>" in username field
	And User enters "<password>" in password field
	And User clicks loginbutton
	Then Invalid login is displayed
	
	Examples:
		| username		| password	|
		| wrong			| testuser	|
		| atostestuser	| wrong		|
		| wrong			| wrong		|

@Sanity
Scenario: Login with valid credentials
	When User enters "atostestuser" in username field
	And User enters "testuser" in password field
	And User clicks loginbutton
	Then Welcome text for user "atostestuser" is displayed
	
@Sanity
Scenario: Successful LogOut
	When User logouts from the application
	Then Logout successfully is displayed
	And User closes the hotelapp
