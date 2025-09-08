# 1) What is the difference between var, let, and const?
### Var
<li>Used in older JavaScript.</li> <br>
<li>Works within function scope.</li> <br>
<li>Variables with the same name can be declared again (highly likely to cause bugs).</li>

### Let
<li>Modern ES6 introduced.</li>
<li>Block scope (limited to within {}).</li>
<li>Variables with the same name cannot be declared again.</li>

### Const
<li>Works at block scope.</li>
<li>Once declared, it cannot be changed again (cannot be re-assigned).</li>
<li>But if it is an object or array, the value inside can be changed.</li>

<hr>

# 2) What is the difference between map(), forEach(), and filter()?
### forEach()
<li>Runs a function for each element.</li>
<li>Does not return anything (does not create a new array).</li>

### map()
<li>Runs a function for each element.</li>
<li>Returns a new array. The old array is not changed.</li>

### filter()
<li>Keeps elements according to conditions.</li>
<li>Returns a new first filtered array.</li>

<hr>

# 3) What are arrow functions in ES6?
### Arrow Function (=>) is a shorthand method for writing functions. <br>
### It works even if it is a single line. It does not have its own this, it uses the this of the parent scope. 
```js
const arrow = () => console.log("Hello Programming Hero");
arrow();  // Hello Programming Hero
```
<hr>

# 4) How does destructuring assignment work in ES6?
### Destructuring assignment is a convenient syntax that allows to extract values ​​from an array or object and assign them directly to variables. This makes your code shorter.
<li>If there is no value, then default values ​​can be given.</li>
<li>Values ​​can be extracted from objects inside objects.</li>
<li>Rest operator (...): The remaining values ​​can be stored together in an array or object.</li>

# 5) Explain template literals in ES6. How are they different from string concatenation?
### Template literals are a new feature written with a backtick (`). They let easily write variables, expressions, and even multi-line strings—without any hassle.

```js
const name = "Ashiqur";
const language = "JavaScript";
const message = `Hi! My name is ${name} and I love coding in ${language}.`;
console.log(message);
```
<li>Any valid expression can be placed inside ${}</li>

