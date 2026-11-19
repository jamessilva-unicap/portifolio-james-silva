import type { Metadata } from "next";
import styles from "../content.module.css";
import GithubRepos from "@/components/GithubRepos";

export const metadata: Metadata = { title: "Projetos" };

const projects = [
  {
    number: "01",
    title: "Painel de produtividade",
    description: "Uma interface simples para organizar tarefas, acompanhar prioridades e visualizar o progresso do dia.",
    technologies: ["React", "TypeScript", "CSS"],
    repository: "https://github.com/seu-usuario",
    demo: "https://github.com/seu-usuario",
  },
  {
    number: "02",
    title: "Clima em foco",
    description: "Aplicação de clima com busca por cidade, dados atualizados e uma experiência adaptada a qualquer tela.",
    technologies: ["Next.js", "API REST", "CSS Modules"],
    repository: "https://github.com/seu-usuario",
    demo: "https://github.com/seu-usuario",
  },
  {
    number: "03",
    title: "Loja conceito",
    description: "Experimento de e-commerce com catálogo responsivo, filtros e foco em uma jornada de compra clara.",
    technologies: ["React", "JavaScript", "CSS Grid"],
    repository: "https://github.com/seu-usuario",
    demo: "https://github.com/seu-usuario",
  },
];

export default function ProjetosPage() {
  return (
    <div>
      <header className="page-heading">
        <span className="eyebrow">Projetos selecionados</span>
        <h1>Ideias que saíram do papel.</h1>
        <p>Projetos pessoais e experimentos que mostram como gosto de pensar e construir produtos digitais.</p>
      </header>

      <section>
        <h2 className="section-label">Projetos em destaque <span className={styles.exampleLabel}>Exemplos editáveis</span></h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article className={`card ${styles.projectCard}`} key={project.number}>
              <div className={styles.projectArtwork}>
                <span>{project.number}</span>
                <div className={styles.artworkLines}><i /><i /><i /></div>
                <span className={styles.artworkStar}>✳</span>
              </div>
              <div className={styles.projectDetails}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className={styles.projectLinks}>
                  <a href={project.repository} target="_blank" rel="noreferrer">Repositório ↗</a>
                  <a href={project.demo} target="_blank" rel="noreferrer">Demo ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.githubSection}>
        <div className={styles.githubIntro}>
          <span className="eyebrow">Código aberto</span>
          <h2>Do GitHub, direto pra cá.</h2>
          <p>Os repositórios mais recentes são carregados automaticamente pela API pública do GitHub.</p>
        </div>
        <GithubRepos />
      </section>
      <p className={styles.editNote}>Os projetos em destaque são exemplos. Troque pelos seus repositórios, demos e descrições.</p>
    </div>
  );
}
