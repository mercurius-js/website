import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

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
            style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
          />{" "}
        </Heading>
        <p
          className="hero__subtitle"
          style={{ color: "#fff", padding: "0px", margin: "0px" }}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </header>
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
