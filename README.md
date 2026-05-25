# ImoHarmonia

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

Plataforma web para análise de conformidade urbanística (PDM) com foco em rastreabilidade, auditoria e UX para contexto profissional.

## Stack

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS (+ `tailwindcss-animate`)
- Radix UI
- react-hook-form + zod
- hCaptcha + Web3Forms

## Variáveis de ambiente

```env
NEXT_PUBLIC_HCAPTCHA_SITEKEY=...
NEXT_PUBLIC_WEB3FORMS_KEY=...
```

## Estrutura

```
app/          # Rotas e UI (Next.js App Router)
components/   # Componentes reutilizáveis
hooks/        # Hooks React
lib/          # Helpers/serviços
public/       # Assets estáticos
styles/       # CSS global/tema
```

