## Create a Redux Store
Redux is a state management framework that can be used with a number of different web technologies, including React.
In Redux, there is a single state object that's responsible for the entire state of your application. <br>
This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. 

Most important principle: the Redux store is the single source of truth when it comes to application state.
```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);
```

