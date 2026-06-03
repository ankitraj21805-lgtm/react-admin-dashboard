export default function Header({ onMenuClick }) {
  return (
    <header className="top-header">
      <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">
        ☰
      </button>

      <div>
        <h2>Dashboard Overview</h2>
        <p>Track project quality, repo cleanup and frontend learning progress.</p>
      </div>

      <div className="profile-chip">
        <span>AS</span>
        <div>
          <strong>Ankit Sharma</strong>
          <small>Frontend Developer</small>
        </div>
      </div>
    </header>
  );
}
