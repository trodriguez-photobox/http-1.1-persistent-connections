# HTTP 1.1 persistent TCP connections test

This is very simple yet powerful static HTML page which allows to send XMLHttpRequest at a fixed rate to a given http endpoint.

## Running in google chrome

Given that the Javascript code will run in your local browser, and the XMLHttpRequest will probably target a different domain than
localhost, you will need to disable the *same origin policy*. In order to do that, you need start Chrome will the flag *--disable-web-security*.
From Chrome 49 on, you will also need to add the flag *--user-data-dir*. Keep in mind that if you have an already running instance
of Google Chrome you will need to kill before in order to the flags take effect.
