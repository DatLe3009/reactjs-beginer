# Chapter16: React Router

## Extensions 
    
ES7+ React/Redux/React-Native snippets 

## Extensions for Chrome

React Developer Tools

## Settings
 
`File` -> `Preperences` -> `Settings` 
    
`Ctrl` + `,`

### Add Item in Emmet

`emmet` -> `Extensions` -> `Emmet: includes languages` -> `Add item` {item:javascript, value:javascriptreact}

## Free Fake REST API

[JSONPlaceholder](https://jsonplaceholder.typicode.com)

## npm

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

[tutorial react-router-dom](https://reactrouter.com/en/main/start/tutorial)
### warning

There was a fairly decent change between versions 5 and 6 of react-router-dom. It appears that the Udemy course/tutorial is using version 5 where all you needed was a Router to provide a routing context and Route components just needed to be rendered within this context. In version 6, however, the Route components now need to be rendered within a Routes component (which is an upgrade from the v5 Switch component).    

## Process

### step1: create react app

run `npx create-react-app 16tut`

### step2: delete file not necessary at the moment and adjust file

- in /src:

    Delete `App.test.js` , `reportWebVitals.js` , `setupTests.js`, `logo.svg`, `App.css`

    Adjust `index.js` : delete `reportWebVitals`

    Adjust `App.js` : delete import

### step3: install npm `react-router-dom` -S

### step4: Adjust `index.js`

- warning: [react-router-dom] change from v5 to v6

### step5: create new files

- warning: [react-router-dom] change from v5 to v6

    `Header.js`

    `Nav.js`

    `Home.js`

    `NewPost.js`

    `PostPage.js`

    `About.js`

    `Missing.js`

    `Footer.js`

### step6: React Router
    
## Error: `history.ts:501 You rendered descendant <Routes> (or called `useRoutes()`) at "/" (under <Route path="/">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.`

`Please change the parent <Route path="/"> to <Route path="*">.`

- slove: in `index.js`, `change the parent <Route path="/"> to <Route path="*">.`
