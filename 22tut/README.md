# Chapter22:  Easy Peasy Redux

## Easy Peasy Redux

[easy-peasy](https://easy-peasy.vercel.app/docs/introduction/)

## npm

[json-server](https://www.npmjs.com/package/json-server?activeTab=readme)

[react-use](https://www.npmjs.com/package/react-use)

[easy-peasy](https://www.npmjs.com/package/easy-peasy)

## Process (continue project 20tut)

### step1: Clean package don't use.

- run `npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals`

### step2: install npm `easy-peasy`

### step3: run `json-server`

- run `npx json-server -p 3500 -w data/db.json`

- run `npm start`

### step4: Use `{CreateStore, useStoreActions}` from `easy-peasy` instead of using `{createContext, useContext}` from `react`

#### 4.1: Create `src/store.js` with using `{CreateStore}` from `easy-peasy`

#### 4.2: in `src/index.js`

- import `{StoreProvider}` from `easy-peasy`

- import `store` from `./store`

#### 4.3: in `src/App.js`

- Delete `{DataProvider}` from `./context/DataContext`: we used to `{StoreProvider}` instead (4.2)

- Transform `useAxiosFetch` from `./context/DataContext` to `App.js`

- import `{useStoreActions}` from `easy-peasy`

#### 4.4: in `src/Nav.js`,`src/Home.js`, `src/PostPage.js`, `src/NewPost.js` and `src/EditPost.js`

- Delete `{useContext}` from `react` and `DataContext` from `./context/DataContext` and replace to use `import { useStoreState, useStoreActions } from 'easy-peasy'` instead;

#### 4.5: delete `src/context/DataContext`

#### 4.6: use `postCount` in `Footer.js` 

## Error: From submission canceled because the form is not connected

slove -> `EditPost.js` -> button: use type = `button` instead of using type = `submit` .








- 













