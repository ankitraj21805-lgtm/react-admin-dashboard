export default function TaskList({ tasks }) {
  return (
    <section className="panel">
      <div className="panel-header compact">
        <div>
          <h3>Next Tasks</h3>
          <p>Meaningful GitHub improvements</p>
        </div>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task}>
            <span>✓</span>
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
}
