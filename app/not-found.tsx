import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section section--dark" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="eyebrow eyebrow--on-dark" style={{ justifyContent: "center" }}>
          404
        </p>
        <h1 style={{ color: "#fff", fontSize: "var(--fs-h1)", marginTop: 16 }}>Page Not Found</h1>
        <p className="lead" style={{ margin: "16px auto 0", textAlign: "center" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 16 }}>
          <Button href="/" variant="on-dark">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
