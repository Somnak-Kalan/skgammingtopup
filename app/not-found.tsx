import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <span className="not-found-code">404</span>

        <h1>Page not found</h1>

        <p>
          The page may have moved or the game is not available
          yet.
        </p>

        <Link href="/" className="primary-button">
          Return home
        </Link>
      </div>
    </section>
  );
}