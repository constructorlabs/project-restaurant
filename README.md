# Project Restaurant

We are going to create a restaurant web page. Which will have two sections
- A list of menu items with item number, name and price
- A list of restaurant locations with address and phone number

## Setup

- Fork and clone the repo
- Run `npm install`
- Run `npm run dev -- --watch` to continuously build React in the background
- Open `index.html` in browser to view the result

## Tasks

Solve the tasks, one at a time. Each task will require and adjustment to material created in the previous example. Check your work in the browser frequently to make sure all is working.

- Draw the layout of the website first using pen and paper
- Create the web page as a single React component in `App.js`
- Create a MenuItem and Location component to display respective pieces of information which will be passed in as `props`.
- Replace the JSX HTML elements for menu item and location on web page with MenuItem and Location components created for previous exercise. Pass the data to each component to display as `props`. For example `<MenuItem item={{id: 1, name: "Cheeseburger", price: 10 }} />`
- Extract all data in passed to MenuItem and Location components into arrays in `state` of `App`. Generate MenuItem and Location component lists by mapping over the data in state and passing each item from the array to each respective component. Use `id`s as `key`s.
