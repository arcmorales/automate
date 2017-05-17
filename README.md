# Login Page Automation

Automation of login positive and negative scenarios using Selenium Webdriver and WebdriverIO

## Getting Started

The following instructions will get you a copy of the automation tests up and running on your local machine for development and testing purposes. 

Please note that tests were developed on MAC OS. Some environment variables may have to be configured when running the test on a different OS.

### Prerequisites

1. Make sure that you have installed Java Development Kit on your system. If not, visit the download page at http://www.oracle.com/technetwork/java/javase/downloads/index.html

2. Make sure that you have NodeJS installed. Visit https://nodejs.org/en/download/ . Download and set-up the latest, most mature version of Node that fits your operating system.

### Installation

1. Clone or download this repository to your local machine: https://github.com/arcmorales/automate
2. Run `npm install`in your terminal to download all node packages and libraries needed

## Running the tests

1. In your terminal, open two windows of your local repository's root folder.
2. On one window, run the Selenium standalone server and the gecko driver using the following command:
`java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar`
3. On the other window, run `./node_modules/.bin/wdio wdio.conf.js`
4. An instance of the firefox browser would prompt with the tests being executed.
5. Check the results in the terminal.


## Author

**Ara Morales**



