const checkInterface = require('./')

class Interface {
  constructor() {
    checkInterface(this, Interface)
  }

  MethodA() {}

  MethodB() {}

  MethodC() {}
}

const methods = ['MethodA', 'MethodB', 'MethodC']

test('Allows proper instansiation of subclass', () => {
  class Impl extends Interface {}
  methods.forEach(method => (Impl.prototype[method] = () => {}))
  expect(() => new Impl()).not.toThrow()
})

test('Returns the object on successful check', () => {
  class Impl extends Interface {}
  methods.forEach(method => (Impl.prototype[method] = () => {}))
  const impl = new Impl()
  expect(checkInterface(impl, Interface)).toEqual(impl)
})

test(`Throws an error if user attempts to instansiate ${
  Interface.name
} directly`, () => {
  expect(() => new Interface()).toThrow('must be implemented')
})

methods.forEach(method => {
  test(`Throws an error if subclass is missing "${method}"`, () => {
    class Impl extends Interface {}
    methods
      .filter(m => m !== method)
      .forEach(method => (Impl.prototype[method] = () => {}))
    expect(() => new Impl()).toThrow(method)
  })
})

test('Throws an error if object is undefined', () => {
  class Impl extends Interface {}
  expect(() => checkInterface(undefined, Impl)).toThrow('undefined')
})
