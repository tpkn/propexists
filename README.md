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
If `true`, the property value will be returned


### @return
**Type**: _Boolean_   



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

propexists(obj, 'x')     // => false
propexists(obj, 'a')     // => true
propexists(obj, 'b.f')   // => false
propexists(obj, 'b.d.e') // => true

// Return the value if prop exists
propexists(obj, 'b.d.e', { value: true }) // => 0

// Or using array of properties
propexists(obj, [ 'b', 'd', 'e' ]) // => true
```



