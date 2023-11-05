# Chapter7: Lists & Keys

## Roadmap - Rendering - Lists and Keys

[Roadmap](https://roadmap.sh/react)    ->    Rendering - Lists and Keys

## npm

   [react-icons](https://www.npmjs.com/package/react-icons)

   ### explain

   npm i react-icons --save   ===  npm i react-icons -D

   npm i react-icons

   In summary, the main difference between the two commands is how the package is saved as a dependency in the package.json file, but the actual installation of the package remains the same.

   `-D` === `--save`: is saved as a dev dependency

   `-S : is saved as a production dependency

## Process (continue project tut06)

### step1: Use `useState` for lists

- in src/Content.js : 

   <code>const [items, setItems] = useState([])</code>

   Create new functions handleCheck() and handleDelete()

### step2: Use `React developer tools` to view hooks

- in the browser:

  `Components` -> `Content` -> `hooks`

### step3: use package `react-icons` 

- in src/Content.js : 
  
  Adjust button `delete` with using "react-icons"

### step4: use `index.css` from [author](https://www.youtube.com/watch?v=RVFAyFWO4go&t=1092s)

# Error : Array.prototype.map() expects a return value from arrow function

Error "{}" -> "()"
<pre><code> 
{items.map((item) => {
   <li className="item" key={item.id}>
      <input
         type="checkbox"
         checked={item.checked}
      />
      <label>{item.item}</label>
      <button>Delete</button>
   </li>
})} 
</code></pre>

<pre><code> 
{items.map((item) => (
   <li className="item" key={item.id}>
      <input
         type="checkbox"
         checked={item.checked}
      />
      <label>{item.item}</label>
      <button>Delete</button>
   </li>
))} 
</code></pre>
