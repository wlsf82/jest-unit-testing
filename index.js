module.exports = function(items) {
  const totalPrice = items.map(item => {
    const { precoUnitario, quantidadeVendida } = item
    return precoUnitario * quantidadeVendida
  }).reduce((a, b) => a + b, 0)

  return totalPrice * .05

}
