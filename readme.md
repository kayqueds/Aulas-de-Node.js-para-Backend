# Aulas de Back-end Node.js

Este repositório contém materiais e exemplos de aulas sobre desenvolvimento de back-end utilizando Node.js e TypeScript. O objetivo é fornecer um guia prático para a construção de APIs e serviços robustos e escaláveis.




## Configuração e Instalação

Para configurar e executar os projetos contidos neste repositório, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/kayqueds/Aulas-de-Back-end-Node.js
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd Aulas-de-Back-end-Node.js
    ```

3.  **Instale as dependências:**

    Utilize os seguintes comandos para instalar as dependências necessárias do projeto:

    ```bash
    npm i -y
    npm i express
    npm i typescript --save-dev
    npm i ts-node
    npm i nodemon -D
    ```

4.  **Inicialize o TypeScript:**

    Crie o arquivo de configuração `tsconfig.json`:

    ```bash
    npx tsc --init
    ```





## Como Rodar o Projeto

Após a instalação das dependências e a inicialização do TypeScript, você pode rodar os exemplos de código. As instruções específicas para cada aula ou módulo estarão dentro de seus respectivos diretórios.

### Exemplo de Execução (se aplicável)

Para rodar um arquivo TypeScript específico, você pode usar `ts-node` ou compilar para JavaScript e depois executar com `node`.

**Usando `ts-node` (para desenvolvimento):**

```bash
ts-node src/index.ts # ou o caminho para o seu arquivo principal
```

**Usando `nodemon` (para desenvolvimento com auto-reload):**

Configure o `nodemon` para observar as mudanças nos arquivos `.ts` e reiniciar o servidor automaticamente.

```json
// package.json (exemplo de script)
"scripts": {
  "dev": "nodemon src/index.ts"
}
```

Então, execute:

```bash
npm run dev
```

**Compilando e Executando (para produção ou testes):**

```bash
npx tsc # Compila todos os arquivos TypeScript para JavaScript
node dist/index.js # ou o caminho para o seu arquivo JavaScript compilado
```

## Autor

[Kayque D. S.](https://github.com/kayqueds)