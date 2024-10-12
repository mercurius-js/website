import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <MercuriusInfo />
        </div>
      </div>
    </section>
  );
}

const SnippetCodeInstall = `npm i fastify mercurius graphql
# or
yarn add fastify mercurius graphql
`;

const SnippetCodeQuickstart = `
  "use strict"

  const Fastify = require('fastify')
  const mercurius = require('mercurius')

  const app = Fastify()

  const schema = \`
    type Query {
      add(x: Int, y: Int): Int
    }\`

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

  app.listen({port: 3000 })
`;

export const MercuriusInfo = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h2>Core Features</h2>
      <ul>
        <li>Caching of query parsing and validation.</li>
        <li>Automatic loader integration to avoid 1 + N queries.</li>
        <li>Just-In-Time compiler via graphql-jit.</li>
        <li>Subscriptions.</li>
        <li>
          Federation support via @mercuriusjs/federation, including
          Subscriptions.
        </li>
        <li>
          Gateway implementation via @mercuriusjs/gateway, including
          Subscriptions.
        </li>
        <li>Batched query support.</li>
        <li>Customisable persisted queries.</li>
      </ul>
      <h2>Install</h2>
      <CodeBlock language="bash">{SnippetCodeInstall}</CodeBlock>
      <p>
        The previous name of this module was{" "}
        <a href="http://npm.im/fastify-gql">fastify-gql</a> (&lt; 6.0.0).
      </p>
      <h2>Quick Start</h2>
      <CodeBlock language="js">{SnippetCodeQuickstart}</CodeBlock>
      <h2>Examples</h2>
      <p>
        Check{" "}
        <a href="https://github.com/mercurius-js/mercurius/tree/master/examples">
          GitHub repo
        </a>{" "}
        for more examples.
      </p>
      <h2>Acknowledgements</h2>
      <p>The project is kindly sponsored by:</p>
      <ul>
        <li>
          <a href="https://www.nearform.com">NearForm</a>
        </li>
        <li>
          <a href="https://platformatic.dev">Platformatic</a>
        </li>
      </ul>
      <p>
        The Mercurius name was gracefully donated by{" "}
        <a href="https://github.com/marco-c">Marco Castelluccio</a>. The usage
        of that library was described in{" "}
        <a href="https://hacks.mozilla.org/2015/12/web-push-notifications-from-irssi/">
          this article
        </a>
        , and you can find that codebase in{" "}
        <a href="https://github.com/marco-c/mercurius">this repository</a>.
      </p>
    </div>
  );
};
