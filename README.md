# ImoHarmonia

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)

---

## Sobre

**ImoHarmonia** é uma ferramenta de análise de conformidade urbanística baseada em IA que automatiza a verificação de planos diretores municipais (PDM) contra regulamentações locais. 

Desenvolvida no **Instituto Politécnico da Guarda** com foco em Direito do Urbanismo e Processamento de Linguagem Natural, a plataforma oferece:

-  **Análise Rigorosa**: Extração automática de artigos e regras de PDM
-  **Validação Técnica**: Verificação de conformidade contra condicionantes locais
-  **Relatórios Auditáveis**: Outputs estruturados com confiança AI e rastreabilidade de fontes
-  **Interface Profissional**: Design GRC (Governance, Risk, Compliance) para profissionais de arquitetura e urbanismo

### Contexto Académico

Este projeto nasce da investigação real em urbanismo digital, não é uma demo. É uma ferramenta construída para ser usada por profissionais que não podem errar. Cada decisão técnica tem fundamentação em boas práticas de compliance e UX.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.0 | Framework UI moderno |
| **Vite** | 7.3.1 | Build tool e dev server ultra-rápido |
| **Tailwind CSS** | 4.2.1 | Styling utility-first |
| **Framer Motion** | 12.35.2 | Animações e micro-interações |
| **Lucide React** | 0.577.0 | Sistema de ícones vetoriais |
| **hCaptcha** | 2.0.2 | Proteção anti-spam em formulários |

---

## Instalação

### Pré-requisitos
- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Setup

```bash
# Clonar repositório
git clone https://github.com/antonio1cerdeira/SiteImoHarmonia.git
cd SiteImoHarmonia

# Instalar dependências
npm install
```

---

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento (localhost:5176)
npm run dev

# Executar linter ESLint
npm run lint

# Build para produção
npm run build

# Preview do build
npm preview
```

### Variáveis de Ambiente

Crie um ficheiro `.env.local` na raiz do projeto:

```env
VITE_WEB3FORMS_KEY=your_web3forms_api_key_here
```

---

## Estrutura do Projeto

```
SiteImoHarmonia/
├── src/
│   ├── components/
│   │   ├── AnimatedStats.jsx       # Seção de estatísticas com animações
│   │   └── PDMAnalyzer.jsx         # Card de diagnóstico GRC (Não Conformidade)
│   ├── App.jsx                      # Componente raiz da aplicação
│   ├── index.css                    # Estilos globais e animações
│   └── main.jsx                     # Ponto de entrada React
├── public/
│   ├── CNAME                        # Configuração para GitHub Pages
│   └── Fotos/                       # Assets estáticos
├── .eslintrc.js                     # Configuração ESLint
├── vite.config.js                   # Configuração Vite
├── tailwind.config.js               # Configuração Tailwind
├── package.json                     # Dependências e scripts
└── README.md                        # Este ficheiro
```

### Anatomia de Componentes

- **AnimatedStats**: Renderiza estatísticas chave com efeitos de fade-in escalonados
- **PDMAnalyzer**: Card expandido com interface de compliance mostrando:
  - Artigos PDM detectados
  - Diagnóstico de não conformidade (ART. 45º como exemplo)
  - Visualização de bullet graph (9.00m vs 12.50m)
  - Badge de confiança AI
  - Botão para verificação de fonte PDF

---

## Features Principais

### 1. **Análise de Documentos PDM**
- Upload de ficheiros PDF
- Extração automática de artigos e regulamentações
- Indexação de 847+ artigos identificados

### 2. **Validação de Conformidade**
- Comparação de propostas contra limites PDM
- Detecção de não conformidades críticas
- Análise de impacto (ex: desvio de +38.9%)

### 3. **Interface GRC Profissional**
- Dark theme minimalista
- Monospaced fonts para dados técnicos
- Animações subtis e responsivas
- Badges de confiança AI (98.4%)

### 4. **Formulário de Contacto**
- Integração hCaptcha
- Submissão via Web3Forms
- Validação de campos

---

## Performance & Otimização

- [x] **Tree-shaking automático** via Vite
- [x] **Zero dependências não-utilizadas** (limpeza de imports)
- [x] **CSS minificado** e otimizado pelo Tailwind
- [x] **Animações hardware-accelerated** com Framer Motion

**Build Size**: ~371 kB (minificado, sem gzip)

---

## Contribuição

Este é um projeto académico em fase de produção. Contribuições são bem-vindas para:

- 🐛 Bug fixes
- ♿ Melhorias de acessibilidade
- 📱 Responsividade em mobile
- 🌍 Suporte multilíngue

Por favor abra uma issue ou submit um PR.

---

## Roadmap

- [] Suporte para múltiplos municípios (beyond Guarda)
- [] Dashboard de histórico de análises
- [] Export em formato PDF com certificação
- [] Integração com sistemas GIS (ArcGIS)
- [] API REST para integração de terceiros

---

## Suporte

- **Instituto Politécnico da Guarda**: [ipg.pt](https://www.ipg.pt)
- **Poliempreende 2025**: Programa de empreendedorismo

---

## Licença

MIT License - Veja [LICENSE](LICENSE) para detalhes.

---

## Changelog

### v0.1.0 (12 Maio 2026)
- ✅ Lançamento inicial
- ✅ Componente PDMAnalyzer com diagnóstico expandido
- ✅ Dark theme profissional GRC
- ✅ Limpeza de dependências não-utilizadas
- ✅ Documentação README completa

---

**Desenvolvido com rigor académico. Não é uma demo, é uma ferramenta profissional.**
