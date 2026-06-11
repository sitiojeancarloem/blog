# DIRETRIZ_MÁXIMA: PROJETO

# PRIORIDADE

Estas regras são mandatórias.
Em caso de conflito, aplicar:

1. Este arquivo (.clinerules)
2. Documentação/cabeçalho original do arquivo
3. Instrução contextual atual

Conflito:

"CONTRADIÇÃO DETECTADA: [origem] vs [regra] - Aplicando prioridade máxima."

[AMBIENTE]

STACK:

- Jekyll
- GitHub Pages
- Tema Minimal Mistakes
- GitHub Actions
- Gem
- Sass
- Node

Compatibilidade obrigatória:

- Build remoto
- Build local Windows
- Build local Linux

---

[ESCOPO]

Permitido:

- CSS/Sass
- JavaScript customizado
- layouts
- includes
- extensões

Proibido:

- Alterar Core Jekyll
- Alterar Core Minimal Mistakes
- Alterar `_posts` e `_drafts`
- Arquivos fora do escopo

Exceção:
Somente ordem explícita.

---

[ANÁLISE]

Idioma:
PT-BR

Antes de alterar:

- Detectar falhas
- Prevenir regressões
- Validar impacto
- Entregar solução final

Não entregar hipótese sem validação.

---

[ALTERAÇÃO]

Objetivo:

Git Diff mínimo.

Preservar:

- Estrutura existente
- Fluxo atual
- Comentários existentes
- Compatibilidade

Proibido:

- Refatoração ampla
- Reorganização sem necessidade
- Alteração comportamental não solicitada

Permitido:

Refatoração cirúrgica:

- Alteração localizada
- Mesmo objetivo
- Mesmo contrato

Alterações extensas:

Executar progressivamente:

- Moderada: mínimo 2 commits
- Agressiva: mínimo 4 commits

Documentar:

- motivo
- objetivo
- impacto
- validação

Após estabilização:
Manter somente comentários necessários.

---

[BUGS]

Não remover código apenas por aparência de redundância.
Código existente pode conter correções não documentadas.

Dúvida:
Preservar.

Adicionar:

// PRESERVADO: potencial correção de bug não documentada

Correções/prevenções:

Adicionar:

// FIX-BUG: [descrição mínima]

ou

// PROTECAO: [descrição mínima]

Não remover sem análise:

- catches vazios
- tratamentos de erro
- validações existentes

---

[ESTILO]

Proibido:

- eu
- você
- nós

Evitar:

- talvez
- pode ser
- provavelmente

Evitar:

- adjetivos subjetivos

Priorizar:

- declarações determinísticas
- baixa redundância
- baixo acoplamento
- baixo custo cognitivo

---

[PRESERVAÇÃO]

Manter:

- Cabeçalho original
- Comentários úteis
- Convenções existentes

Alterar comentário somente quando:

- ficar incorreto após mudança
- causar interpretação errada

Comentários novos:

Somente necessários.

Máximo:
1 linha - salvo estritamente necessários.

---

[AMBIGUIDADE]

Aplicar interpretação:

- mais restritiva
- menor alteração
- maior preservação

Conflito interno:

Prevalece a regra que altera menos comportamento.

Caso insolúvel:

"AMBIGUIDADE INSOLUVEL: [ponto]. Preservando original."

---

[MINIMAL_MISTAKES]

[DARK_LIGHT]

Implementar:

- Pure CSS
- Custom Properties
- Switch visual

Requisitos:

- Todos componentes visíveis nos dois modos
- Contraste validado
- Persistência via JavaScript
- Preferência salva
- Default: Dark

---

[HEADER]

Site title:

Ocultar visualmente `site-title` exibido ao lado do logotipo.

Preservar:

- logotipo
- estrutura do header
- funcionamento original do tema

Não remover HTML se apenas CSS resolver.

---

[COMPONENTES]

Fonte visual:

`./old-root/` : página estática.

Migrar:

- estilo dark
- painel futurista
- glitch pontual
- timeline
- estilo/estrutura do link de portfólio e do link de artigo

Regras:

- reutilização
- centralização
- ausência de duplicação

Painel:

Usar:

- blockquote estilizado
  e
- componente HTML reutilizável

Não aplicar em artigos completos.

---

[MENU]

Prioridade:

CSS/Sass puro.

Estado:

Nunca depender exclusivamente de JavaScript.

Implementação principal:

- Sass
- seletores estruturais
- estados CSS nativos

JavaScript:

Permitido como camada redundante:

- leve
- confiável
- sem criar dependência funcional

Nunca usar JavaScript como requisito único para:

- abrir
- fechar
- expandir
- recolher

Conteúdo colapsável:

Quando necessário:

- criar ícone clicável
- expandir/recolher via CSS

Se exibível integralmente:

- não criar menu desnecessário

Requisitos:

- somente um menu aberto quando aplicável
- layer externo
- fechamento por clique externo e pelo clique em um dos itens
- blur do conteúdo da página via backdrop-filter
  JavaScript:
  Em geral é recurso opcional para:
  - criação
  - montagem
  - posicionamento
  - monitorar estado

  Nunca essencial/obrigatório.

Itens:

Suportar:

[ícone | label]

Alinhamento uniforme obrigatório e independente da existência de ícone.

---

[LAYOUT]

Sidebar:

O blog não deve exibir sidebar/aside.

Aplicar por configuração ou extensão do tema,
sem alterar core.

---

[PÁGINA_SOBRE]

Criar:

/sobre

Migrar:

Conteúdo de `./old-root/`.

Remover:

- header antigo
- menu antigo
- footer antigo

O conteúdo migrado, disposição, estrutura e estilo visual
(exceto footer e cabeçalho) devem ser preservados exatamente como na origem.

Usar:

componentes novos inclusos no tema.

Proibido:

Duplicar CSS/JS.

---

[VALIDAÇÃO_VISUAL]

Verificar:

Modo claro:

- textos
- bordas
- ícones
- componentes

Modo escuro:

- textos
- bordas
- ícones
- componentes

Cores:

Adicionar comentários curtos de uso ao código.

---

[DEPENDÊNCIAS]

Ajustar quando necessário:

- package.json
- Gemfile

Respeitar:

GitHub Pages.

---

[ARQUIVOS]

Ignorar:

`.gitignore`

Exceto:

- regra de negócio
- referência explícita

---

[FINAL]

Adicionar:

COMMIT_SUGERIDO:

Texto PT-BR.
Curto.
Descritivo.

---

[PUBLICAÇÃO_E_AGENDAMENTO]

[SCHEDULED]

Criar:

./\_scheduled/

Finalidade:

Armazenar posts finalizados que aguardam publicação futura.

Diferença:

- `_drafts`: conteúdo em desenvolvimento
- `_scheduled`: conteúdo aprovado, pronto para publicação futura

Regras:

Posts em `_scheduled`:

- Não devem aparecer no build público padrão
- Não devem ser acessíveis por URL direta
- Devem retornar 404 antes da data prevista
- Devem permanecer isolados até a publicação efetiva

Formato:

O post deve ser precedido pela data futura de publicação.

A data determina:

- elegibilidade de publicação
- momento de migração para conteúdo público

---

[WORKFLOW_SCHEDULED]

Criar workflow específico `scheduled`.

Execução:

Diariamente:
00:01

Responsabilidade:

Verificar:

`./_scheduled/`

Identificar:

Arquivos ou diretórios cuja data de publicação seja igual à data atual.

Quando encontrado:

Executar:

- roda diretamente a partir do github Actions
- preparação do post
- compilação específica
- atualização do artefato
- publicação no GitHub Pages

Regra:

Nenhum conteúdo agendado pode ser exposto antes da data configurada.

---

[WORKFLOW_PUBLICAÇÃO]

Toda publicação efetiva de post deve acionar workflow de distribuição externa.

Aplica-se:

- publicação imediata
- publicação proveniente de `_scheduled`

Pré-condição obrigatória:

Executar somente após:

- compilação concluída
- publicação concluída
- validação de disponibilidade do post

Falha anterior:

Não iniciar distribuição externa.

---

---

[REDES_SOCIAIS]

Executado apenas se houver publicação de novasm publicações (posts).
Plataformas obrigatórias:

- Facebook
- Instagram
- X (antigo Twitter)

Implementação:

Antes de criar integração própria:

Pesquisar e avaliar ferramentas, bibliotecas e automações open source existentes
que implementem o fluxo necessário.

Preferência:

Utilizar soluções maduras já existentes quando:

- cobrirem o requisito funcional
- possuírem manutenção ativa
- forem compatíveis com o ambiente
- permitirem automação via workflow

Evitar:

- reinventar integração já existente
- duplicar bibliotecas
- criar wrappers desnecessários

Cada rede social deve possuir workflow próprio.

Objetivo:

Publicar automaticamente informações relacionadas ao post:

- título
- resumo curto
- imagem destacada quando existir
- hashtags
- link

Cada workflow deve possuir tratamento específico para sua plataforma.

Requisitos:

- configuração própria
- tratamento de erros específico
- persistência de estado
- recuperação automática
- múltiplas tentativas
- fallback quando aplicável

Estratégia:

Priorizar:

1. solução open source existente validada
2. método oficial da plataforma
3. alternativas configuradas
4. fallback disponível

Falha:

Somente ocorrer após esgotar possibilidades previstas.

Não permitido:

- encerramento abrupto
- travamento indefinido
- interrupção externa sem tratamento

Cada workflow deve:

- finalizar por sucesso
- finalizar por esgotamento controlado
- registrar estado final

Encadeamento:

Workflows dependentes devem executar somente após conclusão do anterior.

O próximo workflow deve ser acionado apenas quando:

- estado final conhecido
- execução anterior concluída

---
