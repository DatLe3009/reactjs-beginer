# Chapter7: Lists & Keys

## Roadmap - Rendering - Lists and Keys

[Roadmap](https://roadmap.sh/react)    ->    Rendering - Lists and Keys

## Process (continue project tut06)

- Content.js : create default state of lists

View in the browser: Components -> Content -> hooks

# Error : Array.prototype.map() expects a return value from arrow function

Error "{}"
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

    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                            />
                            <label>{item.item}</label>
                            <button>Delete</button>
                        </li>
                    )
                )}

- install react-icons:         npm i react-icons --save   ===  npm i react-icons -D

                                npm i react-icons

In summary, the main difference between the two commands is how the package is saved as a dependency in the package.json file, but the actual installation of the package remains the same.


Documentation: https://www.npmjs.com/package/react-icons

- Content.js : Change button "delete", use "react-icons"

- Copy index.js from youtube author

- Content.js : Create function handleCheck(), handleDelete()

