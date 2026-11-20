import type { Metadata } from "next";
import styles from "../content.module.css";
import GithubRepos from "@/components/GithubRepos";

export const metadata: Metadata = { title: "Projetos" };

const projects = [
  {
    number: "01",
    title: "Regularize",
    description: "Projeto voltado à regularização e organização de processos, com foco em dados, acompanhamento e facilidade de uso.",
    technologies: ["Web", "Dados", "Gestão"],
    repository: "https://github.com/jamessilva-unicap",
    demo: "https://github.com/jamessilva-unicap",
  },
  {
    number: "02",
    title: "Gerenciamento de dados do RH",
    description: "Sistema para centralizar e organizar informações de recursos humanos, apoiando consultas e a gestão administrativa.",
    technologies: ["RH", "Dados", "Gestão"],
    repository: "https://github.com/jamessilva-unicap",
    demo: "https://github.com/jamessilva-unicap",
  },
  {
    number: "03",
    title: "Estacione",
    description: "Aplicação para apoiar o controle e a organização de vagas e veículos em um estacionamento.",
    technologies: ["Estacionamento", "Dados", "Gestão"],
    repository: "https://github.com/jamessilva-unicap",
    demo: "https://github.com/jamessilva-unicap",
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
        <h2 className="section-label">Projetos em destaque</h2>
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
    </div>
  );
}
