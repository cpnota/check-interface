module.exports = (object, _interface) => {
  Object.getOwnPropertyNames(_interface.prototype).forEach(method => {
    if (object[method] === _interface.prototype[method]) {
      throw new Error(`Method ${method} must be implemented`)
    }
  })
}
