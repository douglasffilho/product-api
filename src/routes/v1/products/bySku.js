const products = require('../../../controllers/products')
const schema = require('../../../schemas/v1/products/bySku')

module.exports = (api, _opts, done) => {
  const opts = {
    schema,
    handler: products.getProductBySku
  }
  api.get('/by-sku/:sku', opts)

  done()
}
