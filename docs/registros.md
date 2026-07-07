# Registros de alterações

## 2026-07-03 17:39 UTC

- **Motivo:** Documentar a obrigatoriedade de registrar todas as alterações realizadas no repositório.
- **Ajustes:**
  - Criado `AGENTS.md` com a instrução para agentes registrarem toda alteração em `docs/registros.md`.
  - Criado este arquivo de registros com o formato contendo data, hora, motivo e ajustes.

## 2026-07-03 19:31 UTC

- **Motivo:** Aumentar a visualização de estimativas mensais de 3 para 6 meses, conforme solicitado.
- **Ajustes:**
  - Alterada a consulta de estimativas para buscar os 6 períodos mais recentes.
  - Ajustada a montagem dinâmica das colunas mensais retornadas pela API.
  - Atualizada a tela de estimativas para exibir e totalizar 6 meses.

## 2026-07-03 19:41 UTC

- **Motivo:** Impedir que o usuário salve movimentações com Período Fonte menor que o Período Aplicação.
- **Ajustes:**
  - Adicionada validação no formulário de movimentação para comparar os períodos selecionados, exibir mensagem de erro e bloquear o botão Salvar quando o Período Fonte for anterior ao Período Aplicação.
  - Adicionada validação equivalente na API `CriaEdita` de movimentação para rejeitar gravações inválidas também no backend.

## 2026-07-03 19:48 UTC

- **Motivo:** Manter a mesma Conta Fonte e o mesmo Período Fonte ao cadastrar dois itens novos em sequência na tela de movimentações por conta de aplicação e período.
- **Ajustes:**
  - A tela de movimentações por conta de aplicação e período passou a guardar a última fonte usada em um novo cadastro concluído.
  - O formulário de movimentação passou a receber essa última fonte como padrão ao abrir o próximo cadastro novo.

## 2026-07-03 19:53 UTC

- **Motivo:** Ajustar novos cadastros sequenciais na tela de movimentações por conta de aplicação e período para reaproveitar mais campos e aceitar valor decimal com vírgula.
- **Ajustes:**
  - O campo Valor passou a normalizar vírgula decimal para ponto antes de salvar, mantendo também valores digitados com ponto.
  - O próximo cadastro novo passou a manter o Dia e o Período Aplicação da inserção anterior, além da Conta Fonte e do Período Fonte.

## 2026-07-06 19:43 UTC

- **Motivo:** Exibir o detalhe das movimentações que compõem os valores somados na tela de estimativas mensais.
- **Ajustes:**
  - A consulta de estimativas passou a retornar uma descrição agregada das movimentações por conta e período.
  - As células mensais da tela de estimativas passaram a exibir esse detalhamento no atributo `title`, permitindo visualizar a composição do somatório ao passar o mouse sobre o valor.

## 2026-07-07 03:13 UTC

- **Motivo:** Exibir os últimos doze meses e incluir um gráfico na tela de Total Mês.
- **Ajustes:**
  - Alterada a consulta de Total Mês para buscar os 12 períodos mais recentes.
  - Atualizado o título da tela para indicar a visualização dos últimos 12 meses.
  - Adicionado um gráfico de barras abaixo da tabela usando os mesmos valores mensais retornados pela API.
