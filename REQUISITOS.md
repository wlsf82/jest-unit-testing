# Função `calculaComissaoDeVenda`

Criar uma função chamada `calculaComissaoDeVenda`, a qual recebe como argumento uma lista de produtos (ver detalhes dos produtos abaixo) e retorna a comissão de venda, com base no preço final das vendas.

Cada produto da deve possuir os seguinte atributos:

- Identificador único (`string`)
- Preço unitário (`number`)
- Quantidade vendida (`number`)

Se a lista estiver vazia, a comissão é zero.

Se a lista tiver somente um item, a comissão é baseada no preço unitário multiplicado pela quantidade do único item da lista, multiplicado pelo percentual de comissão (ver detalhes do percentual de comissão na próxima seção.

Já se a lista tiver mais de um item, deve-se fazer o cálculo acima para cada item, antes da aplicação do percentual de comissão.

## Regras de comissão

- O percentual de comissão é de 5% para vendas até $1999,99
- O percentual de comissão é de 10% para vendas entre $2000,00 e $4999,99
- O percentual de comissão é de 15% para vendas a partir de $5000,00

### Comissão Especial

- Caso a lista possua ao menos um produto com identificador único XP-0101, o percentual de comissão é de 20%
