const calculaComissaoDeVenda = require('.')

test('se a lista estiver vazia, a comissão é zero', () => {
  const resultadoAtual = calculaComissaoDeVenda([])
  const resultadoEsperado = 0

  expect(resultadoAtual).toBe(resultadoEsperado)
})

it('calcula comissão quando só tem um item na lista', () => {
  const resultadoAtual = calculaComissaoDeVenda([{
    id: 'PROD-123',
    precoUnitario: 1000,
    quantidadeVendida: 1
  }])
  const resultadoEsperado = 50

  expect(resultadoAtual).toBe(resultadoEsperado)
})
