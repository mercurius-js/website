import GoodFirstIssue from "../GoodFirstIssue";

export default function ContributeToMercurius() {
  return (
    <section>
      <h1 style={{ fontSize: "48px" }}>Contribute to Mercurius</h1>
      <p>
        Mercurius is a growing and friendly community, and would be lucky to
        have your contributions! 🙇‍♂️
      </p>
      <p>
        Contributions are always welcome, we only ask you follow the{" "}
        <a href="https://github.com/mercurius-js/mercurius/blob/master/CONTRIBUTING.md">
          Contribution Guidelines
        </a>{" "}
        and the{" "}
        <a href="https://github.com/mercurius-js/mercurius/blob/master/CODE_OF_CONDUCT.md">
          Code Of Conduct
        </a>
        .
      </p>
      <p>
        If you don't know where to start you can have a look at the list of{" "}
        <a href="https://github.com/mercurius-js/mercurius/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">
          good first issues
        </a>{" "}
        below.
      </p>
      <h2>Good first issues</h2>
      <GoodFirstIssue url="https://goodfirstissue.fastify.io/api/find-issues?org=mercurius-js" />
    </section>
  );
}
