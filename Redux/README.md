## Create a Redux Store
Redux is a state management framework that can be used with a number of different web technologies, including React.
In Redux, there is a single state object that's responsible for the entire state of your application. <br>
This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. 

**Most important principle**: the Redux store is the single source of truth when it comes to application state.
```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);
```

## Get State from the Redux Store
```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```

## Define a Redux Action
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred.
```js
// Define an action here:
const action = {type:'LOGIN'};
```

## Define an Action Creator
```jsx
function actionCreator() {
  return action;
}
```

## Dispatch an action event
dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
```

## Handle an action in the store
```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
if(action.type == 'LOGIN'){
    return {
      login: true
    };
}else{
  return state;
}
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

## Use switch statement to handle multiple actions
```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
switch(action.type){
  case "LOGIN":
      return {
        authenticated: true
      };

    case "LOGOUT":
      return {
        authenticated: false
      };

    default:
      return defaultState;
  }
}
  // Change code above this line

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

## Use const for Action Types
```jsx


const defaultState = {
  authenticated: false
};
const LOGIN =  'LOGIN';
const LOGOUT =  'LOGOUT';

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: // Edited 
      return {
        authenticated: true
      }
    case LOGOUT: // Edited 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN // Edited
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT // Edited
  }
};
```

## Register a Store Listener
```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}; 

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(()=>{
  count+=1;
});
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

## Combine Multiple Reducers
```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here
Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);
```
