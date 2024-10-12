# Getting Started

Hello! Thank you for checking out Mercurius!

This document is intended to be a light introduction to the Mercurius is a GraphQL adapter for Fastify and its features.

Let's start!

## Install

Install with npm:

```bash
npm i fastify mercurius graphql
```

Install with yarn:

```bash
yarn add fastify mercurius graphql
```

## Your first server with Mercurius

Let's write our first server with mercurius:

```js
'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

app.register(mercurius, {
  schema,
  resolvers
})

app.get('/', async function (req, reply) {
  const query = '{ add(x: 2, y: 2) }'
  return reply.graphql(query)
})

app.listen({ port: 3000 })
```
