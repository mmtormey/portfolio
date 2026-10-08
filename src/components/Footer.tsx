import { useState } from "react";

function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("mmtormey@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer className="footer">
      <div className="footer__content">

        <div className="footer__identity">
          <img
            src="/images/portrait.png"
            alt=""
            className="footer__headshot"
          />

          <a href="/" className="footer__logo">
            Megan Tormey
          </a>
        </div>

        <div className="footer__contact">
          <p>Let's connect.</p>

          <div className="footer__links">
            <a
              href="http://www.linkedin.com/in/megan-tormey"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                copyEmail();
              }}
            >
              {copied ? "Copied!" : "Email"}
            </a>

            <a href="/assets/resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Megan Tormey</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;