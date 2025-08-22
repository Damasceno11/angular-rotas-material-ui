# 🌐 Site Moderno com Angular Material

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui)

## 📋 Descrição do Projeto

O **Site Moderno com Angular Material** é uma aplicação desenvolvida em Angular 17 que demonstra a implementação de um sistema de rotas com navegação fluida entre páginas (Home, Sobre, Contato) e tratamento de rotas inexistentes. O projeto utiliza Angular Material para criar uma interface moderna e responsiva.

## 🚀 Funcionalidades

- ✅ Sistema de rotas com navegação entre páginas
- ✅ Layout responsivo com Angular Material
- ✅ Barra de navegação com indicador de rota ativa
- ✅ Página "Não Encontrada" para rotas inexistentes
- ✅ Design moderno e acessível
- ✅ Componentes modulares e reutilizáveis

## 🛠️ Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **Angular Material** - Biblioteca de componentes UI
- **CSS3** - Estilização personalizada
- **HTML5** - Estrutura semântica

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   ├── home.component.css
│   │   │   └── home.component.spec.ts
│   │   ├── about/
│   │   ├── contact/
│   │   └── not-found/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
└── environments/
```

## ⚡ Desafios Técnicos e Soluções

### 🔍 1. Configuração de Rotas no Angular 17

**Problema:** Configurar rotas em aplicação standalone

**Solução Implementada:**
```typescript
// ✅ app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
```

### 🎯 2. Navegação com Angular Material

**Problema:** Criar barra de navegação estilizada com indicador de rota ativa

**Solução:**
```html
<!-- ✅ app.component.html -->
<mat-toolbar color="primary" class="mat-elevation-z4">
  <button mat-icon-button routerLink="/home">
    <mat-icon>home</mat-icon>
  </button>

  <span class="app-title">Meu Site Moderno</span>

  <span class="spacer"></span>

  <nav class="nav-links">
    <button mat-button routerLink="/home" routerLinkActive="active-link">
      <mat-icon>home</mat-icon> Home
    </button>
    <button mat-button routerLink="/about" routerLinkActive="active-link">
      <mat-icon>info</mat-icon> Sobre
    </button>
    <button mat-button routerLink="/contact" routerLinkActive="active-link">
      <mat-icon>contact_mail</mat-icon> Contato
    </button>
  </nav>
</mat-toolbar>

<main class="main-content">
  <router-outlet></router-outlet>
</main>

<footer class="footer">
  <p>© 2025 Meu Site Moderno - Todos os direitos reservados</p>
</footer>
```

### 📱 3. Estilização Responsiva

**Problema:** Garantir que a navegação funcione em diferentes tamanhos de tela

**Solução CSS:**
```css
/* ✅ app.component.css */
.spacer {
  flex: 1 1 auto;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.active-link {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.main-content {
  min-height: calc(100vh - 128px);
  padding: 20px;
}

.footer {
  text-align: center;
  padding: 16px;
  background-color: #f5f5f5;
}

/* Responsividade */
@media (max-width: 768px) {
  .app-title {
    display: none;
  }
  
  .nav-links {
    gap: 5px;
  }
  
  .nav-links button span {
    display: none;
  }
}
```

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/Damasceno11/site-moderno-angular-material.git

# Instale as dependências
npm install

# Execute em modo desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200
```

## 🏗️ Como Foi Desenvolvido

O projeto foi criado com os seguintes comandos Angular CLI:

```bash
ng new site-rotas --standalone --routing --style=css --ssr=false
ng add @angular/material
ng g c pages/home
ng g c pages/about
ng g c pages/contact
ng g c pages/not-found
```

## 🎨 Próximas Melhorias

- [ ] Adicionar animações entre transições de rota
- [ ] Implementar modo escuro/claro
- [ ] Adicionar internacionalização (i18n)
- [ ] Criar formulário funcional na página de contato
- [ ] Adicionar loading entre mudanças de rota

## 📊 Aprendizados do Projeto

Este projeto foi fundamental para consolidar conhecimentos em:

- **Angular 17** e componentes standalone
- **Sistema de rotas** e navegação programática
- **Angular Material** e design system
- **Responsividade** e mobile-first
- **Estruturação** de projetos Angular

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 🙏 Agradecimentos

- **Professor Ralf Lima pelo conhecimento transmitido em JavaScript e pelo apoio durante o aprendizado
- **Blusoft** - Associação das empresas de tecnologia de Blumenau
- **Proway Cursos** pelo treinamento e suporte
- **+Devs2Blu** pela formação intensiva e oportunidade
- **Angular Team** pelo framework incrível

  
---

**Desenvolvido com ❤️ por [Pedro Paulo Damasceno Muniz](https://www.linkedin.com/in/pedro-damasceno-23b330150/)**  
*Contador em transição para a área de tecnologia, participante do +Devs2Blu e estudante de Análise e Desenvolvimento de Sistemas.*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-damasceno-23b330150/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Damasceno11)
