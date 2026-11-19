import Link from "next/link";
import styles from "./home.module.css";

const highlights = [
  { value: "3+", label: "anos aprendendo e criando" },
  { value: "12", label: "projetos desenvolvidos" },
  { value: "100%", label: "curiosidade por tecnologia" },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className="eyebrow">Disponível para novas oportunidades</span>
          <h1>
            Olá, eu sou <span>James Silva.</span>
            <br />
            Transformo ideias em experiências digitais.
          </h1>
          <p className={styles.role}>Desenvolvedor(a) Full Stack <span>·</span> Estudante de Ciência da Computação</p>
          <p className={styles.summary}>
            Sou uma pessoa apaixonada por tecnologia e por resolver problemas com código. Crio experiências web
            intuitivas, acessíveis e bem construídas — sempre aprendendo algo novo pelo caminho.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/projetos">Ver meus projetos <span>↗</span></Link>
            <a className={styles.secondaryAction} href="mailto:seuemail@exemplo.com">Entre em contato</a>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="mailto:seuemail@exemplo.com">Email <span>↗</span></a>
          </div>
        </div>
        <div className={styles.visual} aria-label="Cartão de apresentação de James Silva">
          <div className={styles.visualOrb} />
          <div className={styles.visualCard}>
            <div className={styles.cardTop}><span>PORTFÓLIO / 2026</span><span>✳</span></div>
            <div className={styles.avatar}>JS</div>
            <p className={styles.cardName}>James Silva<br /><span>desenvolvedor(a)</span></p>
            <div className={styles.cardBottom}><span>BRASIL</span><span>✦ 01 — 05</span></div>
          </div>
          <span className={styles.floatingNote}>Construindo<br />com propósito <span>↘</span></span>
        </div>
      </section>

      <section className={styles.highlights} aria-label="Destaques">
        {highlights.map((item) => (
          <article className={styles.highlight} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className={styles.nextStep}>
        <div>
          <span className="eyebrow">Um pouco mais sobre mim</span>
          <h2>Boas ideias merecem ser bem executadas.</h2>
        </div>
        <Link href="/sobre" className={styles.textLink}>Conheça minha história <span>↗</span></Link>
      </section>
    </div>
  );
}
