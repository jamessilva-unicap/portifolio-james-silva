"use client";

import styles from "./error.module.css";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.error} role="alert">
      <span className="eyebrow">Algo não saiu como esperado</span>
      <h1>Não foi possível carregar esta página.</h1>
      <p>Tente novamente. Se o problema continuar, volte mais tarde.</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}
