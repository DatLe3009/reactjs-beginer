# Chapter8: Props & Prop Drilling
- terminology: 
Props and prop drilling are terms commonly used in the context of software development, particularly in the realm of React.js and other component-based frameworks.

In React, a prop (short for property) is a way to pass data from a parent component to its child component. Props are used to make components reusable and to enable communication between different parts of an application. When a parent component renders a child component, it can pass data to the child component through props.

Prop drilling refers to the process of passing a prop through multiple layers of intermediate components in order to get it to a deeply nested component that actually needs the prop. This can happen when a component needs to pass data to a distant descendant component, but it has to go through several intermediary components in the component tree to reach the target component.

While prop drilling can be a valid approach in some cases, it can become cumbersome and lead to less maintainable code when there are many levels of nesting. It can also make it difficult to refactor components or change the structure of the component tree without having to update the prop passing in multiple places.

To address the issues of prop drilling, there are alternative patterns and libraries available. One popular approach is to use state management libraries like Redux or MobX, which provide a centralized store where data can be stored and accessed by any component in the application without the need for prop drilling. Another approach is to use React context, which allows you to create a "provider" component that holds the shared data and make it accessible to any component in the component tree without the need to pass props through intermediate components.

- Header.js vs App.js, Content.js vs App.js, Footer.js vs App.js : props, defaultProps

- Create ItemList.js : aim to replace item list in Content.js

- Creat LineItem.js : aim to replace line item in ItemList.js


- Error browsers: Each child in a list should have a unique "key" prop.Check the render method of `ItemList`. 

ItemList.js : add  "key={item.id}"


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
