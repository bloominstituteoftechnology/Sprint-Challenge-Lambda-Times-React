# Answers to your written questions in ANSWERS.md

## [x] What are PropTypes used for?
## [x] What is a lifecycle event in React?
## [x] What is a Higher Order Component?
## [x] What are three different ways to style components in React?

## Challenge

## Project Setup

# Part I

[] Go through the Tabs, Tab, Cards, and Card components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.

[] Complete the changeSelected and filterCards functions in the Content component.
You should now be able to filter cards using your tabs!

# Part II
[] Make sure all of your props being passed are validated using PropTypes.

# Part III
[] Convert the TopBar and Header components to Styled Components. You should not have any className props when you are finished. 

[] Once you have finished the TopBar and Header components, please move on to Part II. If you have time at the end, you may convert all of the components to styled-components.


Stretch Challenge
[] Re-factor the app, so that it uses ALL styled components. There should be no className props on any component. To truly test this, delete the CSS file.

[] You will find a Carousel component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your Tabs and Cards components within the Content component. Added challenge: make it so that there is infinite scroll to the right and the left.

[] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the localStorage. Add a Higher Order Component that wraps the Content component, only allowing it to render once a user has logged in. For more instructions see this README: React-Insta-Clone: Day III.