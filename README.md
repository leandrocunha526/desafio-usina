# 🎥 Biblioteca de Filmes com Recomendações e Avaliações

## Descrição do Projeto

Este é um desafio de desenvolvimento onde você criará uma **Biblioteca de Filmes**. O objetivo é que usuários possam adicionar filmes que já assistiram, avaliar esses filmes e receber recomendações baseadas nas avaliações de outros usuários. O projeto combina funcionalidades de CRUD com recomendações, sendo ideal para demonstrar habilidades em back-end, front-end e banco de dados.

## Funcionalidades

- **CRUD de Filmes**: Adicionar, editar, listar e remover filmes na biblioteca.
- **Avaliações de Filmes**: Usuários podem avaliar filmes de 1 a 5 estrelas.
- **Recomendações**: Recomendações baseadas em avaliações semelhantes feitas por outros usuários.
- **Autenticação de Usuários**: Usuários devem se cadastrar e fazer login para acessar e avaliar os filmes.
- **Pesquisa e Filtragem**: Usuários podem pesquisar por filmes específicos e filtrar por gênero, ano, etc.

## Tecnologias Recomendadas

- **Backend**: Node.js com Express
- **Banco de Dados**: PostgreSQL
- **Frontend**: React ou Angular
- **Autenticação**: JWT para segurança

## Requisitos

1. **Cadastro e Login de Usuários** com autenticação por JWT.
2. **CRUD de Filmes** com os campos:
   - Título do filme
   - Descrição
   - Gênero
   - Ano de lançamento
   - Duração
3. **CRUD de Avaliações** com os campos:
   - Nota de 1 a 5 estrelas
   - Comentário (opcional)
4. **Recomendações**: Listar filmes que foram bem avaliados por outros usuários com perfis de avaliação semelhantes.
5. **Pesquisa e Filtragem**: Filtros para gêneros, ano e outros critérios.

## Critérios de Avaliação

- **Funcionalidade Completa**: Todas as funcionalidades devem estar presentes e funcionando conforme descrito.
- **Organização do Código**: Separação clara entre camadas (controllers, models, serviços).
- **Qualidade do Código**: Código limpo, bem documentado e fácil de entender.
- **Documentação**: O `README.md` deve incluir uma explicação clara de como rodar o projeto.
- **Usabilidade e Design**: Interface intuitiva e agradável para o usuário.

## Instruções para Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/hallslima/desafio-usina.git
   cd desafio-usina

2. Para entregar o desafio, mande um pull request com uma branch no seu nome.
