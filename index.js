module.exports = (object, _interface) => {
  if (object == null) throw new TypeError('Object is undefined')
  Object.getOwnPropertyNames(_interface.prototype).forEach(method => {
    if (object[method] === _interface.prototype[method]) {
      throw new TypeError(`Method ${method} must be implemented`)
    }
  })
  return object
}
