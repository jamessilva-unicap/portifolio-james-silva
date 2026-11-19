"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Formação" },
  { href: "/experiencia-profissional", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <Link className={styles.brand} href="/" aria-label="James Silva, página inicial">
          <span className={styles.brandMark}>JS</span>
          <span>james<span className={styles.brandAccent}>silva</span></span>
        </Link>
        <div className={styles.links}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <a className={styles.contact} href="mailto:seuemail@exemplo.com">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
