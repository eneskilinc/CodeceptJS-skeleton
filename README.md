# CodeceptJS-skeleton

This repostory consists of the skeleton of codeceptJS for Software Automation Engineers.

in /tests folder, there are three scenarios in http://automationpractice.com/ website.

# Requirements and terminal commands:
node.js must be installed.
Chrome Browser must be installed.
Visual Studio Code is recommended as editor

npm init -y
npm install codeceptjs puppeteer
npx codeceptjs init
npx codeceptjs run

# 1login_test.js ==> to Login
1. Go to “automationpractice.com”.
2. Click Sign In button.
3. Fill email and password fields.
4. Click Sign In button.
5. Assert that user logged in successfully

# 2search_test.js ==> to Search for an Item
1. Go to “automationpractice.com”
2. Search for “Blouse” item by using search bar.
3. Assert that item is listed in results page.

# 3add2cart_test.js ==> to Add to Cart
1. Go to “automationpractice.com”
2. From the navigation bar navigate to Dresses > Summer Dresses
3. Assert that results are listed.
4. Add “Printed Chiffon Dress” item to cart.
5. Go to the cart.
6. Assert that “Printed Chiffon Dress” is added to the cart.
