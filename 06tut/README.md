# Chapter6:  useState Hook

## Roadmap - Hooks - Basic Hooks[useState]

[Roadmap](https://roadmap.sh/react)    ->    Hooks - Basic Hooks[useState]

## Process (continue project tut05)

### step1: Use "useState"

- in /src/Content.js:

  Adjust function `handleNameChange()`: use `useState`

### step2: Test

- in /src/Content.js:

  Adjust function `handleClick()`: run `npm start` to view it in your brower

## Error

<pre><code>
const handleClick = () => {

        setCount(count + 1)

        setCount(count + 1)
        
        console.log(count)
    }
</code></pre>

it's important to note that state updates in React are asynchronous





