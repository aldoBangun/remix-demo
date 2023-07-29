# Aldo Todo

Todo app with Remix.

- [Remix Docs](https://remix.run/docs)

## Setup

```sh
cp .env.example .env 
```

Then edit `DATABASE_URL` with MySQL database URL string that you can get either from local or PlanetScale.

## Development

Use pnpm to handle the dependencies, if it's not installed yet, install using npm:

```sh
npm i -g pnpm
```

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm install
```

Make sure to push the schema to the database every time there's a change in the Prisma schema:

```sh
pnpm db:push
# prisma db push
```

Or you can also generate the schema for Prisma Client, for the app to use:

```sh
pnpm db:gen
# prisma generate
```

Afterwards, start the Remix development server like so:

```sh
pnpm dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

