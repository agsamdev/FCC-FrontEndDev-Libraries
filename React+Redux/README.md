# React + Redux

```mermaid
graph LR
    A[Component Action (e.g., button click)] --> B{Action Creator};
    B --> C[Redux Action (e.g., FETCH_DATA_REQUEST)];
    C --> D[Redux Middleware (e.g., Redux Thunk, Redux Saga)];
    D --> E[API Call (e.g., fetch, axios)];
    E -- Success --> F[Redux Action (e.g., FETCH_DATA_SUCCESS) with payload];
    E -- Error --> G[Redux Action (e.g., FETCH_DATA_FAILURE) with error];
    F --> H[Redux Reducer];
    G --> H;
    H --> I[Redux Store];
    I --> J[Component (via connect/useSelector)];
    J --> K[Component Re-renders with updated data];

    subgraph " "
        direction LR
        D -. Asynchronous Operation .-> E
    end

    style D fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#ccf,stroke:#333,stroke-width:2px
    style I fill:#aaf,stroke:#333,stroke-width:2px
    style J fill:#cff,stroke:#333,stroke-width:2px
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
