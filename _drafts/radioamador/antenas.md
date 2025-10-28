# Antenas

Equiapmetnos não obrigatóriso mas importantes: **NanoVNA** (permite analisar desepenho, eficiência e sintonia correta da antena).

## Tipos de Antenas

| **Família**                          | **Forma / Montagem**                                                                | **Variações**                                                                        | **Faixa típica** | **Ganho médio (dBi)** | **Polarização**         | **Complexidade** | **Características / Observações**                                                             |
| ------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- | --------------------- | ----------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| **Verticais**                        | Haste reta montada verticalmente, geralmente sobre mastro ou base com radiais.      | Plano Terra (¼λ, ½λ), 5/8λ, Colinear, J-Pole, Slim Jim, Flowerpot                    | VHF / UHF        | 2–6                   | Vertical                | ★★               | Omnidirecionais; simples e eficientes; ideais para uso fixo ou em repetidoras.                |
| **Dipolo**                           | Dois braços horizontais alinhados; suspenso entre suportes ou em torre.             | Dipolo clássico (½λ), Dipolo dobrado, Inverted-V, Dipolo multibanda, Dipolo rotativo | HF / VHF         | 2–3                   | Horizontal              | ★★               | Base da maioria das antenas; fácil ajuste; bom desempenho em HF.                              |
| **Antenas de Fio**                   | Fio estendido ou suspenso, preso por isoladores; montagem simples e leve.           | End-Fed Half Wave (EFHW), Long Wire, Random Wire + Unun, Zeppelin (Zepp)             | HF               | 1–2                   | Horizontal ou inclinada | ★                | Muito simples e portáteis; dependem de acoplador; ideais para operação de campo.              |
| **Loop**                             | Fio ou tubo formando um laço fechado (circular, quadrado ou triangular).            | Magnetic Loop, Delta Loop, Quad Loop                                                 | HF / VHF         | 1–3                   | Horizontal ou Vertical  | ★★★              | Compactas e silenciosas; boas para locais com pouco espaço.                                   |
| **Direcionais (Arrays)**             | Estrutura com múltiplos elementos paralelos montados em um boom (haste central).    | Yagi-Uda, Log-periódica, Moxon Rectangle, Quad (Cubical Quad)                        | HF / VHF / UHF   | 6–12                  | Horizontal              | ★★★★             | Alto ganho e diretividade; requerem torre e rotor; usadas em DX.                              |
| **Especiais / Experimentais**        | Formas variadas: cones, hélices, painéis planos ou grades suspensas.                | Discone, Helicoidal, Patch (Microstrip), Curtain Array, Rhombic                      | HF / VHF / UHF   | 0–15                  | Variável                | ★★★★–★★★★★       | Aplicações específicas: larga banda, satélite, micro-ondas e comunicações de longa distância. |
| **Verticais de Fio / Portáteis**     | Fio ou tubo montado verticalmente, com ou sem radiais inclinados; portátil.         | T2LT, Verticais telescópicas, Verticais com radiais inclinados                       | HF / VHF         | 1–4                   | Vertical                | ★                | Leves e rápidas de instalar; perfeitas para uso temporário e QRP.                             |
| **Multielemento HF (Arrays de Fio)** | Múltiplos fios longos suspensos em grandes estruturas, formando feixes direcionais. | Beverage, Vee Beam, Rhombic, Curtain (dipolos em matriz)                             | HF               | 8–15                  | Horizontal              | ★★★★★            | Antenas enormes, altíssimo ganho; usadas para DX e recepção a longa distância.                |

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

- J_Pole parece ser a maelhor escolha para produzir antes Projeto U/VHF, modelo OSJ: [artigo original](https://officinahf.jimdofree.com/antenne-vhf-uhf/v-u-j-pole/) e também o tudorial em [vídeo](https://www.youtube.com/watch?v=srnYf0nnDYk); também [disponível para compra ](https://www.mercadolivre.com.br/up/MLBU1989597383?pdp_filters=item_id:MLB829809025#origin=share&sid=share&wid=MLB829809025&action=whatsapp).


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
