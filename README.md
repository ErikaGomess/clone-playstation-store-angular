
# 🎮 Clone da PlayStation Store

Este projeto é um clone simples da PlayStation Store desenvolvido com **Angular**. O objetivo principal foi praticar a criação de componentes e a estrutura básica de um projeto Angular, **sem utilização de rotas**.

## 🚀 Tecnologias Utilizadas

- [Angular](https://angular.io/) (versão 19)  
- HTML5  
- CSS3  
- TypeScript

## 🧩 Funcionalidades

- Listagem de jogos (estática)
- Visual de cards com imagem, título e preço
- Layout inspirado na PlayStation Store
- Responsivo básico

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── card/
│   │   │   ├── card-label/
│   │   │   │
│   │   │   └── card-pricing/
│   │   └── menu-bar/
│   ├── pages/
│   │    ├── home/
│   └── app.component.ts
├── assets/
└── index.html
```

## 🛠️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/ErikaGomess/clone-playstation-store-angular
```

2. Navegue até o diretório do projeto:

```bash
cd clone-playstation-store-angular
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5. Acesse `http://localhost:4200/` no seu navegador.

## 📌 Observações

- O projeto **não utiliza rotas Angular**.
- Os dados dos jogos são estáticos (mockados no código).
- Projeto com foco em prática de componentes e estilização.

## 📷 Preview

![Preview do projeto](./assets/preview.png) <!-- adicione uma imagem de exemplo se quiser -->

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar como quiser.

