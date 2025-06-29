# React Learning Notes

---

## 🧠 Day 1 - The First Spark

### 🔧 Coding Tasks:

- Install necessary tools:
  - `VS Code`
  - `Chrome`
  - `Chrome Extensions`
- Create a new `Git Repository`
- Build Hello World:
  - Using `HTML`
  - Using `JavaScript DOM`
  - Using `React` via:
    - `CDN Links`
    - `React.createElement`
    - `Nested Elements`
    - `root.render` usage

---

## 🚀 Day 2 - Kickstarting the Engine

### 🔧 Setup with Parcel:

- Initialize `npm`
- Install `react` and `react-dom`
- Remove old CDN links
- Install and configure `Parcel`
- Run project with `parcel`:
  - Add `"start"` and `"build"` scripts
- Add `.gitignore`
- Add `browserslist` for prod
- Build a production version using `parcel build`

---

## 🧱 Day 3 - Foundation Blocks

### 🧪 Coding Assignments:

- Create nested header using `React.createElement`:
  - (h1, h2, h3 inside `div.title`)
- Create same structure using `JSX`
- Build a functional component using JSX
- Pass attributes in JSX
- Component Composition (Component inside Component)
- Difference between:
  - `{TitleComponent}`
  - `{<TitleComponent />}`
  - `{<TitleComponent></TitleComponent>}`
- Create `Header Component`:
  - Left: Logo
  - Middle: Search Bar
  - Right: User Icon
  - Add CSS styling

### 🔗 References:

- [Babel](https://babeljs.io)
- [HTML Script Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)

### ✅ Demo:

- [Header Component Demo](https://header-assignment.netlify.app/)

---

## 🍽️ Day 4 - Building the Baseplate

### 🔧 Food App Layout:

- Build a `Food Ordering App`:
  - Decide app name
  - Create `AppLayout`
  - `Header` with Logo, Nav, Cart
  - `Body` component:
    - `RestaurantList`
    - `RestaurantCard`:
      - Use static data
      - Convert to dynamic via `props`, destructuring
      - Render using `Array.map()`



- [Food App Layout](https://food-app-basic-layout.netlify.app/)

---

## 🧲 Day 5 - Getting Hooked

### 🧠 Theory:

- Export types: `Named`, `Default`, `* as`
- What are `React Hooks`?
- Why `useState` is used?

### 🔧 Coding:

- Clean code structure
- Move components to separate files
- Create a `config.js`
- Try all import/export types
- Add filter button for restaurants
- Use `useState` to control button

---

## 🌍 Day 6 - Journey Through Effects

### 🧠 Theory Assignments:

- What is `Microservice`?
- What is `Monolith`?
- Monolith vs Microservice
- What is `useEffect`?
- What is `Optional Chaining`?
- What is `Shimmer UI`?
- Difference between `JS Expression` vs `JS Statement`
- Explain `Conditional Rendering` (with example)
- What is `CORS`?
- What is `async/await`?
- Why use `await data.json()`?

### 🔧 Coding:

- Play with `useEffect` (log order)
- Try different `dependency arrays`
- Use `debugger` in render/useEffect
- Call real API using fetch
- Handle fetch errors
- Show shimmer UI when loading
- Render UI with API data
- Add search functionality
- Create login/logout button via state

---

## 🧭 Day 7 - Routing the Right Way

### 🧠 Theory:

- How to add images in React (code examples)
- What happens on `console.log(useState())`?
- Behavior of `useEffect` without deps
- What is `SPA`?
- Difference: `Client-side` vs `Server-side` routing

### 🔧 Coding:

- Add shimmer without external library
- Install `react-router-dom`
- Create `appRouter`:
  - `Home`, `About`, `Contact` (nested routes)
- Add `Error page`
- Create dynamic restaurant route (using `params`)
- (Optional): Add Login Page using `Formik`

### 🔗 References:

- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)

---

## 🏛️ Day 8 - Going Classy

### 🧠 Theory:

- Lifecycle order in class components
- Use of `componentDidMount`, `componentWillUnmount`
- Why use `super(props)` in constructor?
- Why `useEffect` callback shouldn’t be async?

### 🔧 Coding:

- Build `class-based` parent & child components
  - Pass props
  - Add constructor + state
  - Update state using `this.setState`
  - Handle multiple state vars
  - Log lifecycle methods
- Add `setInterval` in `componentDidMount`
  - Cleanup using `clearInterval`

---

## 📦 App Component Structure

```txt
App
├── Header
│   ├── Logo
│   ├── Nav Items
│   └── Cart
├── Body
│   ├── Search Bar
│   └── Restaurant Container
│       └── Restaurant Card
│           ├── Image
│           ├── Name, Rating, Cuisine
│           └── Delivery Time
└── Footer
    ├── Copyright
    ├── Links
    ├── Address
    └── Contact




## ⚙️ Day 9 - Performance & Splitting

### 🧠 Theory:
- Single Responsibility Principle
- Code Splitting (lazy loading components)
- `React.lazy()` and `<Suspense>`
- Creating Custom Hooks for modular logic :contentReference[oaicite:1]{index=1}

### 🔧 Coding:
- Split large components using `React.lazy()`
- Wrap lazy components with `<Suspense fallback={...}>`
- Create a custom hook, e.g., `useOnlineStatus()`
- Refactor fetch logic into hooks

---

## 🎨 Day 10 - UI Styling Essentials

### 🧠 Theory:
- Styling methods: CSS, SASS/SCSS, styled-components, external UI libs
- Pros & Cons of Tailwind CSS :contentReference[oaicite:2]{index=2}
- Understanding `tailwind.config.js` keys: `content`, `theme`, `plugins` :contentReference[oaicite:3]{index=3}

### 🔧 Coding:
- Install Tailwind CSS
- Build responsive UI using Tailwind
- Use utility-first classes in JSX

---

## 🔄 Day 11 - Data is the New Oil

### 🧠 Theory:
- Higher Order Components (HOC)
- Controlled vs Uncontrolled components
- Lifting state and Prop drilling
- Using Context API for state sharing

### 🔧 Coding:
- Build a HOC for logging or error boundary
- Transform a form component into controlled
- Lift shared state to parent
- Use `React.createContext()` and `useContext()`

---

## 🛒 Day 12 - Building Our Store

### 🧠 Theory:
- Redux Toolkit setup
- `createSlice`, store configuration, React-Redux integration

### 🔧 Coding:
- Install Redux Toolkit & React-Redux
- Create `cartSlice` with actions and reducer
- Wrap app with `<Provider store={store}>`
- Dispatch and select cart state in components

---

## 🧪 Day 13 - Testing Time

### 🧠 Theory:
- Testing strategies: unit, integration, end-to-end
- Using Jest and React Testing Library

### 🔧 Coding:
- Install testing libs (`jest`, `@testing-library/react`)
- Write unit test for a utility function
- Write integration test for a component with interaction

### 📜 Example Test:
```js
import { render, fireEvent } from '@testing-library/react';
import RestaurantCard from '../components/RestaurantCard';

test('renders restaurant info and handles click', () => {
  const res = { name: 'Pizza Place', rating: 4.5 };
  const { getByText } = render(<RestaurantCard data={res} />);
  expect(getByText(/Pizza Place/)).toBeInTheDocument();
});
