module.exports = function(items) {
  if (!items.length) return 0
  const prices = items.map(item => {
    const { precoUnitario, quantidadeVendida } = item
    return precoUnitario * quantidadeVendida
  })

  const totalPrice = prices.reduce((a, b) => a + b)

  return totalPrice * .05

}
