
# SCSS Features Showcase

This project demonstrates various features of SCSS (Sass) through a simple styling example.

## Features Implemented

### 1. Sass Variables
Sass variables allow you to store values that you can reuse throughout your styles. In this project, we define color variables for primary, secondary, and danger states:
```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$danger-color: #e74c3b;
```

### 2. Nesting
Nesting allows you to structure your CSS in a way that reflects the HTML hierarchy. This makes it easier to read and maintain:
```scss
.container {
    .title {
        color: $primary-color;
    }
}
```

### 3. Mixins
Mixins are reusable pieces of code that can be included in other styles. This project includes a mixin for box styles:
```scss
@mixin box-style($h) {
    border: 2px solid black;
    padding: 15px;
    border-radius: 5px;
    height: $h;
}
```

### 4. Conditional Logic
You can use `@if` and `@else` to apply styles based on conditions. For example:
```scss
.box {
    @if $primary-color {
        background-color: $primary-color;
    } @else {
        background-color: $secondary-color;
    }
}
```

### 5. Sass Loops
Sass provides looping constructs like `@for` and `@each` to create styles dynamically:
```scss
@for $i from 1 through 3 {
    .box-#{i} {
        width: 100px * $i;
    }
}
```

### 6. While Loop
The `@while` directive allows you to apply styles until a condition is met:
```scss
$count: 1;
@while $count <= 3 {
    .item-#{$count} {
        width: 50px * $count;
    }
    $count: $count + 1;
}
```

### 7. Partials
Partials allow you to split your styles into smaller, manageable chunks. This is not implemented in this example but is a recommended practice for larger projects.

### 8. Extend
The `@extend` directive allows one selector to inherit the styles of another:
```scss
.box.secondary {
    @extend .box;
    border-color: $secondary-color;
}
```

## Conclusion
This project showcases the power and flexibility of SCSS, making it easier to write and maintain complex stylesheets. By utilizing these features, you can enhance your CSS workflow and improve code organization.
