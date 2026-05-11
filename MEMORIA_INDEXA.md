# Memoria Viva - Indexa Solucoes

Este arquivo guarda as informacoes essenciais da Indexa Solucoes para orientar decisoes de design, conteudo, tecnologia e implementacao. Ele deve ser atualizado sempre que novas definicoes forem tomadas.

## Dados da empresa

- Nome: Indexa Solucoes.
- Localizacao: Joinville, Santa Catarina.
- Atendimento: online para qualquer regiao.
- Dominio: ainda nao comprado, mas ja verificado como disponivel.
- Hospedagem planejada: Hostinger Cloud.
- Contatos principais: WhatsApp e email.

## Oferta principal

A Indexa Solucoes atua como parceira estrategica para diagnosticar dores, otimizar processos e resolver problemas complexos de negocios por meio de consultoria, tecnologia, servicos personalizados e execucao qualificada.

Foco atualizado:

- Solucoes empresariais para gestao.
- Organizacao e automacao de financeiro, RH, vendas e atendimento.
- Solucoes tecnologicas de TI.
- Infraestrutura, seguranca de rede, nuvem, CRM e suporte tecnico.
- Desenvolvimento de sistemas, aplicativos, sites e integracoes.
- Automacoes, agentes, bots e inteligencia artificial.
- Terceirizacao qualificada e apoio operacional.
- Consultoria e estrategia para diagnostico de gargalos, riscos e oportunidades.
- Criacao de sites profissionais.
- Google Meu Negocio.
- SEO local.

## Publico-alvo

- Pequenas empresas locais.
- Prestadores de servico.
- Negocios que precisam aparecer melhor no Google.
- Empresas que querem melhorar atendimento, captacao de clientes e processos internos.
- Clientes que valorizam clareza, confianca e suporte.

## Posicionamento

A marca deve transmitir:

- Credibilidade.
- Confianca.
- Elegancia.
- Clareza.
- Seguranca.
- Profissionalismo.
- Tecnologia acessivel.
- Visao estrategica.
- Capacidade de diagnostico.
- Resolucao de problemas complexos.

Tom desejado:

- Premium corporativo.
- Confortavel.
- Consultivo.
- Sem pressao excessiva.
- Sem linguagem agressiva de vendas.

## Identidade visual

Direcao definida:

- Identidade criada do zero.
- Estilo premium corporativo.
- Visual moderno, limpo e confiavel.
- Logo avancado, profissional e vetorial.

Paleta base sugerida:

- Grafite profundo.
- Azul petroleo.
- Verde teal.
- Cinza claro.
- Branco quente.

Observacoes:

- Evitar visual generico.
- Evitar excesso de neon.
- Evitar aparencia informal demais.
- Priorizar composicao elegante, espacamento, contraste e tipografia refinada.

## Experiencia do site

O site deve:

- Gerar confianca logo no primeiro contato.
- Explicar servicos empresariais e tecnologicos sem excesso de jargoes tecnicos.
- Ter varios CTAs suaves e naturais.
- Ser rapido, seguro e responsivo.
- Funcionar muito bem em mobile.
- Reforcar a presenca em Joinville sem limitar o atendimento a regiao.
- Posicionar a Indexa como parceira estrategica, nao apenas fornecedora de sites.

CTAs preferidos:

- Solicitar diagnostico estrategico.
- Falar com a Indexa.
- Ver oportunidades para minha empresa.
- Quero entender meu principal gargalo.
- Receber uma proposta.
- Entender qual solucao faz sentido.
- Conversar pelo WhatsApp.

## Decisoes tecnicas

Stack recomendada:

- Astro.
- TypeScript.
- CSS proprio com tokens de marca na primeira versao.
- Tailwind CSS continua previsto para evolucoes se fizer sentido.
- shadcn/ui quando necessario.
- Lucide Icons quando forem adicionados controles ou icones de interface.
- SVG proprio para logo e assets vetoriais da marca.

Infraestrutura recomendada:

- Hostinger Cloud.
- Cloudflare como DNS/CDN/WAF.
- HTTPS obrigatorio.
- Protecao DDoS via Cloudflare.
- Formularios protegidos contra spam.
- Headers de seguranca.

Implementado na primeira versao:

- Projeto Astro estatico.
- Layout base com SEO e Schema.org.
- Home inicial.
- Header e footer.
- Logo vetorial inicial em SVG.
- Favicon SVG.
- Hero visual reposicionado para diagnostico, processos e tecnologia.
- CSS responsivo com identidade premium corporativa.
- Robots.txt.

Atualizacao de posicionamento:

- Hero atual: Problemas complexos. Solucoes sob medida.
- Site reposicionado para consultoria, tecnologia, solucoes empresariais, IA, automacoes, seguranca, sistemas e terceirizacao qualificada.
- A composicao do hero foi refeita para abandonar o layout de texto a esquerda com visual decorativo a direita.
- O hero agora usa uma abertura central premium sem componente visual adicional abaixo do texto principal.
- Abaixo do hero foi adicionada uma barra horizontal em rolagem com tecnologias, empresas e frameworks, usando logos via Simple Icons CDN quando disponiveis.

Arquivos principais:

- `src/pages/index.astro`.
- `src/layouts/BaseLayout.astro`.
- `src/components/BrandLogo.astro`.
- `src/components/Header.astro`.
- `src/components/Footer.astro`.
- `src/components/HeroVisual.astro`.
- `src/styles/global.css`.
- `public/favicon.svg`.

## SEO

Foco inicial:

- Joinville, Santa Catarina.
- Atendimento online nacional.
- Pequenas empresas locais.
- Criacao de sites.
- Google Meu Negocio.
- Automacoes para negocios.
- Bots e agentes.

Palavras-chave iniciais:

- criacao de sites em Joinville.
- agencia de sites em Joinville.
- Google Meu Negocio Joinville.
- otimizacao Google Meu Negocio.
- automacao para pequenas empresas.
- bots para atendimento.
- criacao de aplicativos para empresas.
- solucoes digitais para pequenas empresas.

## Informacoes pendentes

Atualizar quando definido:

- Dominio final.
- Numero de WhatsApp.
- Email principal.
- Redes sociais.
- CNPJ.
- Endereco fisico, se houver.
- Nome do responsavel.
- Servicos prioritarios da primeira versao.
- Cases, depoimentos ou portfolio.
- Preferencias finais de logo.
- Textos institucionais aprovados.

## Regras de continuidade

- Antes de implementar novas partes do site, consultar este arquivo.
- Atualizar este arquivo quando houver nova decisao de marca, conteudo, arquitetura ou infraestrutura.
- Manter o tom premium corporativo em todas as paginas.
- Priorizar confianca e clareza sobre efeitos visuais exagerados.
- Nao adicionar novas tecnologias sem motivo real.
