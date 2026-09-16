 "use client";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  Github,
  Globe2,
  GraduationCap,
  KeyRound,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  UserRound,
  Wifi
} from "lucide-react";
import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene";
import Reveal from "../components/Reveal";
import SkillCard from "../components/SkillCard";

const skills = [
  {
    icon: Globe2,
    title: "Web Application Security",
    text: "VAPT-focused testing of modern web applications, HTTP flows, authentication, authorization and common OWASP vulnerability classes.",
    tags: ["Burp Suite", "OWASP", "SQLi", "XSS", "IDOR", "CSRF"]
  },
  {
    icon: Server,
    title: "API Security",
    text: "REST API assessment, endpoint enumeration, authorization testing, JWT analysis and business-logic security.",
    tags: ["REST", "BOLA", "BFLA", "JWT", "OpenAPI", "SSRF"]
  },
  {
    icon: Network,
    title: "Network Recon",
    text: "Disciplined reconnaissance, service enumeration, attack-surface mapping and packet-level validation.",
    tags: ["Nmap", "Wireshark", "TCP/IP", "DNS", "TLS"]
  },
  {
    icon: Terminal,
    title: "Linux & Host Security",
    text: "Linux logs, audit evidence, persistence review, SSH exposure, file-integrity concepts and security hardening.",
    tags: ["Kali", "auditd", "journalctl", "SSH", "Bash"]
  },
  {
    icon: LockKeyhole,
    title: "Security Testing",
    text: "Manual validation first, evidence capture, false-positive triage, severity assessment and responsible reporting.",
    tags: ["CVSS", "Evidence", "OWASP", "VAPT"]
  },
  {
    icon: Bot,
    title: "Security Automation",
    text: "Small Python and Bash utilities for reconnaissance, API probing, log triage and repetitive security workflows.",
    tags: ["Python", "Bash", "Requests", "grep", "awk"]
  }
];

const tools = [
  "Kali Linux", "Burp Suite", "Nmap", "Wireshark", "Metasploit",
  "SQLMap", "Hashcat", "Nuclei", "httpx", "Subfinder",
  "Python", "Bash", "OpenVAS / Greenbone"
];

const projects = [
  {
    number: "01",
    title: "Web Application VAPT Lab",
    category: "WEB SECURITY",
    text: "A portfolio-ready assessment covering reconnaissance, Burp Suite testing, authentication, access control, injection classes, security headers, evidence and remediation.",
    tags: ["Burp Suite", "OWASP", "CVSS"]
  },
  {
    number: "02",
    title: "API Security Assessment",
    category: "API SECURITY",
    text: "Structured API testing covering endpoint discovery, OpenAPI review, authorization, BOLA/BFLA, JWT behavior, rate limiting and Python-assisted testing.",
    tags: ["REST", "JWT", "Python"]
  },
  {
    number: "03",
    title: "Network Recon & Service Review",
    category: "NETWORK",
    text: "A controlled lab project using Nmap and Wireshark to enumerate services, validate traffic, inspect TLS/SSH exposure and document findings.",
    tags: ["Nmap", "Wireshark", "TCP/IP"]
  },
  {
    number: "04",
    title: "Linux Host Security Review",
    category: "HOST SECURITY",
    text: "Host-review workflow using logs, audit evidence, persistence checks, integrity baselines and security-hardening recommendations.",
    tags: ["Linux", "auditd", "Bash"]
  }
];

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="noise" />
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark">K</span>
          <span>KUSHAL<span className="muted">.SEC</span></span>
        </a>
        <div className="nav-links">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
        <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
          <Download size={15} /> CV
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              I BUILD MY EDGE
              <span>IN CYBERSECURITY.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="hero-sub">
              I&apos;m <strong>Kushal Khatri</strong> — a recently +2 completed student,
              trained in Cybersecurity & Ethical Hacking at Saarathi Academy and continuously
              building practical skills through self-learning, labs, websites, documentation and videos.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                Explore My Work <ArrowUpRight size={18} />
              </button>
              <button className="ghost-btn" onClick={() => scrollTo("contact")}>
                Contact Me <Mail size={17} />
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="hero-meta">
              <span><MapPin size={15} /> Nepal</span>
              <span><GraduationCap size={15} /> +2 Completed</span>
              <span><ShieldCheck size={15} /> Cybersecurity Training</span>
            </div>
          </Reveal>
        </div>
        <div className="hero-visual">
          <HeroScene />
          <div className="orbit-label label-a">RECON</div>
          <div className="orbit-label label-b">VAPT</div>
          <div className="orbit-label label-c">SECURITY</div>
          <motion.div className="hero-profile-card" initial={{ opacity: 0, y: 22, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ delay: 0.45, duration: 0.8 }}>
            <div className="profile-photo-wrap"><img src="/kushal-formal.jpg" alt="Kushal Khatri" className="profile-photo" /></div>
            <div className="profile-card-copy">
              <span>IDENTITY VERIFIED</span>
              <strong>KUSHAL KHATRI</strong>
              <small>CYBERSECURITY / VAPT</small>
            </div>
            <div className="profile-status"><i /> ONLINE</div>
          </motion.div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll down">
          <ArrowDown size={16} />
          <span>SCROLL TO EXPLORE</span>
        </button>
      </section>

      <section className="section" id="about">
        <Reveal>
          <div className="section-kicker">01 / PROFILE</div>
          <h2>Curious by nature.<br /><span>Security-minded by choice.</span></h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-card">
            <div className="card-number">01</div>
            <UserRound size={28} />
            <h3>Who I am</h3>
            <p>
              I am a recently +2 completed student focused on starting my journey in cybersecurity.
              I completed Cybersecurity & Ethical Hacking training from Saarathi Academy and have
              continued developing my skills independently through online resources, technical websites,
              documentation, labs and video-based learning.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="about-card">
            <div className="card-number">02</div>
            <BookOpen size={28} />
            <h3>How I learn</h3>
            <p>
              I like to learn by doing: understand the concept, build or use a controlled lab,
              test the behavior, troubleshoot what breaks, document the result and then repeat it.
              Remote/self-directed learning has strengthened my research and problem-solving ability.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="about-card">
            <div className="card-number">03</div>
            <ShieldCheck size={28} />
            <h3>My direction</h3>
            <p>
              My main interests are Web/API VAPT, security testing, network reconnaissance,
              Linux security and security automation. I want to keep building real evidence-based
              projects and grow toward professional cybersecurity roles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section identity-section" id="identity">
        <div className="identity-orb identity-orb-a" />
        <div className="identity-orb identity-orb-b" />
        <div className="identity-grid">
          <Reveal className="identity-photo-card">
            <div className="photo-frame photo-frame-main">
              <img src="/kushal-mountain.jpg" alt="Kushal Khatri outdoors" />
              <div className="scan-line" />
              <div className="photo-hud"><span>PROFILE_01</span><span>NEPAL // CYBER</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="identity-copy">
            <div className="section-kicker">02 / IDENTITY</div>
            <h2>Human behind<br /><span>the terminal.</span></h2>
            <p>Cybersecurity is more than tools and commands. I&apos;m building a practical identity around curiosity, disciplined testing and a habit of turning what I learn into visible work.</p>
            <div className="identity-stats">
              <div><strong>01</strong><span>LEARN</span></div>
              <div><strong>02</strong><span>BUILD</span></div>
              <div><strong>03</strong><span>TEST</span></div>
              <div><strong>04</strong><span>DOCUMENT</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section" id="skills">
        <Reveal>
          <div className="section-kicker">02 / CAPABILITIES</div>
          <h2>Skills built through<br /><span>training + self-learning.</span></h2>
          <p className="section-lead">
            A practical stack built around vulnerability assessment, penetration testing,
            network analysis, Linux security and automation.
          </p>
        </Reveal>
        <div className="skill-grid">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 0.05}>
              <SkillCard {...skill} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="tool-panel">
            <div>
              <div className="mini-label">TOOLKIT</div>
              <h3>Tools I&apos;ve worked with</h3>
            </div>
            <div className="tool-cloud">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <div className="section-kicker">03 / SELECTED WORK</div>
          <h2>Turn skills into<br /><span>visible evidence.</span></h2>
          <p className="section-lead">
            These are the project directions designed for my portfolio. Each one can grow into
            a full write-up with scope, methodology, evidence, impact and remediation.
          </p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 0.06}>
              <article className="project">
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-arrow"><ArrowUpRight size={22} /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="learning">
        <Reveal>
          <div className="section-kicker">04 / LEARNING PATH</div>
          <h2>Formal foundation.<br /><span>Self-directed growth.</span></h2>
        </Reveal>
        <div className="timeline">
          <Reveal>
            <div className="timeline-item">
              <div className="timeline-dot"><GraduationCap size={17} /></div>
              <div>
                <div className="timeline-date">ACADEMIC FOUNDATION</div>
                <h3>+2 Completed</h3>
                <p>Recently completed +2 and now focusing on building a technical career in cybersecurity.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="timeline-item">
              <div className="timeline-dot"><ShieldCheck size={17} /></div>
              <div>
                <div className="timeline-date">FORMAL CYBERSECURITY TRAINING</div>
                <h3>Cybersecurity & Ethical Hacking — Saarathi Academy</h3>
                <p>
                  Training focused on networking, reconnaissance, Linux and host foundations,
                  web/API VAPT, security tooling, reporting and career readiness.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="timeline-item">
              <div className="timeline-dot"><Terminal size={17} /></div>
              <div>
                <div className="timeline-date">ONGOING</div>
                <h3>Remote & Self-Learning</h3>
                <p>
                  Continuing to learn through cybersecurity websites, documentation, videos,
                  labs, technical articles and hands-on practice. This is where I expand beyond
                  the structured classroom path and keep improving independently.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="methodology">
        <Reveal>
          <div className="section-kicker">05 / APPROACH</div>
          <h2>Think first.<br /><span>Test with purpose.</span></h2>
        </Reveal>
        <div className="method-grid">
          {[
            ["01", "Scope", "Understand the target, authorization and rules before testing."],
            ["02", "Recon", "Map the attack surface and identify useful entry points."],
            ["03", "Validate", "Reproduce findings and separate real issues from noise."],
            ["04", "Report", "Explain evidence, impact, severity and practical remediation."]
          ].map(([n, title, text]) => (
            <Reveal key={n}>
              <div className="method">
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="ethics">
            <CheckCircle2 size={22} />
            <div>
              <strong>Responsible security practice</strong>
              <p>All security testing presented here is intended for authorized labs, owned systems or explicitly approved scopes.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <Reveal>
          <div className="section-kicker">06 / CONTACT</div>
          <h2>Let&apos;s build something<br /><span>secure.</span></h2>
          <p>
            I&apos;m open to cybersecurity learning opportunities, internships, junior roles,
            collaborations and technical projects.
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href="mailto:kushalkhatri0077@gmail.com">
              <Mail size={18} /> Email Me
            </a>
            <a className="ghost-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
              <Download size={17} /> View CV
            </a>
          </div>
          <div className="socials">
            <a href="mailto:kushalkhatri0077@gmail.com"><Mail size={18} /> Email</a>
            <a href="https://www.linkedin.com/in/kushal-khatri-391079352" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Kushal Khatri</span>
        <span>CYBERSECURITY / VAPT / SECURITY RESEARCH</span>
      </footer>

      <button className="back-top" onClick={() => scrollTo("top")} aria-label="Back to top">
        <ArrowUp size={17} />
      </button>
    </main>
  );
}
