# go.arch — Luxury Architecture & Design Studio

Landing page moderna em Dark Mode para escritório de arquitetura e design de luxo, inspirada na estética minimalista go.arch com linhas de grade verticais, acabamentos metálicos em ouro e tipografia arquitetônica refinada.

---

## 🚀 Como Publicar no GitHub e Netlify

### Passo 1: Enviar o Projeto para o GitHub

1. No terminal do seu computador (dentro da pasta do projeto), inicialize o Git:
```bash
git init
git add .
git commit -m "feat: landing page go.arch de luxo pronta para produção"
```

2. Crie um novo repositório no seu [GitHub](https://github.com/new) (por exemplo: `goarch-architecture`).

3. Conecte o repositório local ao GitHub e envie:
```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/goarch-architecture.git
git push -u origin main
```

---

### Passo 2: Hospedar no Netlify (Implantação Automática em 1 Minuto)

1. Acesse o [Netlify](https://app.netlify.com/) e faça login com sua conta do GitHub.
2. Clique no botão **"Add new site"** > **"Import an existing project"**.
3. Selecione o provedor **GitHub** e escolha o repositório que você acabou de criar (`goarch-architecture`).
4. O Netlify detectará automaticamente as configurações através do arquivo `netlify.toml` já incluído:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em **"Deploy go-arch-luxury-architecture"**.
6. Pronto! Seu site estará online com HTTPS gratuito e URL personalizada (ex: `https://goarch-studio.netlify.app`).
   - A cada novo `git push` no GitHub, o Netlify atualizará o site automaticamente!

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** para empacotamento ultrarrápido
- **Tailwind CSS v4** para design responsivo e refinado
- **Lucide Icons** para ícones arquitetônicos
- **Barlow Condensed** & **Plus Jakarta Sans** (Google Fonts)

---

## 📁 Estrutura de Arquivos Principais

```
├── netlify.toml          # Configuração de build, cache e rotas SPA do Netlify
├── public/
│   ├── _redirects        # Regra de redirecionamento 200 do Netlify para SPA
│   └── assets/           # Imagens e ativos estáticos
├── src/
│   ├── components/       # Componentes modulares (Hero, About, Portfolio, etc.)
│   ├── data/content.ts   # Dados de projetos, serviços, clientes e métricas
│   ├── types.ts          # Tipagens TypeScript
│   ├── index.css         # Estilos globais e utilitários de arquitetura
│   └── App.tsx           # Ponto de entrada da aplicação
└── package.json          # Dependências e scripts de execução
```
