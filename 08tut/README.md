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
