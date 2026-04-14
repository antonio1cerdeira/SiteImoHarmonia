# Imo Harmonia

Landing page informativa do projeto **Imo Harmonia – Urbanismo Descomplicado**.

O site apresenta o projeto, o seu enquadramento académico no **Instituto Politécnico da Guarda**, a proposta de valor da plataforma, o reconhecimento no **Poliempreende 2025** e a equipa multidisciplinar envolvida.

## Objetivo

Este website foi desenvolvido para comunicar, de forma clara e visualmente forte, a proposta do Imo Harmonia:

- simplificar a interpretação de regulamentos urbanísticos
- aplicar Inteligência Artificial à leitura de PDM
- reduzir complexidade para arquitetos, engenheiros e profissionais do urbanismo

## Stack

- `React`
- `Vite`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide React`

## Funcionalidades da página

- hero section com identidade visual de startup tecnológica
- navegação one-page com scroll suave
- menu mobile
- modo claro/escuro com persistência
- secções informativas sobre problema, funcionamento, funcionalidades, prémio e equipa
- FAQ e bloco final de síntese
- layout responsivo

## Estrutura principal

- [src/App.jsx] : página principal e estrutura das secções
- [src/index.css] : estilos base e componentes utilitários
- [index.html] : Documento HTML base e metadados
- [vite.config.js] : Configuração do Vite com Tailwind

## Como executar

Instalar dependências:

```bash
npm install
```

Iniciar ambiente de desenvolvimento:

```bash
npm run dev


## Variáveis de ambiente

O formulário de contacto usa Web3Forms + hCaptcha e precisa destas variáveis no ficheiro `.env`:

```bash
VITE_WEB3FORMS_KEY=KEY
VITE_HCAPTCHA_SITEKEY=KEY
```

Notas:

- `VITE_WEB3FORMS_KEY`: access key criada no Web3Forms.
- `VITE_HCAPTCHA_SITEKEY`: site key pública do hCaptcha para o widget no frontend.
- Em Vite, variáveis para o browser devem começar por `VITE_`.

