const products = {
  102030: {
    sku: '102030',
    name: 'GoPro Hero9 5k',
    image: 'https://http2.mlstatic.com/D_Q_NP_953917-MLA51045674653_082022-P.webp'
  },
  203040: {
    sku: '203040',
    name: 'Furadeira a Bateria Wap',
    image: 'https://http2.mlstatic.com/D_Q_NP_794009-MLA50180933757_062022-P.webp'
  }
}

module.exports = {
  getProductBySku(sku) {
    return products[sku]
  },

  findAll() {
    return Object.values(products)
  }
}
