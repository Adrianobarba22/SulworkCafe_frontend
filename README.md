# Sulwork Café - Frontend

Frontend desenvolvido em Angular 17 para o desafio técnico Sulwork Café ☕️.

## ✅ Funcionalidades

- Listagem de colaboradores
- Cadastro e edição de colaboradores
- Listagem de itens de café da manhã
- Cadastro e edição de itens
- Validação de CPF

## 🧰 Tecnologias

- Angular 17
- Angular Material
- TypeScript
- Standalone Components
- Responsivo

## 🚀 Como rodar

### Pré-requisitos

- Node.js (versão 20+)
- Angular CLI (`npm install -g @angular/cli`)

### Passos

```bash
cd frontend
npm install
ng serve

Acesse em: http://localhost:4200

🐳 Rodando com Docker

docker build -t sulwork-frontend .
docker run -p 4200:80 sulwork-frontend


📁 Estrutura
src/app/pages: Páginas standalone (listar/cadastrar)

src/app/services: Comunicação com o backend

src/app/models: Interfaces de tipos

✅ Testando com o Postman
📌 1. Endereço base da API
http://localhost:8080/api


📌 2. Endpoints comuns para testar
🔹 Colaboradores
GET /colaboradores

Lista todos os colaboradores

POST /colaboradores

Cadastra um novo colaborador

Exemplo de JSON:
{
  "nome": "João da Silva",
  "cpf": "12345678900"
}

PUT /colaboradores/{id}

Atualiza um colaborador existente

DELETE /colaboradores/{id}

Deleta um colaborador pelo ID


