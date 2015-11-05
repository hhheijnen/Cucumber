$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 4,
  "name": "Login the hotel application",
  "description": "",
  "id": "login-the-hotel-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Starting application",
  "description": "",
  "id": "login-the-hotel-application;starting-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User opens the hotelapp",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opens_the_hotelapp()"
});
formatter.result({
  "duration": 12022902222,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Message \"\u003cerrorText\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
      "id": "login-the-hotel-application;login-with-missing-credentials;;1"
    },
    {
      "cells": [
        "atostestuser",
        "",
        "Enter Password"
      ],
      "line": 18,
      "id": "login-the-hotel-application;login-with-missing-credentials;;2"
    },
    {
      "cells": [
        "",
        "testuser",
        "Enter Username"
      ],
      "line": 19,
      "id": "login-the-hotel-application;login-with-missing-credentials;;3"
    },
    {
      "cells": [
        "",
        "",
        "Enter Username"
      ],
      "line": 20,
      "id": "login-the-hotel-application;login-with-missing-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters \"atostestuser\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 168098911,
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
  "duration": 78387845,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 122095145,
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
  "duration": 18791765,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"testuser\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 76925018,
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
  "duration": 82798567,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 79087607,
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
  "duration": 13788213,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login with missing credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-missing-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 81528646,
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
  "duration": 67995786,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 77695355,
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
  "duration": 18151457,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Invalid login is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "wrong",
        "testuser"
      ],
      "line": 30,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "atostestuser",
        "wrong"
      ],
      "line": 31,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "wrong",
        "wrong"
      ],
      "line": 32,
      "id": "login-the-hotel-application;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User enters \"wrong\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"testuser\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "duration": 153652855,
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
  "duration": 72711905,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 639243368,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 10224390,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User enters \"atostestuser\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"wrong\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "duration": 87753786,
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
  "duration": 72702923,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 603641070,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 9584082,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User enters \"wrong\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"wrong\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "duration": 86791400,
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
  "duration": 71343606,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 693203287,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 14370777,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User enters \"atostestuser\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters \"testuser\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 39,
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
  "duration": 101733620,
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
  "duration": 97113740,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 2078311282,
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
  "duration": 15184314,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-the-hotel-application;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User logouts from the application",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Logout successfully is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User closes the hotelapp",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Logout_from_the_application()"
});
formatter.result({
  "duration": 607625776,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 48381074,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 3335248267,
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
  "duration": 8458648835,
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
  "duration": 161955894,
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
  "duration": 87861146,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 2097479875,
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
  "duration": 14225777,
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
  "duration": 11810403,
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
  "duration": 530096380,
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
  "duration": 77125622,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1221134940,
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
  "duration": 33701906,
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
  "duration": 586750125,
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
  "duration": 67469254,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 811975847,
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
  "duration": 17669836,
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
  "duration": 602269777,
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
  "duration": 54523236,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 805838390,
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
  "duration": 15060701,
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
  "duration": 590166382,
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
  "duration": 47711681,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 811001912,
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
  "duration": 14218934,
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
  "duration": 533794509,
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
  "duration": 82806694,
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
  "duration": 67213901,
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
  "duration": 58516925,
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
  "duration": 60249219,
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
  "duration": 343350704,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 767866484,
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
  "duration": 35374747,
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
  "duration": 17310546,
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
  "duration": 553552081,
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
  "duration": 60819380,
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
  "duration": 69491975,
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
  "duration": 54630167,
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
  "duration": 55143013,
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
  "duration": 169998020,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 780028906,
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
  "duration": 21007392,
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
  "duration": 17304129,
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
  "duration": 581193093,
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
  "duration": 49716438,
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
  "duration": 77022967,
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
  "duration": 55172953,
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
  "duration": 45661585,
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
  "duration": 190327464,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 835930707,
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
  "duration": 24795343,
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
  "duration": 20982156,
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
  "duration": 612501866,
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
  "duration": 64519648,
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
  "duration": 71836776,
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
  "duration": 67575758,
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
  "duration": 60845043,
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
  "duration": 173531902,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 784811751,
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
  "duration": 38948834,
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
  "duration": 22522829,
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
  "duration": 557899928,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 29756123,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 429087328,
  "status": "passed"
});
});