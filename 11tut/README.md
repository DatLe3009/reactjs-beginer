# Chapter11:  useEffect Hook

## Roadmap - Hooks - Basic Hooks[useEffect]

- [Roadmap](https://roadmap.sh/react)    ->    Hooks - Basic Hooks[useEffect]

## Process

### step1: use `useEffect`for update

- in /src/App.js:

<pre><code>
useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])
</code></pre>

### step2: delete file not necessary at the moment and adjust file

- in /src:

    Delete `App.test.js` , `reportWebVitals.js` , `setupTests.js`

    Adjust `index.js` : delete `reportWebVitals`

### step3: test

- in /src:

    Adjust `App.js`: run `npm start` to view it in your browser
    


