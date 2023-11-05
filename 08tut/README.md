# Chapter8: Props & Prop Drilling

## Roadmap - Components - Components Basics[Props vs State]

## Roadmap - Rendering - Render Props

## Process (continue project tut07)

### step1: use `props` and `defaultProps`

  Apply for `Header.js` , `Content.js` and `Footer.js` with root: `App.js`

### step2: function decomposition

- in /src:
  
  Create ItemList.js : aim to replace item list in Content.js

  Creat LineItem.js : aim to replace line item in ItemList.js


# Error browsers: Each child in a list should have a unique "key" prop.Check the render method of `ItemList`. 

[Slove](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

in src/ItemList.js: 

  add  <code>key={item.id}</code>






