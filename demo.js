const checkInterface = require('./')
const assert = require('assert')

class MyInterface {
  constructor() {
    checkInterface(this, MyInterface)
  }

  /**
   * Documentation for MethodA
   */
  MethodA() {}

  /**
   * Documentation for MethodA
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

