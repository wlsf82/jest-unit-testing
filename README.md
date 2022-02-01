# JavaScript para QAs - _Unit Testing_

Projeto exemplo para a [live #7](https://youtu.be/yTnUeaeIn0c) da playlist [JS para QAs](https://youtube.com/playlist?list=PL-eblSNRj0QH36XrwvGfhh14GjpG-ViS2) do [Canal Talking About Testing](https://www.youtube.com/c/talkingabouttesting) no YouTube.

## Pré-requisitos

É necessário ter o node.js e o npm instalados para rodar este projeto.

> Usei as versões `v16.13.2` e `8.3.2` dos sistemas citados acima e recomendo usar as mesmas ou versões mais recentes.

## Instalação

Execute `npm install` (ou `npm i` - versão curta) para instalar o Jest.

## Testes

Execute `npm test` (ou `npm t` - versão curta) para rodar os testes de unidade.

Após executá-los, você deve ter um resultado com o seguinte.

```sh
> jest-unit-testing@1.0.0 test
> jest --coverage

 PASS  ./index.spec.js
  ✓ se a lista estiver vazia, a comissão é zero (2 ms)
  ✓ calcula comissão quando só tem um item na lista
  ✓ calcula comissão quando há mais de um item na lista (1 ms)
  ✓ calcula comissão de 10%
  ✓ calcula comissão de 15% (1 ms)
  ✓ comissão exclusiva para o produto XP-0101

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |    91.66 |     100 |     100 |
 index.js |     100 |    91.66 |     100 |     100 | 12
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.293 s, estimated 1 s
Ran all test suites.
```

## Suporte este projeto

Deixe uma ⭐ para suportar este projeto. Obrigado!

___

Feito com 💛 por [Walmyr Filho](https://walmyrfilho.com).
