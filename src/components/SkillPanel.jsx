export default function SkillPanel({ skills }) {
  return (
    <section className="panel">
      <div className="panel-header compact">
        <div>
          <h3>Skill Matrix</h3>
          <p>Current learning focus</p>
        </div>
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div>
              <span>{skill.name}</span>
              <strong>{skill.level}%</strong>
            </div>
            <div className="progress">
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
