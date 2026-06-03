import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import ProjectTable from "./components/ProjectTable.jsx";
import SkillPanel from "./components/SkillPanel.jsx";
import TaskList from "./components/TaskList.jsx";
import { stats, projects, tasks, skills } from "./data.js";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <div className="app-shell">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="main-content">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <section className="hero-card">
          <div>
            <p className="eyebrow">React Project Dashboard</p>
            <h1>Developer Progress Dashboard</h1>
            <p>
              A responsive React dashboard built to track projects, tasks, skills,
              and GitHub cleanup progress.
            </p>
          </div>

          <a
            className="primary-btn"
            href="https://github.com/ankitraj21805-lgtm"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </section>

        <section className="stats-grid">
          {stats.map((item) => (
            <StatCard key={item.title} stat={item} />
          ))}
        </section>

        <section className="content-grid">
          <ProjectTable
            projects={filteredProjects}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="side-panels">
            <SkillPanel skills={skills} />
            <TaskList tasks={tasks} />
          </div>
        </section>
      </main>
    </div>
  );
}
