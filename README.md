# EcoColeta - Pontos de Coleta de Reciclagem

Site simples para gerenciar pontos de coleta de reciclagem.

## Tecnologias Utilizadas

- **ReactJS** com **Vite**
- **React Router Dom** - Navegação entre páginas
- **Bootstrap** - Estilização
- **React Hook Form** - Formulários
- **Axios** - Requisições HTTP

## Estrutura do Projeto

```
src/
├── components/
│   └── Navbar.jsx          # Barra de navegação
├── pages/
│   ├── Home.jsx            # Página inicial
│   ├── PontosColeta.jsx    # Lista de pontos
│   └── CadastrarPonto.jsx  # Formulário de cadastro
├── services/
│   └── api.js              # Serviços de API
└── App.jsx                 # Componente principal
```

## Funcionalidades

- ✅ Página inicial com apresentação
- ✅ Listagem de pontos de coleta
- ✅ Cadastro de novos pontos
- ✅ Navegação entre páginas
- ✅ Formulário com validação
- ✅ Design responsivo com Bootstrap

## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Executar o projeto:
```bash
npm run dev
```

3. Abrir no navegador: http://localhost:5173

## Próximos Passos

- Integrar com API real
- Adicionar mapa para localização
- Implementar busca por localização
- Adicionar mais campos no cadastro