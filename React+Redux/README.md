# React + Redux

```mermaid
graph LR
    A[Component Action e.g. button click] --> B{Action Creator};
    B --> C[Redux Action e.g. FETCH_DATA_REQUEST];
    C --> D[Redux Middleware e.g. Redux Thunk, Redux Saga];
    D --> E[API Call e.g. fetch, axios];
    E -- Success --> F[Redux Action e.g. FETCH_DATA_SUCCESS with payload];
    E -- Error --> G[Redux Action e.g. FETCH_DATA_FAILURE with error];
    F --> H[Redux Reducer];
    G --> H;
    H --> I[Redux Store];
    I --> J[Component via connect/useSelector];
    J --> K[Component Re-renders with updated data];

    subgraph " "
        direction LR
        D -. Asynchronous Operation .-> E
    end

style D fill:#CE93D8,stroke:#90A4AE,stroke-width:2px  /* Light Purple */
style H fill:#81D4FA,stroke:#90A4AE,stroke-width:2px  /* Light Blue */
style I fill:#A5D6A7,stroke:#90A4AE,stroke-width:2px  /* Light Green */
style J fill:#FFB74D,stroke:#90A4AE,stroke-width:2px  /* Light Orange */
```

## Getting Started with React Redux
```jsx
 class DisplayMessages extends React.Component {
  // Change code below this line
constructor(props){
  super(props);
  this.state = {input: "", messages: []}
}

  // Change code above this line
  render() {
    return <div />
  }
};
```

## Manage State locally first
This adds a new input to the created array whenever submit button is clicked.
```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
     this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
  }
 
  
  // Add handleChange() and submitMessage() methods here
handleChange(event){
 this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
}

submitMessage(event){
  event.preventDefault()
    this.setState({
      input: '',
      submit: this.state.input,
      messages: [...this.state.messages, this.state.input]
    });
}


  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
<input
   value={this.state.input}
            onChange={this.handleChange.bind(this)}/>
             <button type='submit' onClick={this.submitMessage.bind(this)}>Add message</button>

  <ul>
   {this.state.messages.map((i,x)=>{
       console.log(i, " ", x);
       return <li key={i}>{x}</li>
     })}
        </ul>
      
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

## Extract State Logic to Redux
```jsx
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);
```

## Use Provider to Connect Redux to React
```jsx
const Provider = ReactRedux.Provider;
```

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render(){
  return(
  // Render the Provider below this line
<Provider store={store}>
  <DisplayMessages/>
</Provider>

  // Change code above this line
  )
  }
};
```

## Map State to Props
```jsx
const state = [];

// change code below this line
const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}
```

## Map Dispatch to Props
```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch)=>{
     return {
        submitNewMessage: (message)=>{
            dispatch(addMessage(message))
        }
     }
}
```

## Connect Redux to React
```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)
```

## Connect Redux to the Messages App
```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps,mapDispatchToProps) (Presentational);


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
   render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
      );
  }
};
```

## Extract Local State into Redux
Now that Redux is connected, you need to extract the state management out of the Presentational component and into Redux. Currently, you have Redux connected, but you are handling the state locally within the Presentational component.
The app will continue to function the same, except Redux manages the state. 
```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    
    // Remove property 'messages' from Presentational's local state
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
  
    // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
    // meanwhile, remove the 'messages' property from the object returned by this.setState().
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
           {/* The messages state is mapped to Presentational's props; therefore, when rendering,
               you should access the messages state through props, instead of Presentational's
               local state. */}
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
