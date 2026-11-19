import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} James Silva. Feito com intenção.</p>
        <div className={styles.links}>
          <Link href="/projetos">Projetos</Link>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:seuemail@exemplo.com">Contato ↗</a>
        </div>
      </div>
    </footer>
  );
}
