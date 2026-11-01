import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const links = [
    ["Projetos", "/projetos"],
    ["Sobre", "/sobre"],
    ["Processo", "/processo"],
    ["Contato", "/contato"],
  ];
  return (
    <header className="header">
      <Link className="wordmark" to="/" onClick={() => setOpen(false)}>
        ATELIER <span>STUDIO</span>
        <i>®</i>
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Principal">
        {links.map(([label, url]) => (
          <NavLink
            key={url}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
            to={url}
          >
            {label}
          </NavLink>
        ))}
        <Link
          className="nav-cta"
          to="/contato#briefing"
          onClick={() => setOpen(false)}
        >
          Iniciar um projeto <ArrowUpRight size={13} />
        </Link>
      </nav>
      <span className="header-index">EST. 2018&nbsp; · &nbsp;SÃO PAULO</span>
      {loc.pathname !== "/" && <span className="header-rule" />}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="wordmark">
            ATELIER <span>STUDIO</span>
            <i>®</i>
          </div>
          <p>
            Espaços pensados
            <br />
            para permanecer.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <small>EXPLORE</small>
            <Link to="/projetos">Projetos</Link>
            <Link to="/sobre">Estúdio</Link>
            <Link to="/processo">Processo</Link>
          </div>
          <div>
            <small>CONVERSE</small>
            <Link to="/contato">
              Iniciar um projeto <ArrowUpRight size={13} />
            </Link>
            <a
              href="https://wa.me/5511999990000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ArrowUpRight size={13} />
            </a>
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 ATELIER STUDIO</span>
        <span>ARQUITETURA · INTERIORES · CONSULTORIA</span>
        <a href="#top">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  );
}
export function WhatsApp() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/5511999990000?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
    >
      <span className="wa-dot" />
      Vamos conversar
    </a>
  );
}
