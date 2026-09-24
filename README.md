# 💰 Poupapp

Aplicação de gerenciamento financeiro desenvolvida com React durante o curso **React: utilizando CSS Modules e Tailwind para estilização de componentes**, da Alura.

O mesmo projeto foi desenvolvido utilizando duas abordagens diferentes de estilização:

- **CSS Modules**
- **Tailwind CSS**

A ideia foi praticar e comparar diferentes formas de estilizar e organizar componentes em uma aplicação React.

## 🚀 Demonstrações

| Versão       | Aplicação                                                       |
| ------------ | --------------------------------------------------------------- |
| CSS Modules  | [Acessar aplicação](https://poupapp-css-modules-pi.vercel.app/) |
| Tailwind CSS | [Acessar aplicação](https://poupapp-tailwind-one.vercel.app/)   |

## 🛠️ Tecnologias

- React
- JavaScript
- Vite
- CSS Modules
- Tailwind CSS
- HTML5
- Git
- GitHub
- Vercel

## 📁 Estrutura do projeto

O repositório contém duas versões da aplicação:

```text
poupapp/
├── css-modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── tailwind/
    ├── src/
    │   ├── components/
    │   ├── assets/
    │   ├── App.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js
```

## 🎨 Abordagens de estilização

### CSS Modules

Na primeira versão, os estilos foram organizados em arquivos `.module.css` específicos para cada componente.

Exemplo:

```jsx
import styles from "./button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};
```

O CSS Modules permite utilizar estilos com escopo local, ajudando a evitar conflitos entre classes de diferentes componentes.

### Tailwind CSS

Na segunda versão, a estilização foi realizada utilizando classes utilitárias do Tailwind CSS diretamente nos componentes.

Exemplo:

```jsx
<button className="flex items-center justify-center gap-2 rounded-full px-6 py-3">
  Adicionar transação
</button>
```

Essa abordagem permite construir os estilos diretamente no JSX utilizando as classes utilitárias fornecidas pelo Tailwind CSS.

## 📚 Conceitos praticados

Durante o desenvolvimento do projeto, foram praticados conceitos como:

- Componentização com React
- Criação de componentes reutilizáveis
- Props
- Renderização de listas com `map()`
- Formatação de valores monetários com `Intl.NumberFormat`
- Formatação de datas
- CSS Modules
- Tailwind CSS
- Classes utilitárias
- Estados de interação como `hover` e `focus`
- Responsividade
- Organização de componentes
- Reutilização de estilos

## 🎯 Objetivo

O objetivo deste projeto foi aprofundar os conhecimentos em estilização de aplicações React e experimentar diferentes estratégias para construção de interfaces.

Além de desenvolver a aplicação, criar as duas versões permitiu praticar a implementação da mesma interface utilizando **CSS Modules** e **Tailwind CSS**.

## 🎓 Curso

Projeto desenvolvido durante o curso:

**React: utilizando CSS Modules e Tailwind para estilização de componentes — Alura**

[Ver curso na Alura](https://cursos.alura.com.br/course/react-css-modules-tailwind-estilizacao-de-componentes)

## 👨‍💻 Autor

**Diego Andrade**

Desenvolvedor Front-end em formação.

- GitHub: [@diegoandradelr](https://github.com/diegoandradelr)
