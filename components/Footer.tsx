import Link from "next/link";
import { Logo } from "./Logo";
import { SERVICE_CARDS, INDUSTRY_CARDS } from "@/content/routes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo variant="light" />
          <p className="footer__tagline">Grow Fast. Zap Ahead.</p>
          <p className="footer__blurb">
            A full-service digital marketing agency helping small and growing businesses
            get found, get chosen, and grow — through SEO, paid ads, content, and design.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            {SERVICE_CARDS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="footer__link">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Industries</h3>
          <ul className="footer__list">
            {INDUSTRY_CARDS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="footer__link">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__list">
            <li>
              <Link href="/about" className="footer__link">About Us</Link>
            </li>
            <li>
              <Link href="/case-studies" className="footer__link">Case Studies</Link>
            </li>
            <li>
              <Link href="/testimonials" className="footer__link">Testimonials</Link>
            </li>
            <li>
              <Link href="/pricing" className="footer__link">Pricing</Link>
            </li>
            <li>
              <Link href="/faqs" className="footer__link">FAQs</Link>
            </li>
            <li>
              <Link href="/blog" className="footer__link">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="footer__link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {year} GrowZap. All rights reserved.</p>
        <ul className="footer__legal">
          <li><Link href="/contact" className="footer__link">Privacy Policy</Link></li>
          <li><Link href="/contact" className="footer__link">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
}
