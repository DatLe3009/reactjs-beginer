# Chapter17: React Router

## Process (continue project 16tut)

## npm

- [react-router-dom] : update v6

Switch -> Routes

[useHistory -> navigate](https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom)

- [date-fns](https://www.npmjs.com/package/date-fns)

### step1: dowload `index.js` from author

### step2: Continue  `Header.js` with `prop = {title}`

### step3: Continue `Nav.js` with `props = {search, setSearch}`

### step4: Continue `Home`

- `Home.js` with `prop = {posts}`

- Create `Feed.js`, child of `Home`, with `prop = {posts}`

    note: <code><Post key={post.id} post={post} /></code>

    it must have a `key`.

- Create `Post.js`, child of `Feed`, with `prop = {post}`

    It must have <code><Link to={`/post/${post.id}`}></Link></code>

### step5: Continue `PostPage.js` 

- It must have <code><Link to='/'>Visit our HomePage</Link></code>

- Learn `useParams` from `react-router-dom`

    <code>const { id } = useParams();</code>

    `id` is a param in url  `/post/:id` 

### step6: Continue `NewPost.js` with `props = { handleSubmit, postTitle, setPostTitle, postBody, setPostBody }`

### step7: Continue `App.js` with `handleSubmit()`

    datetime? ->   `npm i date-fns -S`

### step8: Continue `App.js` with `Search`

    Home: display `post` -> `searchResults`

## Error : posts.filter is not a function

solve: `handleSubmit()`

<code>const allPosts = { ...posts, newPost };</code>

-> <code>const allPosts = [ ...posts, newPost ];</code>

## Step9: Continue `Missing.js` 

It must have <code><Link to='/'>Visit our HomePage</Link></code>

### step10: Continue `Footer.js`

### step11: Continue `About.js`