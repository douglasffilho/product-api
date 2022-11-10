const { productsService } = require('../services')

module.exports = {
  async getProductBySku(req, res) {
    const { sku } = req.params

    const product = productsService.getProductBySku(sku)
    if (!product) return res.code(404).send({ message: 'product not found' })

    return res.code(200).send(product)
  },

  async listAll(_req, res) {
    const all = productsService.findAll()

    return res.code(200).send(all)
  }
}
