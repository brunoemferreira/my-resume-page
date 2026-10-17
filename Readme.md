# Bruno Ferreira (BF) — Landing Page Pessoal

Landing page pessoal moderna, segura e responsiva de **Bruno Eduardo de Moura Ferreira** (Mid-level Chatbot Developer @ UY3, Arquiteto de Software & Engenheiro Fullstack com 18+ anos de experiência).

---

## 🚀 Tecnologias & Arquitetura

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Estilização:** CSS Vanilla estruturado com Design Tokens (Dark Obsidian & Warm Cream UY3)
- **Efeitos Visuais:** Canvas 2D nativo com o algoritmo original de partículas da UY3 (`uy3-particles.js`), orbes luminosos, grade em perspectiva, digitação interativa (typewriter) e cards double-bezel
- **Arquitetura de Software:** Clean Architecture & Screaming Architecture adaptada para React:
  - `src/@types/`: Tipagens estritas de domínio, GitHub e temas
  - `src/domain/`: Contratos e regras de negócio puras
  - `src/infrastructure/`: Cliente da API do GitHub, sanitização contra XSS e cache no `localStorage` com TTL (1 hora)
  - `src/application/`: Hooks customizados desacoplados (`useTheme`, `useUY3Particles`, `useGitHubRepos`, `useTypewriter`, `useAnimatedCounter`, `useClipboard`)
  - `src/presentation/`: Componentes atômicos (`components/ui`) e seções modulares (`components/sections`)
- **Segurança (OWASP):** Prevenção anti-XSS, anti-clickjacking (`X-Frame-Options`), links com `rel="noopener noreferrer"`, `X-Content-Type-Options: nosniff` e Content Security Policy (CSP)
- **Mobile-First:** Layout concebido prioritariamente para telas móveis e expandido progressivamente via media queries

---

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Checagem de tipos TypeScript
npm run build
```

---

## 🌐 Conexões Oficiais

- **GitHub:** [https://github.com/brunoemferreira](https://github.com/brunoemferreira)
- **LinkedIn:** [https://www.linkedin.com/in/brunoemf/](https://www.linkedin.com/in/brunoemf/)
- **WhatsApp:** [+55 (19) 99292-2054](https://api.whatsapp.com/send?1=pt_BR&phone=5519992922054)
- **E-mail:** [brunoemf@gmail.com](mailto:brunoemf@gmail.com)
