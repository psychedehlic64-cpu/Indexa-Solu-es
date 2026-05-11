# Plano de Implementacao - Area do Cliente

## Objetivo

Criar uma area segura para clientes da Indexa Solucoes acessarem projetos, chamados, documentos, faturas, mensagens e historico de atendimento. O painel deve aceitar login com Google e tambem cadastro proprio no banco de dados do site.

## Principios de seguranca

- Usar HTTPS obrigatorio em producao.
- Nao armazenar senhas em texto puro.
- Usar hash forte para senha, como Argon2id ou bcrypt com custo adequado.
- Usar sessoes seguras com cookie `HttpOnly`, `Secure` e `SameSite=Lax` ou `Strict`.
- Proteger formularios e rotas sensiveis contra CSRF.
- Validar e sanitizar todos os dados recebidos no servidor.
- Separar permissoes por papel: cliente, membro interno, administrador e suporte.
- Registrar eventos importantes em auditoria: login, falha de login, troca de senha, download de arquivo, alteracao de dados e envio de documentos.
- Aplicar rate limit em login, cadastro, recuperacao de senha e APIs sensiveis.
- Usar MFA como etapa opcional ou obrigatoria para administradores.
- Seguir LGPD: consentimento, finalidade, minimizacao de dados, politica de retencao e exclusao mediante solicitacao.

## Stack recomendada

Como o site atual e Astro estatico, o painel real deve ser implementado com backend. Duas rotas seguras:

1. Astro + API backend separada
   - Frontend em Astro.
   - Backend em Node.js, NestJS, Fastify ou Express.
   - Banco PostgreSQL.
   - Auth com Auth.js, Lucia Auth ou implementacao propria bem auditada.

2. Plataforma BaaS segura
   - Supabase Auth + PostgreSQL + Row Level Security.
   - Login Google nativo.
   - Cadastro proprio com email/senha.
   - Storage privado para documentos.

Recomendacao inicial: Supabase para acelerar com seguranca, usando RLS, Storage privado, auditoria e funcoes server-side. Se houver necessidade de controle total, migrar para backend proprio em Node.js + PostgreSQL.

## Autenticacao

### Login com Google

- Configurar OAuth no Google Cloud Console.
- Restringir redirect URIs ao dominio oficial.
- Solicitar apenas escopos necessarios: perfil basico e email.
- Vincular conta Google ao usuario interno pelo email verificado.
- Bloquear acesso se o email nao estiver aprovado ou convidado pela Indexa.

### Conta propria

- Cadastro por convite ou aprovacao manual.
- Confirmacao de email obrigatoria.
- Senha minima com criterio de tamanho e bloqueio de senhas comuns.
- Recuperacao de senha por token unico, com expiracao curta.
- Bloqueio temporario apos muitas tentativas falhas.

## Modelo de dados inicial

Tabelas principais:

- `users`: dados basicos do usuario.
- `organizations`: empresa cliente.
- `organization_members`: vinculo usuario-empresa e papel.
- `auth_identities`: provedores de login, como Google e email/senha.
- `projects`: projetos contratados.
- `tickets`: chamados de suporte.
- `ticket_messages`: mensagens dos chamados.
- `documents`: arquivos, contratos e entregaveis.
- `invoices`: faturas e pagamentos.
- `meetings`: reunioes e agendamentos.
- `notifications`: avisos internos do painel.
- `audit_logs`: eventos sensiveis e rastreabilidade.

## Permissoes

Papeis sugeridos:

- `client_owner`: dono da empresa cliente, gerencia usuarios da propria organizacao.
- `client_member`: acessa projetos, chamados e documentos permitidos.
- `indexa_support`: responde chamados e visualiza clientes atribuidos.
- `indexa_admin`: acesso administrativo completo.

Regras:

- Cliente so acessa dados da propria empresa.
- Arquivos devem ter URLs assinadas e expiraveis.
- Toda query sensivel deve filtrar por `organization_id`.
- Administradores devem usar MFA.

## Painel do cliente

Funcoes principais esperadas no mercado:

- Visao geral com projetos ativos, status, prazos e proximas entregas.
- Chamados de suporte com prioridade, status, anexos e historico.
- Mensagens diretas com equipe Indexa.
- Documentos, contratos, propostas, relatorios e entregaveis.
- Financeiro com faturas, recibos, vencimentos e status de pagamento.
- Reunioes, agendamentos e atas.
- Base de conhecimento com artigos e tutoriais.
- Notificacoes sobre prazos, respostas, aprovacoes e pendencias.
- Perfil da empresa, usuarios autorizados e permissoes.
- Historico de atividades e auditoria visivel para administradores da empresa.

## Painel interno da Indexa

Funcoes recomendadas:

- Lista de clientes e empresas.
- Gestao de usuarios e convites.
- Gestao de projetos por status.
- Central de chamados com SLA.
- Upload de documentos e entregaveis.
- Controle financeiro basico.
- Relatorios de atendimento e produtividade.
- Auditoria de eventos.

## Etapas de implementacao

1. Fundacao
   - Definir provedor de backend.
   - Criar banco de dados.
   - Criar tabelas e politicas de acesso.
   - Configurar ambientes: desenvolvimento, homologacao e producao.

2. Autenticacao
   - Login Google.
   - Cadastro proprio com email/senha.
   - Confirmacao de email.
   - Recuperacao de senha.
   - Sessao segura.

3. Controle de acesso
   - Organizacoes.
   - Membros.
   - Papeis.
   - Convites.
   - Regras por empresa.

4. Dashboard MVP
   - Visao geral.
   - Projetos.
   - Chamados.
   - Documentos.
   - Notificacoes.

5. Modulos comerciais
   - Financeiro.
   - Contratos.
   - Propostas.
   - Reunioes.

6. Seguranca e conformidade
   - Rate limit.
   - Logs de auditoria.
   - Backups.
   - Politica de retencao.
   - Testes de permissao.
   - Revisao LGPD.

7. Lancamento
   - Homologacao com usuarios internos.
   - Piloto com poucos clientes.
   - Ajustes de UX.
   - Ativacao gradual para toda a base.

## Checklist antes de producao

- HTTPS ativo.
- Segredos fora do repositorio.
- Backup automatico testado.
- RLS ou filtros multi-tenant testados.
- Logs sensiveis sem senha, token ou dados indevidos.
- Politica de privacidade atualizada.
- Termos de uso da area do cliente.
- Monitoramento de erros.
- Alertas de falhas de login incomuns.
- Plano de resposta a incidentes.

## Decisoes pendentes

- Provedor final de backend: Supabase ou backend proprio.
- Dominio da area do cliente.
- Se cadastro sera aberto, por convite ou por aprovacao manual.
- Se MFA sera obrigatorio para clientes ou apenas administradores.
- Quais dados financeiros serao exibidos no MVP.
- Integracao futura com WhatsApp, email, CRM e sistema de pagamentos.
