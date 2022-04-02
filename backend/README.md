<h3>:computer: Rodando o Backend</h3>

<h6>Para que o projeto funcione corretamente, siga todos os passos disponibilizados abaixo.</h6>

<h4>Instalando Dependencias</h4>

```
npm install
```

**Configurar .env Local**
<h6>Para que o projeto funcione adequadamente, é necessário criar um arquivo ".env" na raiz do backend, e adicionar os mesmos atributos impostos no arquivo  ".env.example"</h6>

```
DB_NAME=school_db
DB_USERNAME=root
DB_PASSWORD=root
DB_PORT=5432
DB_HOST=localhost
API_PORT=4000
DATABASE_URL=postgres://root:root@localhost:5433/school
ENTITIES=src/entities/**/*.ts
MIGRATIONS=src/database/migrations/**/*.ts
```

**Construir o Projeto**

```
docker-compose up --build
```

**Rodando o Projeto**

```
docker-compose up
```

**Acessando a Documentação da API( Swagger )**

http://localhost:4000/docs/
