module.exports = function(items) {
  let foundExclusiveProduct = false
  const totalPrice = items.map(item => {
    const { id, precoUnitario, quantidadeVendida } = item
    if (id === 'XP-0101') {
      foundExclusiveProduct = true
    }
    return precoUnitario * quantidadeVendida
  }).reduce((a, b) => a + b, 0)

  if (foundExclusiveProduct) return totalPrice * .2
  if (totalPrice < 1999.99) return totalPrice * .05
  if (totalPrice > 1999.99 && totalPrice < 4999.99) return totalPrice * .1
  if (totalPrice > 4999.99) return totalPrice * .15
}
