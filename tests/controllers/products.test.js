const build = require('../helper')

describe('#controllers', () => {
  const app = build()

  it('#products should find product by sku', async () => {
    // given
    const sku = '102030'

    // when
    const res = await app.inject({
      url: `/v1/products/by-sku/${sku}`
    })

    // then
    expect(res.json()).toEqual({
      sku: '102030',
      name: 'GoPro Hero9 5k',
      image: 'https://http2.mlstatic.com/D_Q_NP_953917-MLA51045674653_082022-P.webp'
    })
  })

  it('#products should get product not found by unknown sku', async () => {
    // given
    const sku = 'unknown'

    // when
    const res = await app.inject({
      url: `/v1/products/by-sku/${sku}`
    })

    // then
    expect(res.statusCode).toEqual(404)
    expect(res.json()).toEqual({
      message: 'product not found'
    })
  })

  it('#products should find all', async () => {
    // when
    const res = await app.inject({
      url: '/v1/products/list'
    })

    // then
    expect(res.json()).toEqual([
      {
        sku: '102030',
        name: 'GoPro Hero9 5k',
        image: 'https://http2.mlstatic.com/D_Q_NP_953917-MLA51045674653_082022-P.webp'
      },
      {
        sku: '203040',
        name: 'Furadeira a Bateria Wap',
        image: 'https://http2.mlstatic.com/D_Q_NP_794009-MLA50180933757_062022-P.webp'
      }
    ])
  })
})
