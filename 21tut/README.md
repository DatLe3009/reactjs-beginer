# Chapter21:  Context API & useContext Hook

## 

Solution for props, reduce code

### Visit the following resources to learn more:

[Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

[How to create a custom Hook (1)](https://www.freecodecamp.org/news/how-to-create-react-hooks/)

[How to create a custom Hook (2) followed by Examples](https://www.robinwieruch.de/react-custom-hook/)

### Documentation:

[Rules of Hooks](https://legacy.reactjs.org/docs/hooks-rules.html)

[react-hooks](https://nikgraf.github.io/react-hooks)

## npm

[json-server](https://www.npmjs.com/package/json-server?activeTab=readme)

* [react-use](https://www.npmjs.com/package/react-use)

## Process (continue project 20tut)

### step1: run `json-server`

- run `npx json-server -p 3500 -w data/db.json`

### step2: Create `/src/context/DataContext.js`

-> aim to simple `App.js`, 

- use `createContext` from `react` , reduce to use props in components, create context

- use `useContext` from `react` , in components, recives props easy from `createContext`, don't have props from `App.js`


## Error

- setPosts is not a function -> Check `DataContext.js` in return

