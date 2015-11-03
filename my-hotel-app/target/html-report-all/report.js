$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login the hotel application",
  "description": "",
  "id": "login-the-hotel-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Starting application",
  "description": "",
  "id": "login-the-hotel-application;starting-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User opens the hotelapp",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opens_the_hotelapp()"
});
formatter.result({
  "duration": 16210102337,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Message \"\u003cerrorText\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorText"
      ],
      "line": 15,
      "id": "login-the-hotel-application;login-with-missing-credentials;;1"
    },
    {
      "cells": [
        "atostestuser",
        "",
        "Enter Password"
      ],
      "line": 16,
      "id": "login-the-hotel-application;login-with-missing-credentials;;2"
    },
    {
      "cells": [
        "",
        "testuser",
        "Enter Username"
      ],
      "line": 17,
      "id": "login-the-hotel-application;login-with-missing-credentials;;3"
    },
    {
      "cells": [
        "",
        "",
        "Enter Username"
      ],
      "line": 18,
      "id": "login-the-hotel-application;login-with-missing-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"atostestuser\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Message \"Enter Password\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 214997186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 304214283,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 111153554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Password",
      "offset": 9
    }
  ],
  "location": "LoginSteps.message_is_displayed(String)"
});
formatter.result({
  "duration": 42290981,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat nl.ing.cucumber.stepDefinitions.LoginSteps.message_is_displayed(LoginSteps.java:73)\r\n\tat ✽.Then Message \"Enter Password\" is displayed(login.feature:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"testuser\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Message \"Enter Username\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 109626953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 106725029,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 153686845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Username",
      "offset": 9
    }
  ],
  "location": "LoginSteps.message_is_displayed(String)"
});
formatter.result({
  "duration": 50482234,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Message \"Enter Username\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 103025221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 103159541,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 96996913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Username",
      "offset": 9
    }
  ],
  "location": "LoginSteps.message_is_displayed(String)"
});
formatter.result({
  "duration": 40182478,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Invalid login is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "wrong",
        "testuser"
      ],
      "line": 28,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "atostestuser",
        "wrong"
      ],
      "line": 29,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "wrong",
        "wrong"
      ],
      "line": 30,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User enters \"wrong\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"testuser\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Invalid login is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 104737905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 117953419,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 703156328,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 43814457,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User enters \"atostestuser\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"wrong\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Invalid login is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 155507966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 106252011,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1843394274,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 34098389,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User enters \"wrong\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters \"wrong\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Invalid login is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 138894752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 122144541,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1168238412,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 31600315,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters \"atostestuser\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters \"testuser\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Welcome text for user \"atostestuser\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 143248307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 111192377,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1589818856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 23
    }
  ],
  "location": "LoginSteps.message_displayed_login_successfully(String)"
});
formatter.result({
  "duration": 27223555,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-the-hotel-application;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User logouts from the application",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Logout successfully is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User closes the hotelapp",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Logout_from_the_application()"
});
formatter.result({
  "duration": 917284677,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 68165986,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 5214915524,
  "status": "passed"
});
formatter.uri("searchhotel.feature");
formatter.feature({
  "line": 2,
  "name": "Search for a hotel",
  "description": "",
  "id": "search-for-a-hotel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Starting application and successfull login",
  "description": "",
  "id": "search-for-a-hotel;starting-application-and-successfull-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User opens the hotelapp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"atostestuser\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"testuser\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Welcome text for user \"atostestuser\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_opens_the_hotelapp()"
});
formatter.result({
  "duration": 11037017270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 258390836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 118419297,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1299236432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atostestuser",
      "offset": 23
    }
  ],
  "location": "LoginSteps.message_displayed_login_successfully(String)"
});
formatter.result({
  "duration": 25675535,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "The hotel application is active",
  "description": "",
  "id": "search-for-a-hotel;the-hotel-application-is-active",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "The hotelapp is active",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_hotelapp_is_active()"
});
formatter.result({
  "duration": 16225428,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User selects \"\u003clocation\u003e\" as location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "A list of \"\u003cnumber\u003e\" available hotels for \"\u003clocation\u003e\" are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;",
  "rows": [
    {
      "cells": [
        "location",
        "number"
      ],
      "line": 24,
      "id": "search-for-a-hotel;;;1"
    },
    {
      "cells": [
        "Sydney",
        "4"
      ],
      "line": 25,
      "id": "search-for-a-hotel;;;2"
    },
    {
      "cells": [
        "New York",
        "3"
      ],
      "line": 26,
      "id": "search-for-a-hotel;;;3"
    },
    {
      "cells": [
        "London",
        "4"
      ],
      "line": 27,
      "id": "search-for-a-hotel;;;4"
    },
    {
      "cells": [
        "Paris",
        "4"
      ],
      "line": 28,
      "id": "search-for-a-hotel;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User selects \"Sydney\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "A list of \"4\" available hotels for \"Sydney\" are displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 604743037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 165254826,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1291880994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "Sydney",
      "offset": 36
    }
  ],
  "location": "SearchSteps.a_list_of_available_hotels_for_are_displayed(String,String)"
});
formatter.result({
  "duration": 26518936,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User selects \"New York\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "A list of \"3\" available hotels for \"New York\" are displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 142710583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 772899787,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 699686335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    },
    {
      "val": "New York",
      "offset": 36
    }
  ],
  "location": "SearchSteps.a_list_of_available_hotels_for_are_displayed(String,String)"
});
formatter.result({
  "duration": 32978763,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat nl.ing.cucumber.stepDefinitions.SearchSteps.a_list_of_available_hotels_for_are_displayed(SearchSteps.java:81)\r\n\tat ✽.Then A list of \"3\" available hotels for \"New York\" are displayed(searchhotel.feature:21)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User selects \"London\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "A list of \"4\" available hotels for \"London\" are displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 925113581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 95001310,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 957854049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "London",
      "offset": 36
    }
  ],
  "location": "SearchSteps.a_list_of_available_hotels_for_are_displayed(String,String)"
});
formatter.result({
  "duration": 31659666,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User selects \"Paris\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "A list of \"4\" available hotels for \"Paris\" are displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 990084907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 97079467,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 2078575072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "Paris",
      "offset": 36
    }
  ],
  "location": "SearchSteps.a_list_of_available_hotels_for_are_displayed(String,String)"
});
formatter.result({
  "duration": 23972222,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User selects \"\u003clocation\u003e\" as location",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User selects \"\u003chotel\u003e\" as hotel",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select \"\u003ctype\u003e\" as roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects \u003crooms\u003e rooms",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects \u003cdays\u003e days",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "The price per night is \"\u003cnight\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "The total price is \"\u003ctotal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "type",
        "rooms",
        "days",
        "night",
        "total"
      ],
      "line": 42,
      "id": "search-for-a-hotel;;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Cornice",
        "Standard",
        "1",
        "1",
        "100",
        "100"
      ],
      "line": 43,
      "id": "search-for-a-hotel;;;2"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Cornice",
        "Standard",
        "2",
        "1",
        "100",
        "200"
      ],
      "line": 44,
      "id": "search-for-a-hotel;;;3"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Cornice",
        "Standard",
        "1",
        "2",
        "100",
        "200"
      ],
      "line": 45,
      "id": "search-for-a-hotel;;;4"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Cornice",
        "Standard",
        "2",
        "2",
        "100",
        "400"
      ],
      "line": 46,
      "id": "search-for-a-hotel;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User selects \"Sydney\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User selects \"Hotel Cornice\" as hotel",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select \"Standard\" as roomtype",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects 1 rooms",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects 1 days",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "The price per night is \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "The total price is \"100\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 1075817730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 111472172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Cornice",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_hotel(String)"
});
formatter.result({
  "duration": 92282792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_select_as_roomtype(String)"
});
formatter.result({
  "duration": 89872628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_rooms(int)"
});
formatter.result({
  "duration": 79367155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_days(int)"
});
formatter.result({
  "duration": 295359911,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 862583207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "SearchSteps.the_price_per_night_is(String)"
});
formatter.result({
  "duration": 46645428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "SearchSteps.the_total_price_is(String)"
});
formatter.result({
  "duration": 51367581,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User selects \"Sydney\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User selects \"Hotel Cornice\" as hotel",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select \"Standard\" as roomtype",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects 2 rooms",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects 1 days",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "The price per night is \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "The total price is \"200\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 1152253509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 94522044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Cornice",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_hotel(String)"
});
formatter.result({
  "duration": 86462433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_select_as_roomtype(String)"
});
formatter.result({
  "duration": 73736450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_rooms(int)"
});
formatter.result({
  "duration": 80004391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_days(int)"
});
formatter.result({
  "duration": 230786634,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 669302927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "SearchSteps.the_price_per_night_is(String)"
});
formatter.result({
  "duration": 53243590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "SearchSteps.the_total_price_is(String)"
});
formatter.result({
  "duration": 33358517,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User selects \"Sydney\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User selects \"Hotel Cornice\" as hotel",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select \"Standard\" as roomtype",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects 1 rooms",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects 2 days",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "The price per night is \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "The total price is \"200\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 2082774674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 109492634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Cornice",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_hotel(String)"
});
formatter.result({
  "duration": 95111532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_select_as_roomtype(String)"
});
formatter.result({
  "duration": 91172091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_rooms(int)"
});
formatter.result({
  "duration": 75776677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_days(int)"
});
formatter.result({
  "duration": 248539109,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1145498715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "SearchSteps.the_price_per_night_is(String)"
});
formatter.result({
  "duration": 43340100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "SearchSteps.the_total_price_is(String)"
});
formatter.result({
  "duration": 45142926,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "",
  "description": "",
  "id": "search-for-a-hotel;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User navigtes to the search page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User selects \"Sydney\" as location",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User selects \"Hotel Cornice\" as hotel",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select \"Standard\" as roomtype",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects 2 rooms",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects 2 days",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "The price per night is \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "The total price is \"400\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.user_navigtes_to_the_search_page()"
});
formatter.result({
  "duration": 158794998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_location(String)"
});
formatter.result({
  "duration": 7255496944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Cornice",
      "offset": 14
    }
  ],
  "location": "SearchSteps.user_selects_as_hotel(String)"
});
formatter.result({
  "duration": 90573231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_select_as_roomtype(String)"
});
formatter.result({
  "duration": 89190768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_rooms(int)"
});
formatter.result({
  "duration": 77421978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "SearchSteps.user_selects_days(int)"
});
formatter.result({
  "duration": 252103706,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 8938676272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "SearchSteps.the_price_per_night_is(String)"
});
formatter.result({
  "duration": 58678395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 20
    }
  ],
  "location": "SearchSteps.the_total_price_is(String)"
});
formatter.result({
  "duration": 36955242,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Successful LogOut",
  "description": "",
  "id": "search-for-a-hotel;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User logouts from the application",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Logout successfully is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User closes the hotelapp",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Logout_from_the_application()"
});
formatter.result({
  "duration": 1627924515,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 80253395,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 358095556,
  "status": "passed"
});
});