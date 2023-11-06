# Chapter11:  useEffect Hook

## Roadmap - Hooks - Basic Hooks[useEffect]

- [Roadmap](https://roadmap.sh/react)    ->    Hooks - Basic Hooks[useEffect]

## Process (continue project tut09)

### step1: use `useEffect`for update

- in /src/App.js: Remove function setAndSaveItems() and replace with

<pre><code>
useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])
</code></pre>

    


