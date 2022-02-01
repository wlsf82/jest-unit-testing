module.exports = function(items) {
  if (!items.length) return 0
  if (items.length === 1) {
    const { precoUnitario, quantidadeVendida } = items[0]
    return precoUnitario * quantidadeVendida * .05
  }
  if (items.length > 1) {
    const prices = items.map(item => {
      const { precoUnitario, quantidadeVendida } = item
      return precoUnitario * quantidadeVendida
    })

    const totalPrice = prices.reduce((a, b) => a + b)

    return totalPrice * .05
  }

}
