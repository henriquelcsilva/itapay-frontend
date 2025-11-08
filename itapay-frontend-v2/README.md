# 🏦 ItaPay Frontend

Frontend da plataforma ItaPay - Banking digital para brasileiros nos EUA.

## 🎨 Design

- ✅ Paleta: **Verde**, **Branco** e **Amarelo**
- ✅ Inspirado no design da Unit.co
- ✅ Sidebar escuro com navegação
- ✅ Cards com sombras suaves
- ✅ Layout limpo e profissional

## 🚀 Como Rodar Localmente

### 1. Instalar Dependências

```bash
npm install
```

### 2. Rodar o Projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🌐 Deploy na Vercel (3 minutos)

### Passo 1: Criar Conta Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Use sua conta GitHub ou Google
4. **É GRÁTIS** para sempre (MVPs)

### Passo 2: Instalar Vercel CLI

Abra o terminal na pasta do projeto e digite:

```bash
npm install -g vercel
```

### Passo 3: Fazer Login

```bash
vercel login
```

Vai abrir o navegador para você confirmar.

### Passo 4: Deploy

```bash
vercel
```

**Perguntas que aparecerão:**

```
? Set up and deploy "itapay-frontend"? 
  → Pressione ENTER (Yes)

? Which scope do you want to deploy to?
  → Pressione ENTER (seu usuário)

? Link to existing project?
  → Digite: n (No)

? What's your project's name?
  → Pressione ENTER (itapay-frontend)

? In which directory is your code located?
  → Pressione ENTER (./)
```

**Pronto!** ✅

Vercel vai te dar um link tipo:
```
https://itapay-frontend-xxx.vercel.app
```

### Passo 5: Deploy em Produção (Domínio Final)

```bash
vercel --prod
```

Agora você terá o link definitivo!

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout com Sidebar
│   ├── page.tsx            # Dashboard (home)
│   ├── cards/
│   │   └── page.tsx        # Página de Cards
│   └── payees/
│       └── page.tsx        # Página de Payees
│
├── components/
│   ├── Sidebar.tsx         # Navegação lateral
│   ├── Button.tsx          # Botão customizado
│   └── Card.tsx            # Cards reutilizáveis
│
└── lib/
    ├── utils.ts            # Funções utilitárias
    └── mockData.ts         # Dados de demonstração
```

---

## 🎨 Páginas Criadas

### 1. Dashboard (/)
- ✅ Informações da conta
- ✅ Saldo disponível
- ✅ Routing/Account number
- ✅ Cards vinculados
- ✅ Atividade recente (transações)

### 2. Cards (/cards)
- ✅ Lista de todos os cartões
- ✅ Tabela com detalhes
- ✅ Status de cada card

### 3. Payees (/payees)
- ✅ Lista de destinatários
- ✅ Dados bancários
- ✅ Tipo de conta

---

## 🎨 Paleta de Cores

### Verde (Primary)
- `primary-500`: #22c55e (botões, destaques)
- `primary-600`: #16a34a (hover)
- `primary-700`: #15803d

### Amarelo (Accent)
- `accent-500`: #eab308 (badges, alertas)
- `accent-600`: #ca8a04

### Cinza (Dark)
- `dark-800`: #1f2937 (sidebar)
- `dark-900`: #111827 (textos)

---

## ⚠️ Dados Mockados

**IMPORTANTE:** Os dados exibidos são **falsos** (mockados).

Arquivo: `src/lib/mockData.ts`

Quando conectar ao backend (Bloco 2), esses dados virão do banco de dados real.

---

## 🔄 Atualizar Deploy

Sempre que fizer mudanças:

```bash
# Salvar mudanças
git add .
git commit -m "Descrição da mudança"

# Deploy automático (se conectou GitHub)
# OU deploy manual:
vercel --prod
```

---

## 🆘 Problemas Comuns

### Erro: "command not found: vercel"
**Solução:** Rode `npm install -g vercel` novamente

### Erro ao fazer deploy
**Solução:** Rode `vercel logout` e depois `vercel login`

### Site não atualiza
**Solução:** Limpe cache do navegador (Ctrl+Shift+R)

---

## 📱 Responsivo

O frontend é **totalmente responsivo**:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

---

## 🔐 Próximos Passos

Para transformar em produto completo:

1. **Backend (Bloco 2)**
   - Criar API REST
   - Conectar com BaaS (Column)
   - Banco de dados

2. **KYC (Bloco 3)**
   - Integração Sumsub
   - Upload de documentos
   - Verificação de identidade

3. **Funcionalidades Adicionais**
   - Autenticação (login/logout)
   - Nova transferência
   - Histórico completo
   - Notificações

---

## 🎯 Link do Projeto

Após deploy, seu link será:
```
https://itapay-frontend-[seu-usuario].vercel.app
```

Compartilhe com investidores! 🚀

---

## 📞 Suporte

Dúvidas sobre Vercel: https://vercel.com/docs
Dúvidas sobre Next.js: https://nextjs.org/docs

---

**Feito com 💚 para o ItaPay**
