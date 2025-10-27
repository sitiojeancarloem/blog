# Antenas

Equiapmetnos não obrigatóriso mas importantes: **NanoVNA** (permite analisar desepenho, eficiência e sintonia correta da antena).

## 📡 Melhores Antenas DIY por Tipo, Cenário e Direcionalidade

### Tabela principal


| Tipo / Cenário | Fixa | Melhor antena DIY | Abertura angular (°) | Vantagem principal | Casamento / Ajuste | Dificuldade | Faixas atendidas | Compartilhar mastro? | Tutorial |
|---|---|---|---|---|---|---|---|---|---|
| **DX** | | **End-Fed Half-Wave (EFHW)** | ~360° (HF) | Leve, multibanda, fácil de armar em campo | Unun 49:1 + choke | ★★☆☆ | HF 80 – 10 m + 6 m (com ajuste) | ✅ Sim | [▶︎](https://www.youtube.com/watch?v=DxhT9uObigs) |
| **DX** | ✅ | **Inverted-V Dipolo Multibanda** | ~270° (HF) | Bom rendimento geral e baixo custo | Balun 1:1 | ★★☆☆ | HF 80 – 10 m + 6 m (com ajuste) | ✅ Sim | [▶︎](https://www.youtube.com/watch?v=7za6gPWcNng&utm_source=chatgpt.com) |
| **DX** | ✅ | **Yagi HF (beam)** | ~60–70° | Grande ganho e alcance para DX direcionado | Balun 1:1 ou 4:1 | ★★★★☆ | Banda HF específica (ex: 20 m ou 10 m) | ✅ Sim | — |
| **VHF/UHF** | | **J-Pole ou Slim-J Dual-Band** | ~360° | Simples, eficiente, ideal para HT e campo | Direta ou choke 1:1 | ★★☆☆ | VHF (2 m) + UHF (70 cm) | — | [▶︎](https://www.youtube.com/watch?v=rwmplR5X-TE&utm_source=chatgpt.com) |
| **VHF/UHF** | ✅| **Collinear Vertical 5/8λ** | ~360° | Boa cobertura local, sem apontamento | Sem balun (radiais + choke) | ★★☆☆ | VHF (2 m) + UHF próxima (430–440 MHz) | ✅ Sim | [▶︎](https://www.youtube.com/watch?v=-NlBPcG28NE&utm_source=chatgpt.com) |
| **VHF/UHF** | ✅ | **Plano Terra (¼ λ)** | ~360° | Construção simples, ótimo custo-benefício | Sem balun (radiais + choke opcional) | ★☆☆☆ | VHF (2 m) + UHF (com ajuste) | ✅ Sim | [▶︎](https://www.youtube.com/watch?v=XeVdLRh2lxY) |
| **VHF/UHF** | ✅ | **Yagi 2 m/70 cm** | ~45–60° | Alto ganho p/ repetidores e links ponto a ponto | Balun 1:1 | ★★★☆☆ | 2 m e 70 cm (eventualmente 1,25 m) | ✅ Sim | — |

---

### ⚙️ Tipos de Antena — Descrição e Casos de Uso

| Tipo                         | Forma / Montagem                                          | Caso de uso ideal                                      |
| ---------------------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| **End-Fed Half-Wave (EFHW)** | Fio longo (1/2λ) alimentado em uma ponta, com unun 49:1.  | HF portátil ou fixa com pouco espaço; multibanda.      |
| **Inverted-V Dipolo**        | Dois fios inclinados em “V”, centro no mastro.            | HF fixa; bom desempenho geral, baixa altura.           |
| **Yagi (beam)**              | Antena de elementos paralelos (diretor, refletor, ativo). | DX direcional em HF/VHF/UHF; alto ganho.               |
| **J-Pole / Slim-J**          | Tubo ou fio dobrado em forma de “J”.                      | VHF/UHF portátil ou base simples; omni e eficiente.    |
| **Collinear Vertical 5/8λ**  | Vários elementos verticais empilhados.                    | Base VHF/UHF para ampla cobertura em 360°.             |
| **Loop Magnético (MagLoop)** | Espira de cobre com capacitor variável.                   | RX/TX em HF ou VHF quando há pouco espaço; direcional. |

---

#### ℹ️ O que significa a coluna **“Casamento / Ajuste”**

Esta coluna indica **como a antena é casada eletricamente** com o transmissor e o cabo coaxial (geralmente 50 Ω), garantindo **baixa ROE/SWR** e máxima transferência de potência.  
Em resumo:

- **Balun (Balance-Unbalance)** — usado em antenas simétricas (ex.: dipolo) para adaptar alimentação coaxial (desbalanceada).
- **Unun (Unbalance-Unbalance)** — usado em antenas assimétricas (ex.: end-fed), para adaptar impedância alta (≈2–3 kΩ → 50 Ω).
- **Choke / Bobina de modo comum** — suprime correntes indesejadas no coax e reduz ruído/interferência.
- **Ajuste direto** — antenas naturalmente próximas a 50 Ω, sem necessidade de transformador (ex.: J-pole, collinear bem construída).
- **Radiais** — fios condutores usados em verticais (ou ground-plane) para estabilizar o plano de terra e melhorar o rendimento.

Um bom casamento reduz o VSWR e melhora o rendimento geral da transmissão.
