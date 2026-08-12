import HeroSlider from "@/components/home/HeroSlider";
import HowItWorks from "@/components/home/HowItWorks";
import ChildHome from "@/pages/home/MainPage"
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ChildHome/>
      <HowItWorks />

      <section className="section-block">
        <div className="container">
          <div className="benefit-grid">
            <article className="benefit-card">
              <span className="benefit-icon">◆</span>
              <h2>Simple checkout</h2>
              <p>
                Customers can select a package and enter their
                player information without creating an account.
              </p>
            </article>

            <article className="benefit-card">
              <span className="benefit-icon">QR</                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 span>
              <h2>ABA KHQR payment</h2>
              <p>
                Customers scan your merchant KHQR and pay the
                exact amount displayed at checkout.
              </p>
            </article>

            <article className="benefit-card">
              <span className="benefit-icon">24</span>
              <h2>Clear support flow</h2>
              <p>
                The website generates readable order information
                that the customer sends through Telegram.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}