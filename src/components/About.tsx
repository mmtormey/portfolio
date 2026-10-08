function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">

        <div className="section-heading">
          <p className="section-heading__label">About Me</p>
          <div className="section-heading__line"></div>
        </div>

        <h2>A little bit about how I got here</h2>

        <div className="about__story">
          <p>
            I studied Information Science at Cornell University’s College
            of Engineering, where I focused on both Data Science and UX
            Design. I was drawn to the combination of technical problem-solving
            and understanding how people interact with information and systems.
          </p>

          <p>
            After graduating, I joined Axis Group, a data and analytics
            consulting firm. Over four years, my role evolved from UX and
            solution design into business value discovery and AI-focused work.
          </p>

          <p>
            Along the way, I worked with organizations across very different
            industries—from movie theaters and healthcare to real estate and
            manufacturing. What I found was that regardless of the industry
            or job title, I was most interested in learning how a business
            actually worked, understanding the system behind a problem, and
            figuring out how information could help people make better decisions.
          </p>
        </div>

        <h2>Outside of work</h2>

        <div className="about__gallery">
          <div className="about__photo">
            <img
              src="/images/about-graduation.png"
              alt="Megan at graduation"
            />
          </div>

          <div className="about__photo">
            <img
              src="/images/about-hiking.png"
              alt="Megan hiking"
            />
          </div>

          <div className="about__photo">
            <img
              src="/images/about-ninja.png"
              alt="Megan ninja"
            />
          </div>
        </div>

        <div className="about__story">
          <p>
            Outside of work, I love hiking, cooking, and baking. I’ve spent
            many weekends in the White Mountains and worked as a hut ‘croo’
            for the Appalachian Mountain Club for two summers. These days,
            I’m often experimenting with a new recipe, maintaining my
            sourdough starter, or baking something to share with friends.
          </p>

          <p>
            I’m also currently training to compete on American Ninja Warrior,
            which has been a fun new challenge outside of work.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;