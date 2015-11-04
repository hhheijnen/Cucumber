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
  "duration": 8676580272,
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
  "duration": 277513725,
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
  "duration": 296414832,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 136479680,
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
  "duration": 27973692,
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
  "duration": 121114164,
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
  "duration": 176693396,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 162547017,
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
  "duration": 29028165,
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
  "duration": 109916566,
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
  "duration": 109923706,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 111807301,
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
  "duration": 28588615,
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
  "duration": 124525252,
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
  "duration": 122991512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 631277592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 32596778,
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
  "duration": 152674763,
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
  "duration": 123401164,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 558893261,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 30676591,
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
  "duration": 157404949,
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
  "duration": 126106741,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 587980778,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalid_login_is_displayed()"
});
formatter.result({
  "duration": 36056061,
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
  "duration": 200494260,
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
  "duration": 136810346,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1916459573,
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
  "duration": 31626643,
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
  "duration": 159607609,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 413799735,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 615460477,
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
  "duration": 12327667969,
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
  "duration": 248028160,
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
  "duration": 292908694,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1532314975,
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
  "duration": 36081943,
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
  "duration": 23892791,
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
  "duration": 124740342,
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
  "duration": 528646404,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 1126291486,
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
  "duration": 27805012,
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
  "duration": 143649035,
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
  "duration": 557272058,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 864236987,
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
  "duration": 40464058,
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
  "duration": 142391965,
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
  "duration": 551379406,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 805554130,
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
  "duration": 37857101,
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
  "duration": 149607283,
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
  "duration": 533814354,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 812960440,
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
  "duration": 40840241,
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
  "duration": 147949041,
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
  "duration": 529951667,
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
  "duration": 132680359,
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
  "duration": 118593778,
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
  "duration": 94822366,
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
  "duration": 336706193,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 831327838,
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
  "duration": 75759273,
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
  "duration": 47199218,
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
  "duration": 145657578,
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
  "duration": 547876839,
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
  "duration": 123542624,
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
  "duration": 101769045,
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
  "duration": 114488781,
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
  "duration": 325800439,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 767342265,
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
  "duration": 56796138,
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
  "duration": 42539092,
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
  "duration": 136440856,
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
  "duration": 488537556,
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
  "duration": 130754371,
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
  "duration": 106731724,
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
  "duration": 114415596,
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
  "duration": 322047973,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 745155464,
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
  "duration": 51726808,
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
  "duration": 44585566,
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
  "duration": 160132392,
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
  "duration": 561170444,
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
  "duration": 147479146,
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
  "duration": 168068839,
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
  "duration": 138722948,
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
  "duration": 392214026,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.user_clicks_the_search_button()"
});
formatter.result({
  "duration": 843490216,
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
  "duration": 52256499,
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
  "duration": 54834896,
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
  "duration": 156627592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 477534966,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 428474912,
  "status": "passed"
});
});