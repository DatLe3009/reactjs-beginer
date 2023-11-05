# Chapter6:  useState Hook
- Content.js :

familar to "useState" (from 'react')

Change fuction "handleNameChange" use "useState" instead.

Change function "handleClick" and view Console in browser

- Error:

`const handleClick = () => {

        setCount(count + 1)

        setCount(count + 1)
        
        console.log(count)
    }
`

In the given code snippet, a function named handleClick is defined. Let's break down what it does:

The setCount(count + 1) line increments the count state variable by 1.

The setCount(count + 1) line again increments the count state variable by 1. This means the count value is incremented twice.

However, it's important to note that state updates in React are asynchronous. When you call the setCount function, React doesn't immediately update the state. 

Instead, it schedules the update and performs it later. This means that consecutive calls to setCount within the same function won't update the state immediately.

The console.log(count) line prints the current value of count to the console. However, the count value logged here will not reflect the incremented value because the state update is not immediate.


