import type { Metadata } from "next";
import styles from "../content.module.css";

export const metadata: Metadata = { title: "Experiência Profissional" };

const experience = [
  {
    period: "2025 — atual",
    role: "Desenvolvedor(a) Web Júnior",
    company: "Estúdio Digital Exemplo",
    type: "Experiência profissional · Remoto",
    responsibilities: [
      "Desenvolvimento e manutenção de interfaces web responsivas com React e TypeScript.",
      "Colaboração com design e produto para transformar requisitos em experiências acessíveis.",
      "Integração de serviços externos e participação em revisões de código.",
    ],
    impact: "Contribuí para reduzir inconsistências visuais e melhorar a experiência em dispositivos móveis.",
  },
  {
    period: "2024 — 2025",
    role: "Estagiário(a) de Desenvolvimento",
    company: "Tecnologia Exemplo",
    type: "Estágio · Híbrido",
    responsibilities: [
      "Apoio na implementação de funcionalidades para aplicações internas.",
      "Criação de componentes reutilizáveis e documentação técnica.",
      "Correção de defeitos e acompanhamento de testes junto ao time.",
    ],
    impact: "Ajudei a padronizar componentes usados em diferentes áreas do produto.",
  },
];

export default function ExperienciaProfissionalPage() {
  return (
    <div>
      <header className="page-heading">
        <span className="eyebrow">Experiência profissional</span>
        <h1>Aprender, colaborar, entregar.</h1>
        <p>Experiências que fortaleceram minha prática de desenvolvimento e trabalho em equipe.</p>
      </header>

      <section className={styles.experienceList}>
        {experience.map((job, index) => (
          <article className={`card ${styles.experienceCard}`} key={job.role}>
            <div className={styles.experienceAside}>
              <span className={styles.experienceIndex}>0{index + 1}</span>
              <span>{job.period}</span>
            </div>
            <div className={styles.experienceBody}>
              <span className="eyebrow">{job.type}</span>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <ul>
                {job.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              <p className={styles.impact}><strong>Conquista em destaque</strong>{job.impact}</p>
            </div>
          </article>
        ))}
      </section>
      <p className={styles.editNote}>Empresas, datas e resultados são exemplos para edição. Ajuste aos seus dados reais.</p>
    </div>
  );
}
