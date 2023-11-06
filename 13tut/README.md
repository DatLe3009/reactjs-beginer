# Chapter12: Fetch API Data

## npm

[json-server](https://www.npmjs.com/package/json-server?activeTab=readme)

## Process (continue project 12tut)

### step1: run `json-server` and `npm start`

- run `npm start`

- run `npx json-server -p 3500 -w data/db.json`

### step2: use `fetch()`

- in /src/App.js: Replace useEffect() with

<pre><code>
const API_URL = 'http://localhost:3500/items';
useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack)
      }
    }

    (async () => await fetchItems())();
}, [])
</code></pre>

- Test change API_URL to check error in browser

### step3: Create `fecthError` and use it

- in /src/App.js

<code> const [fetchError, setFetchError] = useState(null);</code>

### step4: use function `setTimeout()` to decribe loading...

### step5: Create `isLoading` and use it

- in /src/App.js

<code> const [isLoading, setIsLoading] = useState(true);</code>




