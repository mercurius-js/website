import React, { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import css from "./styles.module.css";

interface Project {
  count: number;
  selected: boolean;
  name: string;
}

interface Issue {
  url: string;
  title: string;
  project: {
    name: string;
    url: string;
  };
  labels: string[];
}

interface GoodFirstIssueProps {
  url: string;
}

interface ProjectFilterProps {
  name: string;
  count: number;
  selected: boolean;
  toggle: (selected?: boolean) => void;
}

interface IssueProps {
  url: string;
  title: string;
  project: {
    name: string;
    url: string;
  };
  labels: string[];
}

export default function GoodFirstIssue({ url }: GoodFirstIssueProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [projects, setProjects] = useState<Record<string, Project>>({});
  const [checkAllProjects, setCheckAllProjects] = useState(true);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);

  useEffect(() => {
    setFilteredIssues(checkAllProjects ? issues : []);

    setProjects((prev) => {
      const filteredProjects: Record<string, Project> = {};
      for (const name in prev) {
        filteredProjects[name] = { ...prev[name], selected: checkAllProjects };
      }

      return filteredProjects;
    });
  }, [checkAllProjects, issues]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        const issues: Issue[] = data.results;
        const projects = data.results.reduce(
          (acc: Record<string, Project>, curr: Issue) => {
            acc[curr.project.name] = {
              count: acc[curr.project.name]?.count + 1 || 1,
              selected: true,
              name: curr.project.name
            };
            return acc;
          },
          {}
        );
        const filteredIssues = issues.filter(
          (issue) => projects[issue.project.name].selected
        );

        setIssues(issues);
        setProjects(projects);
        setFilteredIssues(filteredIssues);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData().catch(setError);
  }, [url]);

  if (loading) {
    return (
      <div className="alert alert--secondary" role="alert">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert--danger" role="alert">
        Error: {error.message}
      </div>
    );
  }

  const toggleProject = (name: string, selected?: boolean) => {
    setProjects((prev) => {
      const updatedProjects = { ...prev };
      if (updatedProjects[name]) {
        updatedProjects[name].selected =
          selected ?? !updatedProjects[name].selected;
      }
      return updatedProjects;
    });

    setFilteredIssues(
      issues.filter((issue) => projects[issue.project.name].selected)
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col--4 margin--none">
          <nav className="col-demo item shadow--lw">
            <p className={css.panelHeading}>Projects</p>
            <div className={`avatar margin-bottom--sm ${css.projectItem}`}>
              <input
                type="checkbox"
                checked={checkAllProjects}
                onChange={() => setCheckAllProjects(!checkAllProjects)}
              />
              <div className="avatar__intro">
                <div className="avatar__name">All the projects</div>
                <small className="avatar__subtitle">
                  {issues.length} issues
                </small>
              </div>
            </div>
            <hr />
            {Object.values(projects)
              .sort(byCount)
              .map((project) => (
                <ProjectFilter
                  key={project.name}
                  {...project}
                  toggle={toggleProject.bind(this, project.name)}
                />
              ))}
          </nav>
        </div>
        <div className="col col--8">
          <div className="col-demo">
            <Issues issues={filteredIssues} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectFilter({ name, count, selected, toggle }: ProjectFilterProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggle(e.currentTarget.checked);
  };

  return (
    <div className={`avatar margin-bottom--sm ${css.projectItem}`} key={name}>
      <input type="checkbox" checked={Boolean(selected)} onChange={onChange} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <small className="avatar__subtitle">{count} issues</small>
      </div>
    </div>
  );
}

function Issue({ url, title, project, labels }: IssueProps) {
  return (
    <div className="card-demo margin-bottom--sm" key={url}>
      <div className="card">
        <div className="card__header">
          <div className="avatar">
            <div className="avatar__intro">
              <div className="avatar__name">
                <Link to={url}>{title}</Link>
              </div>
              <small className="avatar__subtitle">
                Project <Link to={project.url}>{project.name}</Link>
              </small>
            </div>
          </div>
        </div>
        <div className="card__footer">
          {labels.map((label) => (
            <span
              key={label}
              className="badge badge--secondary margin-right--xs"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Issues({ issues }: { issues: Issue[] }) {
  if (issues.length === 0) {
    return (
      <div>
        <strong>No issue available 😱</strong>
      </div>
    );
  }
  return issues.map((issue) => <Issue key={issue.url} {...issue} />);
}

function byCount(a: Project, b: Project) {
  return b.count - a.count;
}
