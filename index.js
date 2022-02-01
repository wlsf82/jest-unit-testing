module.exports = function(items) {
  if (!items.length) return 0
  const { precoUnitario, quantidadeVendida } = items[0]
  return precoUnitario * quantidadeVendida * .05
}
