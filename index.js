module.exports = function(items) {
  if (!items.length) return 0
  const totalPrice = items.map(item => {
    const { precoUnitario, quantidadeVendida } = item
    return precoUnitario * quantidadeVendida
  }).reduce((a, b) => a + b)

  return totalPrice * .05

}
