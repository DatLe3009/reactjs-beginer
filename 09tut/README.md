# Chapter9: Controlled Component Inputs

## How to use localStorage (key, value) in browser

## Default behavior of a form submission

  By default, when a form is submitted in React, the page refreshes, resulting in the loss of the current application state.

  To prevent the default form submission behavior in React, you can use the preventDefault() method of the event object. This method prevents the default action associated with the event from occurring.

## The Complete Guide to useRef() and Refs in React

[link](https://dmitripavlutin.com/react-useref/)

## npm

- move `react-icons` from devDependencies to dependencies (production):  
  
  `npm i react-icons --save-prod`

## Process (continue project 08tut)

### step1: redundancy 

- in /src/LineItem.js
  
  delete key= {item.id} because ItemList.js had key = {item.id}.

### step2: Create Add Item

- in /src
  
  Create AddItem.js

### step3: use `index.css` from [author](https://www.youtube.com/watch?v=RVFAyFWO4go&t=1092s)

### step4: view props from components in browser

### step5: prevent default of submit, create new functions

- in /src/App.js
  
  Adjust function handeSubmit() : add e.preventDefault()

  Create function setAndSaveItems() and addItem()

  Change useState() of items

### step6: Create Search Item

- in /src

  Create SearchItem.js

### step7: fix focus of Additem. Button is still focus? 

- in /src/Additem.js:

  Add `useRef`
  

