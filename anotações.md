## NODE

* instalar typescript e criar o comando build com o tsc.
* Para criar o arquivo de configuração do typescript executar o comando: `npx tsc --init `
* No campo comentado: `"rootDir": "./"`, inserimos o caminho que vamos usar como raiz. No caso desse projeto foi incluido o ./src
* E no outdir colocamos o caminho onde ficará o código após o build para JS
* Descomentamos a linha `"moduleResolution": "node"`
* Instalamos `npm i ts-node-dev -D` para executar diretamente nosso codigo ts no terminal, sem a necessidade de buildar antes. Também reinicia a aplicação a cada alteração do nosso código

## REACT
* Criamos a aplicação com Vitejs.dev - `npm create vite@latest`
* Após isso abrir a pasta no terminal e instalar as dependencias com `npm install`
* Deletamos arquivos desnecessários, mantendo apenas os arquivos `main e app` dentro da pasta src 


## MOBILE
* configurar o ambiente:
- Instalar o expo: `npm install -g expo-cli` e verificar se foi instalado com `expo --version`, se o version devolver erro, temos que verificar as variaveis de ambiente
- Instalar o App expo go no celular, com o app instalado e o projeto Expo rodando no seu computador, basta conectar o celular na mesma rede que o computador e ler o QR Code exibido no navegador ou terminal.
- Iniciando a aplicação com o expo `expo init mobile`
- Selecionamos blank(typescript)