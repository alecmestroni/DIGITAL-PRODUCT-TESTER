# DIGITAL PRODUCT TESTER INTERVIEW

## MANUAL TEST

### Exercise Description:

- Write the test cases of the following card on mandatory user registration, considering: Functionality, Layout and Texts

**TITLE**
To make sign up mandatory in order to publish ads

**WHY**
To have a more selected, controlled and reliable target.
To avoid spammers.

**WHERE**
In these following countries:

- Brasil
- Argentina
- Singapore
- Switzerland

**WHAT**
To publish ads, users must be registered and create their
account on the site.

1.  Create an alert informing advertisers that registration
    will be mandatory from day xx/xx/xx.
    The alert will be visible on the top of these pages:
    post-insert, post-insert-images, post-insert/$idannuncio$/ ,
    post-promote/i/, /feedback/post-publish-email/, /post-edit/
    The alert will have a link to the registration page
    and will only be visible to non-logged in users.
1.  Automatic activation at local midnight of mandatory
    registration. When mandatory registration is activated
    those pages will no longer be accessed by logged
    out/unregistered users.

## Task Execution

### 1. **Functionality** - Test Case

0. User shuold be not logged in and must be from one of the countries involved.
1. Open the website (mobile or desktop version).
2. Click on the "Post Your Ad" button.
3. Verify that alert is shown, the user is prompted to log in or sign up.
4. Click on "Register Now".
5. Registration form should be shown
6. Verify that the user is required to provide mandatory information such as name, email, password, and country.
7. Verify that the user is able to successfully sign up and create their account.
8. Verify that the user is now logged in and he's redirected back to the "Post Your Ad" section, exactly where the user left off.

### 2. **Layout** - Test Case

0. User shuold be not logged in and must be from one of the countries involved.
1. Open the website (mobile or desktop version).
2. Click on the "Post Your Ad" button.
3. Verify that the "Register Now" text is prominent and easily visible (different color) on the page.
4. Verify that the sign-up form is well-organized and easy to navigate (to avoid the loss of users who, due to a difficult registration, no longer want to publish ads).
5. Verify that the form fields are clearly labeled and easy to understand.
6. Verify that the confirmation message after sign-up is displayed in a clear and easily noticeable manner.
7. Verify that the user is now logged in and he's redirected back to the "Post Your Ad" section, exactly where the user left off.

### 3. **Texts** - Test Case

0. User shuold be not logged in and must be from one of the countries involved.
1. Open the website (mobile or desktop version).
2. Click on the "Post Your Ad" button.
3. Verify that the clickable text "Register Now" is well spelled.
4. Verify that the box-alert related to mandatory user registration accurately includes the reasoning behind this requirement.
5. Verify that the text on the sign-up form gives clear instructions on how to fill out the required fields, and no extra information are required.
6. Verify that the confirmation message after sign-up uses positive and reassuring language.
7. Verify that any error messages displayed during sign-up use clear and concise language to explain the problem and how to fix it.
8. Verify that the user is now logged in and he's redirected back to the "Post Your Ad" section, exactly where the user left off.

---

## AUTOMATED TEST

### Tool used : Cypress

1. **Install**:\
   Clone the repo locally.\
   Run in terminal: **"npm install"**

2. **Test Execution**:\
   Run in terminal: **"npm run automated-test"**\

---

### Test Executed :

- Visit the site's home page
- The user clicks on the 'Publish your ad' button
- Verify that the ad publication page is displayed
- Check that the ad is present on all pages
- Check that the ad title is spelled correctly
- Check that the text of the ad is spelled correctly
- Check that the clickable text redirects to the correct page
- Ensure that the user can log out correctly after publishing the ad.

![alt text](https://github.com/alecmestroni/DIGITAL-PRODUCT-TESTER/blob/master/cypress/fixtures/img/test-exec.png?raw=true)

---

### Test Coverage :

![alt text](https://github.com/alecmestroni/DIGITAL-PRODUCT-TESTER/blob/master/cypress/fixtures/img/viewport.png?raw=true)

1. **Viewport**:
   - iphone-x
   - samsung-s10
   - macbook-16
2. **Pages verified**:
   - /post-insert
   - /post-insert-images
   - /post-insert/$idannuncio$/
   - /post-promote/i/
   - /post-edit/
   - /feedback/post-publish-email/
3. **URL**:
   {it is not possible to do so in the local environment, but would have been}
   - Brasil URL
   - Argentina URL
   - Singapore URL
   - Switzerland URL
4. **Text-Checks**:
   - Spelling alert-title
   - Spelling alert-text
5. **Redirect**:
   - Verify the redirect to the "Registration Page"

---
