# Portfólio pessoal

Portfólio responsivo em português, criado com Next.js App Router e TypeScript. Inclui páginas de apresentação, biografia, formação, experiência profissional e projetos, além de uma lista de repositórios públicos carregada da API do GitHub.

## Tecnologias

- Next.js 15, React 19 e TypeScript
- CSS Modules e variáveis CSS
- GitHub REST API (repositórios públicos)
- App Router, Server Components e `next/link`

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
```

Configure o usuário do GitHub para exibir seus repositórios:

```bash
Copy-Item .env.example .env.local
```

Edite `.env.local` e informe `GITHUB_USERNAME=seu-usuario`. A integração lista até seis repositórios públicos, ordenados pela atualização. Se a variável não estiver configurada ou a API estiver indisponível, a página mostra uma mensagem de fallback sem interromper o restante do site.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para validar a compilação de produção, execute `npm run build`; para servir o build, use `npm start`.

## Personalização

Atualize o título, resumo, links e informações de formação/experiência com seus dados reais. Os dados acadêmicos, experiências e projetos em destaque foram incluídos como exemplos editáveis. Atualize os links sociais em `src/components/Navbar.tsx`, `src/components/Footer.tsx` e `src/app/page.tsx`.
