module.exports = (api, _opts, done) => {
  api.register(require('./health'))
  api.register(require('./v1/products/bySku'))
  api.register(require('./v1/products/listAll'))
  done()
}
