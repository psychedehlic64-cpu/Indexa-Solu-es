import { defineConfig } from "astro/config";

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubPages = process.env.GITHUB_PAGES === "true" && githubOwner && githubRepository;
const isUserPage = githubRepository?.toLowerCase() === `${githubOwner}.github.io`.toLowerCase();
const site = process.env.PUBLIC_SITE_URL ?? (isGitHubPages ? `https://${githubOwner}.github.io` : "https://indexasolucoes.com.br");

export default defineConfig({
  site,
  ...(isGitHubPages && !isUserPage && !process.env.PUBLIC_SITE_URL ? { base: `/${githubRepository}` } : {}),
  output: "static",
  trailingSlash: "never",
  security: {
    checkOrigin: true
  },
  vite: {
    build: {
      assetsInlineLimit: 2048
    }
  }
});
