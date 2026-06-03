const filters = ["All", "Live", "Building", "Planned"];

export default function ProjectTable({ projects, activeFilter, onFilterChange }) {
  return (
    <section className="panel project-panel">
      <div className="panel-header">
        <div>
          <h3>Project Pipeline</h3>
          <p>Recruiter-friendly overview of current project status.</p>
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Type</th>
              <th>Status</th>
              <th>Tech</th>
              <th>Progress</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.type}</td>
                <td>
                  <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </td>
                <td>{project.tech}</td>
                <td>
                  <div className="progress">
                    <span style={{ width: `${project.progress}%` }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
