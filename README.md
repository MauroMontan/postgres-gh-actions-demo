# POSTGRES AND PRISMA ON GITHUB ACTIONS

### instalation
- create a .env file with your port and database_url
```
PORT = 3000

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/mydb?schema=public"
```

- install dependencies:

```bash
npm install
```
- for generating prisma client
```bash
npx prisma generate

```

- crete some test records in database:
```bash
npm run seed
```

- See data with Prisma studio:
```bash
npx prisma studio
```

- run locally:

```bash
npm run dev
```

