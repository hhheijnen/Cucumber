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
  "duration": 12640907982,
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
  "duration": 200147974,
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
  "duration": 96854114,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 347631136,
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
  "duration": 61373709,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat nl.ing.cucumber.stepDefinitions.LoginSteps.message_is_displayed(LoginSteps.java:66)\r\n\tat ✽.Then Message \"Enter Password\" is displayed(login.feature:12)\r\n",
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
  "duration": 118813776,
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
  "duration": 165173162,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 127647621,
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
  "duration": 38827682,
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
  "duration": 124634135,
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
  "duration": 101156798,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 110057132,
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
  "duration": 35230956,
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
  "duration": 119570606,
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
  "duration": 108692519,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 930703678,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 22243473,
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
  "duration": 147936992,
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
  "duration": 103729394,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 642028053,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 25697401,
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
  "duration": 134637139,
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
  "duration": 106061911,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1136493067,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 27957180,
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
  "duration": 171956070,
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
  "duration": 114645859,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 884926640,
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
  "duration": 27614911,
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
  "duration": 477281947,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 51416668,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 487989568,
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
  "duration": 6917169993,
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
  "duration": 212962761,
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
  "duration": 110781387,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1296901684,
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
  "duration": 28890723,
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
  "duration": 21237193,
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
        "4"
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
  "duration": 446534849,
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
  "duration": 94606384,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 793661284,
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
  "duration": 23102493,
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
  "name": "A list of \"4\" available hotels for \"New York\" are displayed",
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
  "duration": 2027022300,
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
  "duration": 121853590,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 843811512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
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
  "duration": 27323068,
  "status": "passed"
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
  "duration": 690242029,
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
  "duration": 114793120,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 850338722,
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
  "duration": 24805806,
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
  "duration": 449059697,
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
  "duration": 97058494,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 740117371,
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
  "duration": 24540291,
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
  "duration": 469391461,
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
  "duration": 101978333,
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
  "duration": 87727088,
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
  "duration": 90348771,
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
  "duration": 86787298,
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
  "duration": 293653029,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 677345134,
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
  "duration": 49526379,
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
  "duration": 33976118,
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
  "duration": 520602858,
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
  "duration": 117086812,
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
  "duration": 211817699,
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
  "duration": 108380148,
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
  "duration": 80138264,
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
  "duration": 248612740,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 670547947,
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
  "duration": 47910976,
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
  "duration": 37993206,
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
  "duration": 650269286,
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
  "duration": 101671763,
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
  "duration": 99866707,
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
  "duration": 82004456,
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
  "duration": 82930412,
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
  "duration": 243024873,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 716739546,
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
  "duration": 42678767,
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
  "duration": 39397536,
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
  "duration": 512978781,
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
  "duration": 130220663,
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
  "duration": 98215159,
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
  "duration": 91121219,
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
  "duration": 68170449,
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
  "duration": 269901251,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1519328832,
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
  "duration": 76389369,
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
  "duration": 37480472,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Successful LogOut",
  "description": "",
  "id": "search-for-a-hotel;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User logouts from the application",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Logout successfully is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User closes the hotelapp",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Logout_from_the_application()"
});
formatter.result({
  "duration": 788692804,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 47308100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 466214652,
  "status": "passed"
});
});