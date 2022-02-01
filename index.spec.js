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

it('calcula comissão quando há mais de um item na lista', () => {
  const resultadoAtual = calculaComissaoDeVenda([
    {
      id: 'PROD-123',
      precoUnitario: 1000,
      quantidadeVendida: 1
    },
    {
      id: 'PROD-456',
      precoUnitario: 100,
      quantidadeVendida: 5
    }
  ])
  const resultadoEsperado = 75

  expect(resultadoAtual).toBe(resultadoEsperado)
})

it('calcula comissão de 10%', () => {
  const resultadoAtual = calculaComissaoDeVenda([{
    id: 'PROD-789',
    precoUnitario: 2000,
    quantidadeVendida: 1
  }])
  const resultadoEsperado = 200

  expect(resultadoAtual).toBe(resultadoEsperado)
})

it('calcula comissão de 15%', () => {
  const resultadoAtual = calculaComissaoDeVenda([{
    id: 'PROD-789',
    precoUnitario: 2000,
    quantidadeVendida: 3
  }])
  const resultadoEsperado = 900

  expect(resultadoAtual).toBe(resultadoEsperado)
})

it('calcula comissão especial para o produto XP-0101', () => {
  const resultadoAtual = calculaComissaoDeVenda([
    {
      id: 'PROD-321',
      precoUnitario: 5000,
      quantidadeVendida: 2
    },
    {
      id: 'XP-0101',
      precoUnitario: 10000,
      quantidadeVendida: 4
    }
  ])
  const resultadoEsperado = 10000

  expect(resultadoAtual).toBe(resultadoEsperado)
})
