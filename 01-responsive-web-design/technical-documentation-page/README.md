# Responsive Web Design Projects - Build a Technical Documentation Page

## Instructions
1. From your terminal, clone locally using `git clone https://github.com/kikoalmela/freeCodeCamp-myStuff.git` (This will clone all my freeCodeCamp repository).
2. Go to the technical-documentation-page directory: `cd freeCodeCamp-myStuff/01-responsive-web-design/technical-documentation-page`.
3. Open index.html in your browser: `open index.html`.

If you want to run it on a local server to try and see live changes (You need [node.js](https://nodejs.org/en/) already installed on you system, and [npm](https://www.npmjs.com/), witch comes included with node.js):

1. After doing the previous steps 1 and 2, run `npm install` inside the project's directory.
2. If you don't have it, install the [live-server](https://github.com/tapio/live-server) node package: `npm install -g live-server`.
3. Run `npm start`. This starts a local server, serves the page on localhost:8080, opens the page in the browser and auto updates after any changes you make in the source code.


## Discussion
I used the following technologies: **HTML**, **CSS** and **Sass**, including CSS-flexbox and CSS-animations. The navbar is minimized son scroll without Javascript.

## Requirements
- **Objective**: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/RKRbwL.
- Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.
- You can use HTML, JavaScript, and CSS to complete this project. Plain CSS is recommended because that is what the lessons have covered so far and you should get some practice with plain CSS. You can use Bootstrap or SASS if you choose. Additional technologies (just for example jQuery, React, Angular, or Vue) are not recommended for this project, and using them is at your own risk. Other projects will give you a chance to work with different technology stacks like React. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
- **User Story #1**: I can see a `main` element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation).
- **User Story #2**: Within the `#main-doc` element, I can see several `section` elements, each with a class of `main-section`. There should be a minimum of 5.
- **User Story #3**: The first element within each `.main-section` should be a `header` element which contains text that describes the topic of that section.
- **User Story #4**: Each `section` element with the class of `main-section` should also have an id that corresponds with the text of each `header` contained within it. Any spaces should be replaced with underscores (e.g. The `section` that contains the header "Javascript and Java" should have a corresponding `id="Javascript_and_Java"`).
- **User Story #5**: The `.main-section` elements should contain at least 10 `p` elements total (not each).
- **User Story #6**: The `.main-section` elements should contain at least 5 `code` elements total (not each).
- **User Story #7**: The `.main-section` elements should contain at least 5 `li` items total (not each).
- **User Story #8**: I can see a `nav` element with a corresponding `id="navbar"`.
- **User Story #9**: The navbar element should contain one `header` element which contains text that describes the topic of the technical documentation.
- **User Story #10**: Additionally, the navbar should contain link (`a`) elements with the class of `nav-link`. There should be one for every element with the class `main-section`.
- **User Story #11**: The `header` element in the navbar must come before any link (`a`) elements in the navbar.
- **User Story #12**: Each element with the class of `nav-link` should contain text that corresponds to the `header` text within each `section` (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").
- **User Story #13**: When I click on a navbar element, the page should navigate to the corresponding section of the `main-doc` element (e.g. If I click on a `nav-link` element that contains the text "Hello world", the page navigates to a `section` element that has that id and contains the corresponding `header`.
- **User Story #14**: On regular sized devices (laptops, desktops), the element with `id="navbar"` should be shown on the left side of the screen and should always be visible to the user.
- **User Story #15**: My Technical Documentation page should use at least one media query.
- You can build your project by forking [this CodePen pen](http://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`
- Once you're done, submit the URL to your working project with all its tests passing.
- Remember to use the Read-Search-Ask method if you get stuck.