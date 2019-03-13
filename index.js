'use strict'

/**
 * exception
 * @param {String | Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * */
class Exceptions {
  constructor(err, req, res, next) {
    this.err = err
    this.req = req
    this.res = res
    this.next = next
    this.init()
  }

  init() {
    // TODO:
  }

  renderPage() {
    // TODO:
  }
}

module.exports = function() {
  return function(err, req, res, next) {
    new Exceptions(err, req, res, next)
  }
}
