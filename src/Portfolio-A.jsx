import { useState, useEffect, useRef } from "react";
import "./portfolio.scss";

const NAV_ITEMS = ["Work", "About", "Process", "Contact"];

const PROJECTS = [
  {
    id: 1,
    title: "Meridian Banking",
    category: "Product Design",
    year: "2024",
    tags: ["Mobile", "FinTech", "iOS"],
    description: "A wealth management app that makes complex portfolios feel effortless. Redesigned the onboarding flow, reducing drop-off by 42%.",
    color: "#E8E4DF",
    accent: "#2C2C2A",
    span: "wide",
    role: "Lead Designer",
  },
  {
    id: 2,
    title: "Solis Health",
    category: "Design System",
    year: "2024",
    tags: ["Web", "Healthcare", "React"],
    description: "End-to-end design system serving 6 product teams across a telehealth platform.",
    color: "#E1F5EE",
    accent: "#085041",
    span: "narrow",
    role: "Systems Designer",
  },
  {
    id: 3,
    title: "Kairos",
    category: "0→1 Product",
    year: "2023",
    tags: ["Web App", "AI", "SaaS"],
    description: "An AI-powered scheduling tool that learns from your habits. Took from concept to Series A.",
    color: "#EEEDFE",
    accent: "#3C3489",
    span: "narrow",
    role: "Founding Designer",
  },
  {
    id: 4,
    title: "Forma Editorial",
    category: "Brand & Web",
    year: "2023",
    tags: ["Branding", "Web", "Motion"],
    description: "Complete visual identity and digital presence for a boutique architecture studio.",
    color: "#FAECE7",
    accent: "#712B13",
    span: "wide",
    role: "Creative Lead",
  },
];

const SKILLS = [
  { name: "Product Strategy", level: 95 },
  { name: "Interaction Design", level: 90 },
  { name: "Design Systems", level: 88 },
  { name: "User Research", level: 85 },
  { name: "Prototyping", level: 92 },
  { name: "Visual Design", level: 87 },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discover", body: "Stakeholder interviews, competitive audits, and usage data to surface the real problem hiding behind the stated one." },
  { num: "02", title: "Define", body: "Synthesize research into clear opportunity areas. Align the team on a north star before a single pixel is moved." },
  { num: "03", title: "Design", body: "Rapid iteration from rough flows to high-fidelity prototypes. Every decision tied back to a user need or business goal." },
  { num: "04", title: "Deliver", body: "Pixel-perfect specs, handoff docs, and a launch plan. I stay through QA to ensure the build matches the vision." },
];

const MARQUEE_ITEMS = [
  "Product Design", "UX Research", "Design Systems",
  "Prototyping", "Visual Design", "Brand Strategy",
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Work");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const [heroRef, heroInView]       = useInView(0.1);
  const [workRef, workInView]       = useInView(0.05);
  const [aboutRef, aboutInView]     = useInView(0.1);
  const [processRef, processInView] = useInView(0.1);
  const [contactRef, contactInView] = useInView(0.1);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
  };

  const handleSubmit = () => setSent(true);

  const fu = (inView, delay = "") =>
    `fade-up${inView ? " visible" : ""}${delay ? ` d${delay}` : ""}`;

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav__inner">
          <button className="nav__logo-btn" onClick={() => scrollTo("work")}>
            <span className="nav__logo-name serif">A. Chen</span>
            <span className="nav__logo-role">— UI/UX</span>
          </button>

          <div className="nav__right">
            <div className="nav__links">
              {NAV_ITEMS.map(item => (
                <button
                  key={item}
                  className={`nav-link${activeNav === item ? " nav-link--active" : ""}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="availability">
              <div className="availability__dot" />
              <span className="availability__label">Available</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} id="work" className="hero">
        <div className="container">
          <div className="hero__marquee-wrap">
            <div className="hero__marquee-track">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
                <span key={i} className="hero__marquee-item">{t}</span>
              ))}
            </div>
          </div>

          <div className={fu(heroInView)}>
            <p className="hero__eyebrow">Senior Product Designer</p>
          </div>

          <h1 className={`hero__heading serif ${fu(heroInView, 1)}`}>
            Designing things people
            <em> actually use</em>
          </h1>

          <div className={`hero__ctas ${fu(heroInView, 2)}`}>
            <button className="btn btn--primary" onClick={() => scrollTo("work")}>
              View Work ↓
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>

          <div className={`hero__stats ${fu(heroInView, 3)}`}>
            {[["7+", "Years experience"], ["40+", "Products shipped"], ["3", "Design awards"]].map(
              ([num, label]) => (
                <div key={label}>
                  <p className="hero__stat-num serif">{num}</p>
                  <p className="hero__stat-label">{label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section ref={workRef} className="work">
        <div className="container">
          <div className={`work__header ${fu(workInView)}`}>
            <h2 className="work__heading serif">Selected Work</h2>
            <span className="work__year">2023–2024</span>
          </div>

          <div className="work__grid">
            {PROJECTS.map((p, i) => (
              <div
                key={p.id}
                className={`work__col--${p.span} ${fu(workInView, Math.min(i + 1, 4))}`}
              >
                <div
                  className={`project-card${p.span === "wide" ? " project-card--wide" : ""}`}
                  style={{ background: p.color, color: p.accent }}
                  onMouseEnter={() => setHoveredProject(p.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div>
                    <div className="project-card__meta">
                      <span className="project-card__category">
                        {p.category} · {p.year}
                      </span>
                      <span className="project-card__role">{p.role}</span>
                    </div>
                    <h3 className="project-card__title serif">{p.title}</h3>
                    <p className="project-card__desc">{p.description}</p>
                  </div>

                  <div className="project-card__footer">
                    <div className="project-card__tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div
                      className={`project-card__arrow project-card__arrow--${hoveredProject === p.id ? "hovered" : "idle"}`}
                      style={{ background: p.accent }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 12L12 2M12 2H4M12 2V10"
                          stroke={p.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section ref={aboutRef} id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div>
              <div className={fu(aboutInView)}>
                <p className="section-label">About</p>
                <h2 className="about__heading serif">
                  I bridge the gap between user needs and business goals
                </h2>
                <p className="about__body">
                  I'm Alexandra Chen, a senior product designer based in San Francisco.
                  For 7+ years I've helped startups and established companies ship products
                  that are both useful and delightful.
                </p>
                <p className="about__body">
                  I embed with engineering teams, speak the language of stakeholders, and
                  advocate relentlessly for users. My work lives at the intersection of
                  systems thinking and pixel-perfect craft.
                </p>
              </div>
              <div className={`about__tools ${fu(aboutInView, 2)}`}>
                {["Figma", "Framer", "Principle", "Maze", "Notion"].map(tool => (
                  <span key={tool} className="about__tool-badge">{tool}</span>
                ))}
              </div>
            </div>

            <div className={fu(aboutInView, 1)}>
              <div className="about__avatar-wrap">
                <div className="about__avatar">
                  <div className="about__avatar-inner">
                    <div className="about__avatar-initials serif">AC</div>
                    <p className="about__avatar-name">Alexandra Chen</p>
                  </div>
                </div>
              </div>

              <div className="about__skills">
                {SKILLS.map((s, i) => (
                  <div
                    key={s.name}
                    className={fu(aboutInView)}
                    style={{ transitionDelay: `${0.1 * i}s` }}
                  >
                    <div className="about__skill-header">
                      <span className="about__skill-name">{s.name}</span>
                      <span className="about__skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar__track">
                      <div
                        className="skill-bar__fill"
                        style={{
                          width: aboutInView ? `${s.level}%` : "0%",
                          transitionDelay: `${0.15 + 0.1 * i}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section ref={processRef} id="process" className="process">
        <div className="container">
          <div className={`process__header ${fu(processInView)}`}>
            <p className="section-label">Process</p>
            <h2 className="process__heading serif">How I work</h2>
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`process-card ${fu(processInView, i + 1)}`}
            >
              <div className="process-card__inner">
                <span className="process-card__num serif">{step.num}</span>
                <h3 className="process-card__title serif">{step.title}</h3>
                <p className="process-card__body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section ref={contactRef} id="contact" className="contact">
        <div className="container--narrow">
          <div className={fu(contactInView)}>
            <p className="section-label">Contact</p>
            <h2 className="contact__heading serif">Let's build something</h2>
            <h2 className="contact__heading contact__heading--muted serif">worth using.</h2>
          </div>

          {sent ? (
            <div className="contact__success fade-up visible">
              <div className="contact__success-icon serif">✓</div>
              <p className="contact__success-text">
                Message sent — I'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <div className={`contact__form ${fu(contactInView, 1)}`}>
              <div className="contact__row">
                <input
                  className="contact-input"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                />
                <input
                  className="contact-input"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                />
              </div>
              <textarea
                className="contact-input contact-input--textarea"
                placeholder="Tell me about your project…"
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
              />
              <div className="contact__footer">
                <button className="btn btn--primary-inv" onClick={handleSubmit}>
                  Send Message →
                </button>
                <div className="contact__socials">
                  {["LinkedIn", "Dribbble", "Twitter"].map(s => (
                    <a key={s} href="#" className="contact__social-link">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__logo serif">A. Chen</span>
          <span className="footer__copy">© 2024 · SF, California</span>
        </div>
      </footer>
    </>
  );
}
