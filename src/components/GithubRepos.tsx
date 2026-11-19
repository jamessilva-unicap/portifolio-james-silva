import styles from "./GithubRepos.module.css";

type GithubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

async function getRepositories(): Promise<{ repos: GithubRepository[]; username: string; error: boolean }> {
  const username = process.env.GITHUB_USERNAME?.trim() || "seu-usuario";
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(7000),
    });

    if (!response.ok) {
      return { repos: [], username, error: true };
    }

    const data: unknown = await response.json();
    if (!Array.isArray(data)) {
      return { repos: [], username, error: true };
    }

    const repos = (data as GithubRepository[])
      .filter((repo) => repo && !repo.fork && typeof repo.id === "number" && typeof repo.name === "string")
      .slice(0, 6);
    return { repos, username, error: false };
  } catch {
    return { repos: [], username, error: true };
  }
}

export default async function GithubRepos() {
  const { repos, username, error } = await getRepositories();

  return (
    <div className={styles.wrapper}>
      {error ? (
        <div className={styles.message} role="status">
          <span className={styles.messageIcon}>↗</span>
          <div>
            <strong>Não foi possível carregar os repositórios agora.</strong>
            <p>Confira sua conexão ou configure <code>GITHUB_USERNAME</code> no arquivo <code>.env.local</code>.</p>
          </div>
        </div>
      ) : repos.length === 0 ? (
        <div className={styles.message} role="status">
          <span className={styles.messageIcon}>⌘</span>
          <div>
            <strong>Nenhum repositório público encontrado.</strong>
            <p>Verifique o usuário <code>{username}</code> e tente novamente.</p>
          </div>
        </div>
      ) : (
        <div className={styles.repoGrid}>
          {repos.map((repo) => (
            <a className={styles.repoCard} href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
              <div className={styles.repoTop}><span className={styles.repoIcon}>⌘</span><span aria-hidden="true">↗</span></div>
              <h3>{repo.name}</h3>
              <p>{repo.description || "Repositório sem descrição."}</p>
              <div className={styles.repoMeta}>
                <span>{repo.language || "Código aberto"}</span>
                <span aria-label={`${repo.stargazers_count} estrelas`}>☆ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      )}
      <a className={styles.profileLink} href={`https://github.com/${encodeURIComponent(username)}`} target="_blank" rel="noreferrer">
        Ver perfil no GitHub <span>↗</span>
      </a>
    </div>
  );
}
