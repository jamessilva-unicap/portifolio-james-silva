import type { Metadata } from "next";
import styles from "../content.module.css";

export const metadata: Metadata = { title: "Experiência Acadêmica" };

const education = [
  {
    period: "2023 — previsão 2027",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Exemplo",
    description: "Formação em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento de aplicações.",
    status: "Em andamento",
  },
  {
    period: "2024",
    title: "Desenvolvimento Web Full Stack",
    institution: "Plataforma de cursos online",
    description: "Trilha prática com fundamentos de interfaces web, APIs, bancos de dados e publicação de aplicações.",
    status: "Concluído",
  },
];

const additional = [
  { title: "Fundamentos de Git e GitHub", organization: "Curso online · 2024" },
  { title: "UI Design e Acessibilidade para Web", organization: "Curso online · 2025" },
  { title: "JavaScript e TypeScript na prática", organization: "Curso online · 2025" },
];

export default function ExperienciaAcademicaPage() {
  return (
    <div>
      <header className="page-heading">
        <span className="eyebrow">Aprendizado contínuo</span>
        <h1>Minha jornada acadêmica.</h1>
        <p>Uma base sólida em computação, complementada por prática e curiosidade constante.</p>
      </header>

      <section>
        <h2 className="section-label">Formação & cursos</h2>
        <div className={styles.timeline}>
          {education.map((item) => (
            <article className={styles.timelineItem} key={item.title}>
              <span className={styles.timelineDot} aria-hidden="true" />
              <div className={`card ${styles.timelineCard}`}>
                <div className={styles.timelineMeta}>
                  <span>{item.period}</span>
                  <span className={styles.status}>{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.additionalSection}>
        <h2 className="section-label">Cursos complementares & certificações</h2>
        <div className={styles.courseGrid}>
          {additional.map((course, index) => (
            <article className={`card ${styles.courseCard}`} key={course.title}>
              <span className={styles.courseNumber}>0{index + 1}</span>
              <h3>{course.title}</h3>
              <p>{course.organization}</p>
            </article>
          ))}
        </div>
      </section>
      <p className={styles.editNote}>Os dados acadêmicos desta página são exemplos editáveis. Substitua pelas suas informações.</p>
    </div>
  );
}
