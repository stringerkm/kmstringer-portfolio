import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "./projects.js";
import "./portfolio.scss";

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

function StatCard({ value, label, accent }) {
  return (
    <div className="cs-stat">
      <p className="cs-stat__value serif" style={{ color: accent }}>{value}</p>
      <p className="cs-stat__label">{label}</p>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.slug === slug);

  const [hovered, setHovered] = useState(false);

  const [headerRef, headerInView] = useInView(0.1);
  const [problemRef, problemInView] = useInView(0.1);
  const [processRef, processInView] = useInView(0.1);
  const [outcomeRef, outcomeInView] = useInView(0.1);
  const [nextRef, nextInView] = useInView(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="cs-not-found">
        <p>Project not found.</p>
        <Link to="/" className="btn btn--ghost">← Back to portfolio</Link>
      </div>
    );
  }

  const fu = (inView, delay = "") =>
    `fade-up${inView ? " visible" : ""}${delay ? ` d${delay}` : ""}`;

  const nextProject = PROJECTS.find(p => p.slug === project.nextSlug);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__logo-btn" style={{ textDecoration: "none" }}>
            <span className="nav__logo-name serif">Kate Stringer</span>
            <span className="nav__logo-role">— UI/UX</span>
          </Link>
          <div className="nav__right">
            <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
              ← All Work
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header
        ref={headerRef}
        className="cs-hero"
        style={{ background: project.color }}
      >
        <div className="container">
          <div className={fu(headerInView)}>
            <p className="cs-hero__eyebrow" style={{ color: project.accent }}>
              {project.category} · {project.year}
            </p>
          </div>
          <h1
            className={`cs-hero__title serif ${fu(headerInView, 1)}`}
            style={{ color: project.accent }}
          >
            {project.title}
          </h1>
          <p
            className={`cs-hero__overview ${fu(headerInView, 2)}`}
            style={{ color: project.accent }}
          >
            {project.overview}
          </p>

          <div className={`cs-hero__meta ${fu(headerInView, 3)}`}>
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Team", project.team],
              ["Platform", project.platform],
            ].map(([label, value]) => (
              <div key={label} className="cs-hero__meta-item">
                <p
                  className="cs-hero__meta-label"
                  style={{ color: project.accent, opacity: 0.5 }}
                >
                  {label}
                </p>
                <p
                  className="cs-hero__meta-value"
                  style={{ color: project.accent }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── MOCKUP PLACEHOLDER ── */}
      <div className="cs-mockup" style={{ background: project.color }}>
        <div className="container">
          <div
            className="cs-mockup__screen"
            style={{ borderColor: project.accent + "22" }}
          >
            <div
              className="cs-mockup__screen-inner"
              style={{ background: project.accent + "08" }}
            >
              <img
            src={project.coverImage}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              opacity: 0.85,
            }}
          />
              <p
                className="cs-mockup__label serif"
                style={{ color: project.accent, opacity: 0.25 }}
              >
                {project.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section ref={problemRef} className="cs-section">
        <div className="container cs-section__inner">
          <div className={`cs-section__label-col ${fu(problemInView)}`}>
            <p className="cs-section__label">The Problem</p>
          </div>
          <div className="cs-section__content">
            <h2 className={`cs-section__heading serif ${fu(problemInView, 1)}`}>
              {project.problem.heading}
            </h2>
            <p className={`cs-section__body ${fu(problemInView, 2)}`}>
              {project.problem.body}
            </p>
            <div className={`cs-stats ${fu(problemInView, 3)}`}>
              {project.problem.stats.map(s => (
                <StatCard key={s.label} {...s} accent={project.accent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section ref={processRef} className="cs-section cs-section--warm">
        <div className="container cs-section__inner">
          <div className={`cs-section__label-col ${fu(processInView)}`}>
            <p className="cs-section__label">Process</p>
          </div>
          <div className="cs-section__content">
            <h2 className={`cs-section__heading serif ${fu(processInView, 1)}`}>
              How we got there
            </h2>
            <div className="cs-process">
              {project.process.map((step, i) => (
                <div
                  key={step.phase}
                  className={`cs-process__step ${fu(processInView, Math.min(i + 1, 4))}`}
                >
                  <div className="cs-process__step-header">
                    <span className="cs-process__step-num serif">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="cs-process__step-phase serif">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="cs-process__step-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECOND MOCKUP ── */}
      <div className="cs-mockup cs-mockup--dark">
        <div className="container">
          <div className="cs-mockup__row">
            {[0, 1, 2].map(n => (
              <div
                key={n}
                className="cs-mockup__screen cs-mockup__screen--sm"
                style={{ borderColor: "#ffffff18", animationDelay: `${n * 0.15}s` }}
              >
                <div className="cs-mockup__screen-inner cs-mockup__screen-inner--dark">
                  <p className="cs-mockup__label serif">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUTCOME ── */}
      <section ref={outcomeRef} className="cs-section">
        <div className="container cs-section__inner">
          <div className={`cs-section__label-col ${fu(outcomeInView)}`}>
            <p className="cs-section__label">Outcome</p>
          </div>
          <div className="cs-section__content">
            <h2 className={`cs-section__heading serif ${fu(outcomeInView, 1)}`}>
              {project.outcome.heading}
            </h2>
            <p className={`cs-section__body ${fu(outcomeInView, 2)}`}>
              {project.outcome.body}
            </p>
            <div className={`cs-stats ${fu(outcomeInView, 3)}`}>
              {project.outcome.stats.map(s => (
                <StatCard key={s.label} {...s} accent={project.accent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      {nextProject && (
        <Link
          to={`/project/${nextProject.slug}`}
          className="cs-next"
          style={{ background: nextProject.color, textDecoration: "none" }}
          ref={nextRef}
        >
          <div className="container">
            <div className={fu(nextInView)}>
              <p
                className="cs-next__label"
                style={{ color: nextProject.accent, opacity: 0.5 }}
              >
                Next Project
              </p>
            </div>
            <div className={`cs-next__inner ${fu(nextInView, 1)}`}>
              <h2
                className="cs-next__title serif"
                style={{ color: nextProject.accent }}
              >
                {nextProject.title}
              </h2>
              <div
                className="cs-next__arrow"
                style={{ background: nextProject.accent }}
              >
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12L12 2M12 2H4M12 2V10"
                    stroke={nextProject.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p
              className={`cs-next__desc ${fu(nextInView, 2)}`}
              style={{ color: nextProject.accent, opacity: 0.6 }}
            >
              {nextProject.description}
            </p>
          </div>
        </Link>
      )}

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
