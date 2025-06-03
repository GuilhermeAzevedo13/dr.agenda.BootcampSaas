# 🩺 Dr. Agenda – Bootcamp SaaS Full Stack Club

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20CSS-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)](https://www.postgresql.org/)

Sistema de agendamento médico desenvolvido como parte do Bootcamp SaaS Full Stack Club.  
Este projeto visa fornecer uma solução completa para clínicas gerenciarem seus agendamentos de forma eficiente.

## 📸 Demonstrações

Adicione capturas de tela das páginas principais do sistema para ilustrar a interface e funcionalidades.

Para adicionar imagens:

1. Crie a pasta `docs/images` no repositório.
2. Salve as imagens com nomes intuitivos (ex: `login.png`, `dashboard.png`).
3. Utilize a sintaxe abaixo para inserir as imagens no README:

```markdown
![Página de Login](docs/images/login.png)

🚀 Tecnologias Utilizadas
Next.js – Framework React para aplicações web.
https://nextjs.org/docs/app/getting-started/installation

TypeScript – Superset do JavaScript com tipagem estática.

Tailwind CSS – Framework CSS utilitário.
https://v2.tailwindcss.com/docs

Drizzle ORM – ORM moderno para TypeScript.
https://orm.drizzle.team/docs/get-started-postgresql

PostgreSQL – Banco de dados relacional.

Zod – Validação de esquemas TypeScript.
https://zod.dev/

Better Auth – Biblioteca de autenticação.
https://www.better-auth.com/

Shadcn UI – Componentes de UI para React.
https://ui.shadcn.com/docs/installation

🧩 Funcionalidades
Cadastro e autenticação de usuários (médicos e pacientes).

Agendamento de consultas com seleção de data e hora.

Painel administrativo para gerenciamento de agendamentos.

Notificações por e-mail para confirmações e lembretes.

Interface responsiva para dispositivos móveis.

📁 Estrutura de Pastas

dr.agenda.BootcampSaas/
├── BD_drawIO/ # Diagramas do banco de dados
├── drizzle/ # Configurações e migrações do Drizzle ORM
├── public/ # Arquivos públicos (imagens, favicon, etc.)
├── src/ # Código-fonte da aplicação
│ ├── app/ # Páginas e rotas da aplicação
│ ├── components/ # Componentes reutilizáveis
│ ├── lib/ # Bibliotecas e utilitários
│ ├── styles/ # Estilos com Tailwind
│ └── types/ # Tipagens do TypeScript
├── .env.example # Exemplo de variáveis de ambiente
├── drizzle.config.ts # Configuração do Drizzle
├── next.config.ts # Configuração do Next.js
├── package.json # Dependências e scripts
├── tailwind.config.ts # Configuração do Tailwind
└── tsconfig.json # Configuração do TypeScript

📅 Roadmap

🛠️ Instalação e Execução

1. Clone o repositório
   git clone https://github.com/GuilhermeAzevedo13/dr.agenda.BootcampSaas.git
   cd dr.agenda.BootcampSaas

2. Instale as dependências
   npm install

# ou

yarn install

# ou

pnpm install

3. Configure o ambiente
   Crie um arquivo .env com base no .env.example e preencha as variáveis conforme sua configuração.

4. Execute as migrações do banco de dados
   Certifique-se que o PostgreSQL está rodando e execute:

- npx drizzle-kit push

5. Inicie o servidor de desenvolvimento

npm run dev

# ou

yarn dev

🧪 Testes

🤝 Contribuição
Contribuições são bem-vindas!
Abra uma issue ou envie um pull request com melhorias ou correções.

📄 Licença

Projeto desenvolvido com 💙 no Bootcamp SaaS Full Stack Club.
```
