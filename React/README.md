## Create a simple JSX element
One important thing to know about nested JSX is that it must return a single element.
This one parent element would wrap all of the other levels of nested elements.
```jsx
const JSX = <h1>Hello JSX!</h1>;
```

## Create a Complex JSX Element
```jsx
const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>;  
```

## Add Comments in JSX
```jsx
ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

## Define an HTML Class in JSX
```jsx
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
```

## Learn About Self-Closing JSX Tags
```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
```

## Create a Stateless Functional Component
```jsx
const MyComponent = function() {
  // Change code below this line
return(
    <div>Completed challenge!</div>
);
  // Change code above this line
}
```

## Create a React Component
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
  }
};
```

## Create a Component with Composition
```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

        <ChildComponent/>

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

```



