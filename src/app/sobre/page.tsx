import type { Metadata } from "next";
import styles from "../content.module.css";

export const metadata: Metadata = { title: "Sobre" };

const technologies = [
  { group: "Fundação", items: ["Next.js 15", "React 19", "TypeScript 5", "Node.js", "npm"] },
  { group: "Web e estilo", items: ["CSS3", "CSS Modules", "Variáveis CSS", "Flexbox", "CSS Grid", "Media Queries"] },
  { group: "Framework e APIs", items: ["Next.js App Router", "React Server Components", "React Client Components", "GitHub REST API", "Fetch API"] },
  { group: "Módulos e recursos", items: ["next/link", "next/navigation (usePathname)", "next (Metadata)", "React (ReactNode)", "ES Modules", "HTML semântico"] },
];

export default function SobrePage() {
  return (
    <div>
      <header className="page-heading">
        <span className="eyebrow">Sobre mim</span>
        <h1>Curiosidade que vira criação.</h1>
        <p>Um pouco da minha trajetória, do que me move e das ferramentas por trás deste espaço.</p>
      </header>

      <section className={styles.bio}>
        <div className={styles.bioMark}>JS<span>✳</span></div>
        <div>
          <h2>Prazer, sou James Silva.</h2>
          <p>
            Sou estudante de Ciência da Computação e desenvolvedor(a) em formação, movido(a) pela vontade de
            entender como as coisas funcionam — e de construir soluções que façam diferença. Tenho explorado
            desenvolvimento web de ponta a ponta, desde interfaces acessíveis até a integração com serviços.
          </p>
          <p>
            Acredito em código claro, colaboração e aprendizado contínuo. Fora do editor, gosto de trocar ideias,
            estudar tendências e transformar desafios em projetos que posso compartilhar.
          </p>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.sectionIntro}>
          <span className="eyebrow">Por dentro deste projeto</span>
          <h2>Tecnologias & ferramentas</h2>
          <p>Inventário completo das tecnologias, bibliotecas, APIs e recursos usados na aplicação.</p>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((category) => (
            <article className={`card ${styles.techCard}`} key={category.group}>
              <h3>{category.group}</h3>
              <ul className="tag-list">
                {category.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
