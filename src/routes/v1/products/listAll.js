const products = require('../../../controllers/products')
const schema = require('../../../schemas/v1/products/listAll')

module.exports = (api, _opts, done) => {
  const opts = {
    schema,
    handler: products.listAll
  }
  api.get('/list', opts)

  done()
}
