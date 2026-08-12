const steps = [
  {
    number: "01",
    title: "Choose a package",
    description:
      "Open the MLBB shop and select your preferred diamond package.",
  },
  {
    number: "02",
    title: "Enter player information",
    description:
      "Enter the correct Mobile Legends User ID and Zone ID.",
  },
  {
    number: "03",
    title: "Pay with ABA KHQR",
    description:
      "Scan the merchant QR and pay the exact total displayed on the website.",
  },
  {
    number: "04",
    title: "Send your receipt",
    description:
      "Copy the order details and send them with your receipt through Telegram.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-block section-block-muted">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-kicker">ORDER PROCESS</span>
          <h2>How the manual top-up works</h2>
          <p>
            The first release uses a simple and clear manual verification
            process.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}