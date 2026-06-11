```text
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
- layouts/includes/extensões

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

[COMPONENTES]

Fonte visual:

`./old-root/` : é página stática.

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
- estrutura, estilo, visual, exceto footer e cabeçalhho, devem ser preservados da origem

Painel:

Usar:

- blockquote estilizado
e
- componente HTML reutilizável

Não aplicar em artigos completos.

---

[MENU]

Prioridade:

CSS puro.

Estado:

Nunca depender de JavaScript.

Usar:

- seletores estruturais
- input[type="radio"] ~ div

Requisitos:

- somente um menu aberto
- layer externo
- fechamento por clique externo e pelo clique em um do itens
- blur do conteúdo da págia via backdrop-filter

JavaScript:

Opcional e somente:

- criação
- montagem
- posicionamento

Nunca:

- controlar estado

Itens:

Suportar:

[ícone | label]

Alinhamento uniforme obrigatório e,, independente da exitÊncia do ícone em um dos itens.

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

Usar:

componentes novos já inclusos no tema.

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
```
