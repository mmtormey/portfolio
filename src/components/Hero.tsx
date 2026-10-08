function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">

        <div className="hero__image">
          <img
            className="hero__portrait-graphic"
            src="/images/hero-portrait.svg"
            alt="Megan Tormey"
          />
        </div>

        <div className="hero__introduction">
          <p className="hero__eyebrow">
            Hello, my name is
          </p>

          <h1>
            MEGAN TORMEY
          </h1>

          <p className="hero__statement">
            I like figuring out how things work.
          </p>

          <p className="hero__description">
            I'm drawn to complex, ambiguous problems where
            the answer isn't immediately obvious. I enjoy digging into the <span>people</span>, <span>processes</span>, <span>decisions</span>,
            and <span>data</span> behind a business or system,
            then turning what I learn into something useful.
          </p>

          <div className="hero__links">
            <a href="/assets/resume.pdf" aria-label="Resume" target="_blank" rel="noopener noreferrer">
              <img src="/icons/resume.svg" alt="" />
            </a>

            <a href="http://www.linkedin.com/in/megan-tormey" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="" />
            </a>
          </div>
        </div>

      </div>

      <a href="#projects" className="hero__scroll">
        <span>See Projects</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;