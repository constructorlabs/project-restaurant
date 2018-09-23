# Project Restaurant

We are going to create a restaurant web page. Which will have two sections
- A list of menu items with item number, name and price
- A list of restaurant locations with address and phone number

## Setup

- Fork and clone the repo
- Run `npm install` after cloning to download all dependencies
- Run `npm run dev -- --watch` to continuously build React in the background
- Open `index.html` in browser to view the result

## Tasks

Solve the tasks, one at a time. Each task will require an adjustment to material created for previous task. Check your work in the browser frequently to make sure all is working.

- Draw the layout of the website first using pen and paper. It should display a list of menu items and as it's small chain of restaurants, it should also display a list of different locations.
- Create the web page as a single React component in `App.js`
- Create a `MenuItem` and `Location` component to display respective pieces of information which will be passed in as `props`.
- Update the `App` component to use `MenuItem` and `Location` components created for previous task. Pass the data to each component to display as `props`. For example `<MenuItem item={{id: 1, name: "Cheeseburger", price: 10 }} />`
- Extract `props` data passed to `MenuItem` and `Location` components into arrays. Generate `MenuItem` and `Location` component lists by mapping over the data in the respective array and passing each item from the array to each respective component. Use `id`s as `key`s.
- Add some styling to your page to make it look good and responsive.
