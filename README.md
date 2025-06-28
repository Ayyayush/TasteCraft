## Namaste React Course by Akshay Saini

# _Episode 01 - Inception_

## Coding :

- Set up all the `tools in your laptop`
  - `VS Code`
  - `Chrome`
  - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - `use CDN Links`
    - `Create an Element`
    - `Create nested React Elements`
    - `Use root.render`






## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`








## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation Coding Assignment
## Q: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
## Q: Create the `same element using JSX`
## Q: Create a `functional component of the same with JSX`
## Q: Pass `attribute into the tag in JSX`
## Q: `Composition of Component` (Add a component inside another)
## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
## Q: Create a `Header Component from scratch` using `Functional Component with JSX`

- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

## References:

- [Babel](https://babeljs.io)
- [Attribute Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)

## Q: Create a `Header Component from scratch` using `Functional Component with JSX`

## A: [Header Component](https://header-assignment.netlify.app/)







## Namaste React Course by Akshay Saini

# Episode 04 - Talk is Cheap, show me the code!

## Coding Assignment:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with Logo & Nav Items & Cart
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - Use Destructuring & Spread operator
      - `Render` your cards with dynamic data of restaurants
      - Use `Array.map` to render all the restaurants

## [😋 Food App Basic Layout 😍](https://food-app-basic-layout.netlify.app/)



## Namaste React Course by Akshay Saini

# Episode 05 - Let's get Hooked!

## Theory:

- What is the `difference` between `Named export`, `Default export`, and `* as export`?
- What are `React Hooks`?
- Why do we need `useState Hook`?

## Code:

- `Clean up` your code.
- Create a `Folder Structure` for your app.
- Make `different files` for each Component.
- Create a `config file`.
- Use all types of `import and export`.
- Create a `Restaurant Filter button`
- Use `useState` to create a variable and `bind` it to the `Restaurant Filter Button`.
- Try to make your `Filter Button Work`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)








## Namaste React Course by Akshay Saini

# Episode 06 - Exploring the world

## Theory Assignment:

- What is `Microservice`?
- What is `Monolith architecture`?
- What is the `difference` between `Monolith and Microservice?
- Why do we need a `useEffect Hook`?
- What is `Optional Chaining`?
- What is `Shimmer UI`?
- What is the `difference` between `JS expression and JS statement`?
- What is `Conditional Rendering`? explain with a code example.
- What is `CORS`?
- What is `async and await`?
- What is the use of `const json = await data.json()`; in `getRestaurants()`?

## Coding Assignment:

- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when `data is not loaded`.
- `Render your UI` with `actual API data`.
- Make `Search functionality` work.
- Make a `Login Logout` button that `toggles with a state`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)






## Namaste React Course by Akshay Saini

# Episode 07 - Finding the Path

## Theory Assignment:

- What are various ways to `add images` into our App? Explain with `code examples`.
- What would happen if we do `console.log(useState())`?
- How will `useEffect` behave if we `don't add` a `dependency array`?
- What is `SPA`?
- What is the `difference` between `Client Side Routing` and `Server Side Routing`?

## Coding Assignment:

- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)







## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Theory Assignment:

- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?

## Coding Assignment:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)




/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * - Cart
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */




## Redux Toolkit

Install @reduxjs/toolkit and react-redux
```
npm install @reduxjs/toolkit react-redux
Build our store 
Connect our store to our app
Slice (cartslice)
Dispatch (action)
Selector 

```









