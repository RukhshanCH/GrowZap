"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MAIN_NAV } from "@/content/routes";

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__bar">
        <Logo />

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__list">
            {MAIN_NAV.map((item) => (
              <li
                key={item.label}
                className="header__item"
                onMouseEnter={() => item.children && setOpenGroup(item.label)}
                onMouseLeave={() => item.children && setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className="header__link"
                  aria-expanded={item.children ? openGroup === item.label : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className="header__caret">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {openGroup === item.label && (
                      <motion.div
                        className="header__mega"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ul className="header__mega-list">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="header__mega-link">
                                <span className="header__mega-label">{child.label}</span>
                                {child.blurb && <span className="header__mega-blurb">{child.blurb}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button href="/contact" size="sm">
            Get Free Audit
          </Button>
        </div>

        <button
          className="header__burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v: boolean) => !v)}
        >
          <span className={`header__burger-line ${mobileOpen ? "header__burger-line--open-1" : ""}`} />
          <span className={`header__burger-line ${mobileOpen ? "header__burger-line--open-2" : ""}`} />
          <span className={`header__burger-line ${mobileOpen ? "header__burger-line--open-3" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="header__mobile-list">
              {MAIN_NAV.map((item) => (
                <li key={item.label} className="header__mobile-item">
                  <Link href={item.href} className="header__mobile-link">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="header__mobile-sublist">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="header__mobile-sublink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="header__mobile-cta">
              <Button href="/contact" block>
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
