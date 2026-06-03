export default function StatCard({ stat }) {
  return (
    <article className="stat-card">
      <div className="stat-icon">{stat.icon}</div>
      <p>{stat.title}</p>
      <h3>{stat.value}</h3>
      <small>{stat.change}</small>
    </article>
  );
}
