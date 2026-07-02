# Docker - CtrlFin

Este arquivo descreve como gerar, executar e publicar as imagens Docker do frontend `ctrlfin5-client` e do backend `server-pessoais/ctrlfin`.

## Imagens criadas

- `ctrlfin-client:local`: build de produção do Angular servido por nginx em `/admin/`.
- `ctrlfin-api:local`: API LoopBack/Node exposta na porta `21032`.

## Build das imagens localmente

```bash
docker compose -f docker-compose.ctrlfin.yml build
```

Também é possível construir cada imagem separadamente:

```bash
docker build -t ctrlfin-client:local ./ctrlfin5-client
docker build -t ctrlfin-api:local ./server-pessoais/ctrlfin
```

## Execução local

```bash
docker compose -f docker-compose.ctrlfin.yml up
```

Após subir os containers:

- Frontend: <http://localhost:8080/admin/>
- Backend/API: <http://localhost:21032/api/>
- Explorer LoopBack: <http://localhost:21032/visao/>

O nginx do frontend encaminha chamadas para `/api/` para o serviço `ctrlfin-api:21032` dentro da rede do Compose.

## Publicação em `163.245.202.80`

A publicação é feita pelo workflow GitHub Actions `.github/workflows/deploy-ctrlfin.yml`.

O workflow é manual (`workflow_dispatch`) e faz o seguinte:

1. Constrói `ctrlfin-api:latest` a partir de `server-pessoais/ctrlfin`.
2. Constrói `ctrlfin-client:latest` a partir de `ctrlfin5-client` com `BASE_HREF=/admin/`.
3. Exporta as duas imagens em `ctrlfin-images.tar.gz`.
4. Envia o arquivo e `docker-compose.ctrlfin.prod.yml` por SSH para `163.245.202.80:/opt/ctrlfin`.
5. Executa `docker load` e reinicia os serviços com Docker Compose no servidor.

### Secrets necessários no GitHub

Configure estes secrets no repositório:

- `DEPLOY_SSH_USER`: usuário SSH para acessar `163.245.202.80`.
- `DEPLOY_SSH_PRIVATE_KEY`: chave privada SSH com acesso ao servidor.
- `DEPLOY_SSH_PORT`: porta SSH do servidor. Opcional; se não existir, o workflow usa `22`.

### Pré-requisitos no servidor

O servidor `163.245.202.80` precisa ter:

- Docker instalado.
- Plugin `docker compose` disponível.
- Usuário configurado no secret `DEPLOY_SSH_USER` com permissão para executar Docker.
- Diretório `/opt/ctrlfin` gravável pelo usuário de deploy, ou permissão para criá-lo.

### Como publicar

No GitHub, execute manualmente o workflow **Deploy CtrlFin Docker images**.

Após a publicação:

- Frontend: <http://163.245.202.80:8080/admin/>
- Backend/API: <http://163.245.202.80:21032/api/>
- Explorer LoopBack: <http://163.245.202.80:21032/visao/>
