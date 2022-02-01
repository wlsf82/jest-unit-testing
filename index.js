module.exports = function(items) {
  const totalPrice = items.map(item => {
    const { precoUnitario, quantidadeVendida } = item
    return precoUnitario * quantidadeVendida
  }).reduce((a, b) => a + b, 0)

  if (totalPrice < 1999.99) return totalPrice * .05
  if (totalPrice > 1999.99 && totalPrice < 4999.99) return totalPrice * .1
  if (totalPrice > 4999.99) return totalPrice * .15
}
