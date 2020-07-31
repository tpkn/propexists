# propexists  [![npm Package](https://img.shields.io/npm/v/propexists.svg)](https://www.npmjs.org/package/propexists)
Quick check if a nested property exists



## API
```javascript
propexists(obj, property, options)
```


### obj
**Type**: _Object_   
Target object


### property
**Type**: _String_ | _Array_   
Property path string `'a.b.c.d'` or an array `['a', 'b', 'c', 'd']`



### options.value
**Type**: _Boolean_   
If `true`, the property's value will be returned



### options.fallback
**Type**: _Any_   
Return this value if the property is not found


### @return
**Type**: _Any_ | _undefined_   



## Usage
```javascript
const propexists = require('propexists');

var obj = {
   a: 1,
   b: {
      f: null
      d: {
         e: 100
      },
   }
};

propexists(obj, 'x')     // => undefined
propexists(obj, 'a')     // => true
propexists(obj, 'b.f')   // => undefined
propexists(obj, 'b.d.e') // => true

// Or using array of properties
propexists(obj, [ 'b', 'd', 'e' ]) // => true

// Return the value if prop exists
propexists(obj, 'b.d.e', { value: true }) // => 100

// Fallback value
propexists(obj, 'b.d.s.m', { value: true, fallback: 'no' }) // => no
```



