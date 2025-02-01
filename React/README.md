## Create a simple JSX element
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
