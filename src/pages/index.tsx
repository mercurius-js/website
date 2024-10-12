import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import GitHubButton from "react-github-btn";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ background: "#283339" }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img
            src="https://raw.githubusercontent.com/mercurius-js/graphics/main/mercurius-horizontal.svg"
            alt="Mercurius Logo"
            style={{ width: "100%", maxWidth: "600px", marginBottom: "10px" }}
          />{" "}
        </Heading>
        <p
          className="hero__subtitle"
          style={{ color: "#fff", padding: "0px", margin: "0px" }}
        >
          {siteConfig.tagline}
        </p>
        <ButtonGithub />
      </div>
    </header>
  );
}

export function ButtonGithub() {
  return (
    <div style={{ marginTop: "20px" }}>
      <GitHubButton
        href="https://github.com/mercurius-js/mercurius"
        data-icon="octicon-star"
        aria-label="Star Mercurius on GitHub"
        data-size="large"
        data-show-count="true"
      >
        Star
      </GitHubButton>
      &nbsp; &nbsp;
      <GitHubButton
        href="https://github.com/mercurius-js/mercurius/fork"
        data-icon="octicon-repo-forked"
        aria-label="Fork Mercurius on GitHub"
        data-size="large"
      >
        Fork
      </GitHubButton>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="mercurius">
      <HomepageHeader />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
