$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login the hotel application",
  "description": "",
  "id": "login-the-hotel-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Starting application",
  "description": "",
  "id": "login-the-hotel-application;starting-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User opens the hotelapp",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opens_the_hotelapp()"
});
formatter.result({
  "duration": 16076195699,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User enters \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Welcome text for user \"\u003cusername\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "login-the-hotel-application;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 39,
      "id": "login-the-hotel-application;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "atostestuser",
        "testuser"
      ],
      "line": 40,
      "id": "login-the-hotel-application;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-the-hotel-application;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User enters \"atostestuser\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters \"testuser\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Welcome text for user \"atostestuser\" is displayed",
  "matchedColumns": [
    0
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
  "duration": 233063817,
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
  "duration": 120092265,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_loginbutton()"
});
formatter.result({
  "duration": 1119400141,
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
  "duration": 78705821,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-the-hotel-application;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User logouts from the application",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Logout successfully is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User closes the hotelapp",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Logout_from_the_application()"
});
formatter.result({
  "duration": 198459388,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_logout_successfully()"
});
formatter.result({
  "duration": 393784358,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_the_hotelapp()"
});
formatter.result({
  "duration": 531812950,
  "status": "passed"
});
});