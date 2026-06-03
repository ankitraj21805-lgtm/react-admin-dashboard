const navItems = [
  "Dashboard",
  "Projects",
  "Skills",
  "Tasks",
  "GitHub",
  "Settings",
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="brand">
          <span className="brand-logo">A</span>
          <div>
            <strong>Ankit.dev</strong>
            <small>React Dashboard</small>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item, index) => (
            <a key={item} className={index === 0 ? "active" : ""} href="#!">
              <span>{index + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-card">
          <p>Open to Frontend, React, Web Developer and Junior Full Stack roles.</p>
        </div>
      </aside>

      <button
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
        aria-label="Close sidebar"
      />
    </>
  );
}
