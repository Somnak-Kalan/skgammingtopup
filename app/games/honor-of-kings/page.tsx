import Link from "next/link";

export default function HonorOfKingsPage() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "75vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        color: "#ffffff",
        background: "#13181b",
      }}
    >
      <section
        style={{
          width: "min(580px, 100%)",
          padding: "55px 30px",
          textAlign: "center",
          background: "#202629",
          border:
            "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            padding: "7px 12px",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 800,
            textTransform:
              "uppercase",
            background: "#ad465c",
            borderRadius: "6px",
          }}
        >
          Upcoming
        </span>

        <h1
          style={{
            margin: "22px 0 12px",
            fontSize: "35px",
          }}
        >
          Honor of Kings Global
        </h1>

        <p
          style={{
            margin: "0 auto",
            color:
              "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
          }}
        >
          Honor of Kings top-up
          will be available soon.
          Mobile Legends top-up is
          currently available.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent:
              "center",
            marginTop: "28px",
          }}
        >
          <Link
            href="/games"
            style={{
              display:
                "inline-flex",
              minHeight: "44px",
              alignItems: "center",
              padding: "0 20px",
              color: "#ffffff",
              fontWeight: 700,
              textDecoration: "none",
              background: "#30383c",
              borderRadius: "7px",
            }}
          >
            Back to games
          </Link>

          <Link
            href="/games/mlbb"
            style={{
              display:
                "inline-flex",
              minHeight: "44px",
              alignItems: "center",
              padding: "0 20px",
              color: "#ffffff",
              fontWeight: 700,
              textDecoration: "none",
              background: "#22aeee",
              borderRadius: "7px",
            }}
          >
            MLBB Top-Up
          </Link>
        </div>
      </section>
    </main>
  );
}