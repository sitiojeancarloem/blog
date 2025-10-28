# Antenas

Equiapmetnos não obrigatóriso mas importantes: **NanoVNA** (permite analisar desepenho, eficiência e sintonia correta da antena).

## Tipos de Antenas

| **Família**                          | **Variações**                                                                        | **Faixa típica**                    | **Ganho médio (dBi)** | **Polarização**         | **Complexidade** | **Características / Observações**                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------- | --------------------- | ----------------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| **Verticais**                        | Plano Terra (¼λ, ½λ), 5/8λ, Colinear, J-Pole, Slim Jim, Flowerpot                    | VHF / UHF                           | 2–6                   | Vertical                | ★★               | Omnidirecionais, fáceis de ajustar, boas para repetidoras e comunicação local.                       |
| **Dipolo**                           | Dipolo clássico (½λ), Dipolo dobrado, Inverted-V, Dipolo multibanda, Dipolo rotativo | HF / VHF                            | 2–3                   | Horizontal              | ★★               | Antena básica e eficiente; excelente custo-benefício; polarização horizontal favorece alcance em HF. |
| **Antenas de Fio**                   | End-Fed Half Wave (EFHW), Long Wire, Random Wire + Unun, Zeppelin (Zepp)             | HF                                  | 1–2                   | Horizontal ou inclinada | ★                | Extremamente simples; podem ser multibanda com acoplador; boas para QRP e portáteis.                 |
| **Loop**                             | Magnetic Loop, Delta Loop, Quad Loop                                                 | HF / VHF                            | 1–3                   | Horizontal ou Vertical  | ★★★              | Boa eficiência e baixo ruído; ideal para espaço reduzido; Magnetic Loop exige capacitor variável.    |
| **Direcionais (Arrays)**             | Yagi-Uda, Log-periódica, Moxon Rectangle, Quad (Cubical Quad)                        | HF / VHF / UHF                      | 6–12                  | Horizontal              | ★★★★             | Alto ganho e diretividade; usadas em estações fixas; requerem torre e rotor.                         |
| **Especiais / Experimentais**        | Discone, Helicoidal, Patch (Microstrip), Curtain Array, Rhombic                      | VHF / UHF / HF (dependendo do tipo) | 0–15                  | Variável                | ★★★★–★★★★★       | Aplicações específicas: larga banda, satélite, micro-ondas, comunicações de longa distância.         |
| **Verticais de Fio / Portáteis**     | T2LT, Verticais telescópicas, Verticais com radiais inclinados                       | HF / VHF                            | 1–4                   | Vertical                | ★                | Leves e rápidas de instalar; boas para operação em campo e QRP.                                      |
| **Multielemento HF (Arrays de Fio)** | Beverage, Vee Beam, Rhombic, Curtain (dipolos em matriz)                             | HF                                  | 8–15                  | Horizontal              | ★★★★★            | Estruturas grandes, alto ganho e diretividade; muito usadas para DX e recepção.                      |

### Notas rápidas

- HF (High Frequency): 3–30 MHz
- VHF (Very High Frequency): 30–300 MHz
- UHF (Ultra High Frequency): 300–3000 MHz
- Ganho (dBi): valores médios; dependem do projeto e altura de instalação.
- Complexidade: considera construção, ajuste e necessidade de suporte mecânico.

## 📡 Melhores Antenas DIY por Tipo, Cenário e Direcionalidade

### Tabela principal

| Tipo / Cenário | Fixa | Melhor antena DIY                | Abertura angular (°) | Vantagem principal                              | Casamento / Ajuste                   | Dificuldade | Faixas atendidas                       | Compartilhar mastro? | Tutorial                                                                 |
| -------------- | ---- | -------------------------------- | -------------------- | ----------------------------------------------- | ------------------------------------ | ----------- | -------------------------------------- | -------------------- | ------------------------------------------------------------------------ |
| **DX**         |      | **End-Fed Half-Wave (EFHW)**     | ~360° (HF)           | Leve, multibanda, fácil de armar em campo       | Unun 49:1 + choke                    | ★★☆☆        | HF 80 – 10 m + 6 m (com ajuste)        | ✅                   | [▶︎](https://www.youtube.com/watch?v=DxhT9uObigs)                        |
| **DX**         | ✅   | **Inverted-V Dipolo Multibanda** | ~270° (HF)           | Bom rendimento geral e baixo custo              | Balun 1:1                            | ★★☆☆        | HF 80 – 10 m + 6 m (com ajuste)        | ✅                   | [▶︎](https://www.youtube.com/watch?v=7za6gPWcNng&utm_source=chatgpt.com) |
| **DX**         | ✅   | **Yagi HF (beam)**               | ~60–70°              | Grande ganho e alcance para DX direcionado      | Balun 1:1 ou 4:1                     | ★★★★☆       | Banda HF específica (ex: 20 m ou 10 m) | ✅                   | —                                                                        |
| **VHF/UHF**    |      | **J-Pole ou Slim-J Dual-Band**   | ~360°                | Simples, eficiente, ideal para HT e campo       | Direta ou choke 1:1                  | ★★☆☆        | VHF (2 m) + UHF (70 cm)                | —                    | [▶︎](https://www.youtube.com/watch?v=rwmplR5X-TE&utm_source=chatgpt.com) |
| **VHF/UHF**    | ✅   | **Collinear Vertical 5/8λ**      | ~360°                | Boa cobertura local, sem apontamento            | Sem balun (radiais + choke)          | ★★☆☆        | VHF (2 m) + UHF próxima (430–440 MHz)  | ✅                   | [▶︎](https://www.youtube.com/watch?v=-NlBPcG28NE&utm_source=chatgpt.com) |
| **VHF/UHF**    | ✅   | **Plano Terra (¼ λ)**            | ~360°                | Construção simples, ótimo custo-benefício       | Sem balun (radiais + choke opcional) | ★☆☆☆        | VHF (2 m) + UHF (com ajuste)           | ✅                   | [▶︎](https://www.youtube.com/watch?v=XeVdLRh2lxY)                        |
| **VHF/UHF**    | ✅   | **Yagi 2 m/70 cm**               | ~45–60°              | Alto ganho p/ repetidores e links ponto a ponto | Balun 1:1                            | ★★★☆☆       | 2 m e 70 cm (eventualmente 1,25 m)     | ✅                   | —                                                                        |

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

### Alternativas pagas com provavel melhor relação custo/benefícios

| Tipo / Cenário                  | Antena Comercial                              | Abertura angular (°) | Vantagem principal                                            | Outras faixas atendidas  | Compartilhar mastro (fixa)? | Análises                                            |
| ------------------------------- | --------------------------------------------- | -------------------- | ------------------------------------------------------------- | ------------------------ | --------------------------- | --------------------------------------------------- |
| **DX – Portátil**               | [Comet HFJ‑350M 3‑50 MHz]()                   | ~360°                | Multibanda portátil HF (3-50 MHz)                             | HF 80-10m + 6m           | ✅                          |                                                     |
| **DX – Fixa**                   | [Super Antena MP1C Todas‑Bandas HF/VHF]()     | ~360°                | Cobre várias bandas HF/VHF; estação fixa                      | HF + VHF                 | ✅                          |                                                     |
| **DX – Fixa (direcional)**      | [Super Antena MR4010 Vertical Radial HF]()    | ~360°                | Vertical multibanda HF + radiais; menor necessidade de espaço | HF (40-10m)              | ✅                          | Review melhor vertical HF ([hamradioplanet.com][1]) |
| **VHF/UHF – Portátil**          | [Yaesu ATAS‑120A Ativa Portátil]()            | ~360°                | Antena portátil/veicular que cobre HF + VHF (algumas bandas)  | HF + VHF + UHF (algumas) | —                           |                                                     |
| **VHF/UHF – Fixa (omni)**       | [Antena Base VHF 5/8λ FM Rádio Comunitária]() | ~360°                | Cobertura omni em VHF base, custo‐benefício bom               | VHF + UHF próxima        | ✅                          |                                                     |
| **VHF/UHF – Fixa (direcional)** | [HYS Yagi UHF 400‑470 MHz 5 Elementos]()      | ~45-60°              | Yagi de alto ganho para UHF, direção específica               | UHF (400-470 MHz)        | ✅                          |                                                     |

[1]: https://hamradioplanet.com/best-vertical-antenna-for-ham-radio-top-picks-and-expert-tips-in-2023/?utm_source=chatgpt.com "Best Vertical Antenna for Ham Radio- Ham Radio Planet"
