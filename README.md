# Site Matias Lyra de Carvalho — Psicólogo Clínico

Site profissional de Matias Lyra de Carvalho, psicólogo clínico com abordagem psicanalítica, com atendimento presencial em Recife e online para todo o Brasil.

## Tecnologias

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/) como bundler
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [shadcn/ui](https://ui.shadcn.com/) para componentes de UI
- [Framer Motion](https://www.framer.com/motion/) para animações
- [React Router](https://reactrouter.com/) para navegação

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado: 20 LTS)
- [npm](https://www.npmjs.com/) (já vem com o Node) ou [bun](https://bun.sh/)

## Instalação

```bash
# Clone o repositório
git clone <url-do-repo>
cd site-Matias

# Instale as dependências
npm install
# ou com bun:
bun install
```

## Rodando em desenvolvimento

```bash
npm run dev
# ou
bun dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:8080`.

## Build para produção

```bash
npm run build
# ou
bun run build
```

Os arquivos gerados ficam na pasta `dist/`.

## Preview do build de produção

```bash
npm run preview
# ou
bun run preview
```

## Outros comandos

```bash
# Lint
npm run lint

# Testes unitários
npm run test

# Testes unitários em modo watch
npm run test:watch
```

## Estrutura do projeto

```
src/
├── components/        # Componentes React
│   ├── ui/            # Componentes base (shadcn/ui)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── SobreSection.tsx
│   ├── ServicosSection.tsx
│   ├── AbordagemSection.tsx
│   ├── InfantilSection.tsx
│   ├── AgendamentoSection.tsx
│   ├── FooterSection.tsx
│   └── WhatsAppButton.tsx
├── pages/             # Páginas da aplicação
├── App.tsx
└── main.tsx
public/
└── photo-matias.jpeg  # Foto do psicólogo
```
