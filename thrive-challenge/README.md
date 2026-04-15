This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# decision log

- no src directory, for simplicity
- no api endpoint needed as its public api withouh auth
- simplified feature based folder structure to keep it scalable and readable
- created a simple design token system to improve DX and make it easier to keep style consistency.
- added react query key factory to future proof mutations, and allow typesafe invalidations
- removed index page as it didnt have any special content for it, and simulate real app by having pages for each tab, while by keeping URL concistency.
- added react query stale level query to prevent refetch on stale data.

# further prod improvements

- Extract duplicated functionallity to helper functions
- improve reactquery hooks to be more extensable using factories
- better types, folder / directories, etc.
- better const for endpoints/key
- better folder separation inside features (hooks/services/types)
- suspense/ssr improvements
- add a11y
- add testing layer

# AI usage

- pretty much for everything but project setup and some minor manual tweaks
