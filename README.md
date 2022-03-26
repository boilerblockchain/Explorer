## BLOCK EXPLORER

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## MongoDB

Look at .env.local file for the details:
mongodb+srv://eashan-d:mongobongo@exp-cluster.ymtef.mongodb.net/sample_mflix?retryWrites=true&w=majority
MONGODB_URI = "mongodb+srv://eashan-d:mongobongo@exp-cluster.ymtef.mongodb.net/sample_mflix?retryWrites=true&w=majority"
DB_NAME=sample_mflix

Super Admin Login for DB:
Username: eashan-d
Password: mongobongo

Testing & Monitering done using MongoDB Atlas (https://www.mongodb.com/atlas/database) & MongoDB Compass Application (https://www.mongodb.com/products/compass)


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
