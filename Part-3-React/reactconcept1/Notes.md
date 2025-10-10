# REACT

---

1. What are components in react?
   => Components are independent, reusable UI pieces of code - it should return jsx

```
function Welcome() {
    return <div>JSX</div>;
}

```

2. What is JSX?
   => Javascript XML. - its a syntax extension that allows you to write HTML like code inside JS.

```
function Welcome({ name }) {
    return <div>HELLO,  {name} </div>;
}

function App() {
    return <Welcom  name="CAP"/>;
}


```

3. What is the virtual DOM?
   => lightweight copy of real DOM. - react updates the virtual dom first, then efficently updates only the changes part in real dom.

4. what are props?
   => - Props are -> read only input passed from the parent to child components.

5. What is the difference between props and state?
   =>

props:

- props passed from the parent
- immutable
- external data

state:

- managed withing component
- mutable
- internal data

6. useState?
   => it adds local state to a function component
   const [count, setCount] = useState();

7. useEffect?
   => it perform the side effect such as data fetching, DOM manupulation, subscriptions.

8.

Context

1. Create the context using `createContext()`
2. Create the provider and
3. provide the data using created context `.Provider`
4. wrap the application using contextProvider
5. use the context using `useContext`



Router-dom

1. Wrap the application using `BrowserRouter`
2. Create the routes using `Routes` and `Route`
3. make the link of your page using `Link`



1. Local storage cart system
2. Infinite scrolling 
3. Chart rendering with API data - jsonplaceholder api
4. Protected routes