# Indexa Soluções Website

Site institucional em Astro para a Indexa Soluções.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy no GitHub Pages

O deploy está configurado em `.github/workflows/deploy.yml`.

Depois de enviar o repositório para o GitHub:

1. Acesse `Settings > Pages`.
2. Em `Build and deployment`, escolha `GitHub Actions`.
3. Faça push na branch `main`.

Se o site usar domínio próprio, configure o domínio em `Settings > Pages` e defina `PUBLIC_SITE_URL` no workflow ou nas variáveis do repositório.

## Login com Google

Crie um OAuth Client ID no Google Cloud Console:

- Tipo: `Web application`
- Authorized JavaScript origins:
  - `http://localhost:4321`
  - `https://psychedehlic64-cpu.github.io`

Depois, no GitHub, adicione a variável do repositório:

- `Settings > Secrets and variables > Actions > Variables > New repository variable`
- Nome: `PUBLIC_GOOGLE_CLIENT_ID`
- Valor: o Client ID gerado pelo Google, no formato `...apps.googleusercontent.com`

Faça um novo deploy após salvar a variável.
