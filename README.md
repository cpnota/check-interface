This is an npm module for checking that an object implements an interface defined by an es6 class.
This is useful for documenting interfaces separately from their implementations, for example with jsdoc.

# Installation

`npm install --save check-interface`

# Usage

```javascript
const checkInterface = require('check-interface')

class MyInterface {
  constructor() {
    checkInterface(this, MyInterface)
  }

  /**
   * Documentation for MethodA
   */
  MethodA() {}

  /**
   * Documentation for MethodB
   */
  MethodB() {}
}

class MyImpl extends MyInterface {
  constructor() {
    super()
    this.member = 'stuff'
  }

  MethodA() {
    /* implementation of MethodA */
  }

  MethodB() {
    /* implementation of MethodB */
  }
}

class MyBadImpl extends MyInterface {
  constructor() {
    super()
  }

  MethodA() {
    /* implementation of MethodA */
  }

  // MethodB not implemented!
}

const myImpl = new MyImpl()
console.log('worked!')

/* throws an error if the interface is not implemented */
try {
  const myBadImpl = new MyBadImpl()
} catch (error) {
  console.error('threw an error!')
}

/* can also use for type-checks externally */
const myImpl2 = checkInterface(myImpl, MyInterface)
/* checkInterface returns the object passed in */
assert(myImpl2 === myImpl)
console.log('worked!')

/* this is useful for initializing variables in constructors */
class OtherClass {
  constructor(object) {
    this.object = checkInterface(object, MyInterface)
  }
}
```
