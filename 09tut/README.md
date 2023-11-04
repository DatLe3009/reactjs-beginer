# Chapter9: Controlled Component Inputs
-package.json: move npm (react-icons) from devDependencies to dependencies (production):

npm i react-icons --save-prod

- redundancy LineItem.js : delete key= {item.id} because ItemList.js had key = {item.id}.

- Create AddItem.js

- Copy index.css from youtube of author

# View props from components in browser

- View handeSubmit in console : add e.preventDefault() in handeSubmit() in App.js

Default of submit : reload page => do not see console.log in console

- App.js: Create function setAndSaveItems() and addItem(), Change useState() of items

Learn how to use localStorage (key, value) in browser

- Create SearchItem.js => change App.js, change Content

- Additem.js: fix focus of Additem. Button is still focus? 

Learn {useRef} from react

