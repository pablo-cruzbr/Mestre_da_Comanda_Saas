
# 🍽️ Mestre da Comanda
## Sistema de Controle de Comandas
## 🚀 Tecnologias Utilizadas

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
  <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" /></a>
</p>

Um sistema completo de **controle de comandas para restaurantes**, desenvolvido com foco em performance, escalabilidade e usabilidade — disponível em **versão Web e Mobile**.

## 🚀 Acesse a Aplicação em Produção (Vercel)
<a href="https://mestre-da-comanda-saas-y5m2.vercel.app/" target="_blank">Clique aqui para Abrir o software em nova aba</a>


## 🖼️ Telas do Sistema

<img width="800" height="400" alt="download (1)" src="https://github.com/user-attachments/assets/05d5e52b-b07f-4062-99a0-0985f3e66887" />
---
### 💻 Web
<img width="800" height="400" alt="download (2)" src="https://github.com/user-attachments/assets/19c4ed7f-562e-4f08-8eb5-937a3efd030d" />
---
### 📱 Mobile
<img  width="800" height="auto"  src="Frontend/src/assets/3.png" alt="Diagrama da arquitetura do sistema" width="900" />
---

## Diagrama de Arquitetura do Sistema: A Fazer

---

## 💡 Sobre o Projeto

O **Mestre da Comanda** foi criado para facilitar o gerenciamento de pedidos em restaurantes, permitindo controlar mesas, produtos e comandas de forma rápida e integrada entre o sistema Web e o aplicativo Mobile.

O sistema permite que garçons e administradores controlem todo o fluxo de pedidos — desde a abertura de uma mesa até a conclusão do pedido.

---

## 🧾 Funcionalidades Principais

### 🖥️ **Versão Web**
- Cadastro de novos usuários  
- Login e autenticação segura  
- Proteção de rotas privadas  
- Exibição dos dados do usuário logado  
- Criação e listagem de categorias  
- Criação e listagem de produtos por categoria  
- Abertura de uma nova **mesa (order)**  
- Adição e remoção de itens da mesa  
- Envio de pedidos (tirar do rascunho)  
- Listagem de pedidos ativos (não em “draft”)  
- Visualização dos detalhes completos de cada mesa  
- Conclusão do pedido  

### 📱 **Versão Mobile**
- Abertura de mesas  
- Seleção de categorias e produtos  
- Escolha de quantidade e envio de pedidos para o sistema Web  

---

## 🧩 Integração Web + Mobile

Os pedidos criados no **app mobile** são sincronizados em tempo real com o **painel web**, permitindo que a cozinha e o caixa acompanhem o andamento de cada comanda.

---


---

## 🧠 Aprendizados e Objetivos

Esse projeto foi desenvolvido com o objetivo de consolidar conhecimentos **Fullstack** utilizando o ecossistema **TypeScript + Prisma + PostgreSQL + React/Next + Express + NodeJs**, explorando conceitos de:
- Autenticação JWT e Context API
- Consumo de APIs REST
- Integração em tempo real Web ↔ Mobile

---
## 💡 Próximos Passos
- Criar nova versão de Desing para o Tailwindcss
- Criar Aba de cardapio de pordutors no dashboard
---
## ⚙️ Como Executar o Projeto

### 🖥️ Web
```bash
# Clone o repositório
git clone https://github.com/seuusuario/mestre-da-comanda.git

# Acesse a pasta do projeto
cd mestre-da-comanda/web

# Instale as dependências
yarn install

# Execute o servidor de desenvolvimento
yarn dev

## ⚙️ Futuras Atualizações
- Criar um Cardápio Digital para os Clientes 
