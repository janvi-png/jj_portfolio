import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiButterfly, GiFlowerPot, GiCat } from "react-icons/gi";
import { FaDownload, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

// --- Data converted from user's LaTeX ---
const sampleData = {
  name: "Janvi Sharma",
  phone: "+91-9888480213",
  email: "janvijawas2005@rediffmail.com",
  linkedin: "https://www.linkedin.com/in/janvi-sharma-4156a9310/",
  github: "https://github.com/janvi-png",
  institute: "Chandigarh College Of Engineering & Technology",
  education: [
    {
      degree: "Bachelor of Engineering (CSE)",
      school: "Chandigarh College Of Engineering & Technology",
      period: "2022 - 2026",
      grade: "CGPA: 8.58 (till 6th SEM)",
    },
    { degree: "Intermediate (+2)", school: "Gurukul Global School", period: "2021 - 2022", grade: "89.2%" },
    { degree: "Matriculation", school: "Gurukul Global School", period: "2019 - 2020", grade: "95.6%" },
  ],

  summary:
    `Final-year B.E. CSE student with a strong research background in AI, optimization, and secure computing. Research accepted at Springer LNNS (Italy, 2025) and ICEAST 2025. Skilled in machine learning, network optimization, and privacy-preserving AI, with hands-on work in adversarial robustness, homomorphic encryption, and real-time traffic management. Strong foundation in algorithms, OOP, and system-level programming (Java, Python, C++). Experienced in applying theoretical models to practical domains such as intrusion detection, sentiment analysis, and continuous authentication. Served as ACM-W Treasurer, demonstrating research leadership and technical collaboration.`,

  research: [
    {
      title: "AI-Driven Traffic Management and Optimization",
      venue: "ICEAST 2025",
      link: "https://iceast.kmitl.ac.th/2025/",
      bullets: [
        "Built predictive models on real-time Wireshark traffic; applied regression and anomaly detection for congestion forecasting.",
        "Implemented Least Connections load balancing to dynamically redistribute load, reducing peak traffic.",
      ],
    },
    {
      title: "Comparative Study of Edge vs Cloud-Based Sentiment Analysis",
      venue: "Springer LNNS 2025 (Advanced Computing and Intelligent Technologies, LNNS Vol. 1359)",
      bullets: [
        "Benchmarked DNN sentiment classifiers on Edge devices (Coral, Jetson) vs Cloud; compared latency, accuracy, and energy.",
        "Demonstrated trade-offs in Edge AI for low-latency NLP tasks.",
      ],
    },
    {
      title: "Resilient Intrusion Detection Against Data Poisoning Attacks",
      bullets: ["Designed dual-layer ML pipeline using Random Forests and anomaly-aware preprocessing on NSL-KDD dataset."],
    },
    {
      title: "Privacy-Preserving AI via Homomorphic Encryption",
      bullets: ["Proposed FHE-based inference for encrypted healthcare data; evaluated Logistic Regression, Decision Trees, and Quantized Neural Networks."],
    },
    {
      title: "Behavioral Biometrics for Continuous Authentication",
      bullets: ["Developed keystroke-dynamics-based authentication using hybrid supervised + reinforcement learning models (SVM, RF, DQN)."],
    },
  ],

  projects: [
    {
      name: "Bank Transaction Fraud Detection System",
      url: "https://bank-transaaction-fraud-detection.onrender.com/",
      tech: "Python, Flask, ML",
      summary: "Built a fraud detection system using Random Forests with a Flask-based web interface.",
    },
    {
      name: "Code Runner Platform",
      url: "https://coderunnerapp.netlify.app/",
      tech: "React.js, Node.js, MongoDB",
      summary: "Designed real-time code execution platform with hybrid recommendation for algorithms.",
    },
    {
      name: "Research Publication Management System",
      url: "https://github.com/janvi-png/psychic-REASEARCH-pancake-DATA",
      tech: "HTML, CSS, JavaScript, PHP, MySQL, XML, AJAX",
      summary: "Developed a web-based system for managing research metadata (papers, authors, journals) and implemented CRUD operations with AJAX, MySQL storage, and XML schema validation (XSD).",
    },
    {
      name: "Graveyard Manager",
      url: "https://github.com/janvi-png/MODEL-GRAVEYARD",
      tech: "Java, Gson",
      summary: "Applied OOP and data modeling to persistent record management with JSON serialization.",
    },
  ],

  skills: {
    languages: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "HTML", "CSS"],
    frameworks: ["Flask", "JUnit", "Scikit-learn", "NumPy", "pandas", "React.js", "Node.js", "Express.js"],
    db: ["MySQL", "MongoDB", "XML", "JSON", "AJAX"],
    tools: ["Git", "GitHub", "Render", "Netlify", "Postman", "VS Code", "Canva", "LaTeX", "AWS"],
    concepts: ["Algorithms", "OOP", "Agile", "Machine Learning", "REST APIs", "CI/CD", "Unit Testing"],
  },

  awards: [
    "Springer LNNS Proceedings (2025) — Published on Edge vs Cloud Sentiment Analysis in Advanced Computing and Intelligent Technologies, LNNS Vol. 1359.",
    'Accepted Paper – ICEAST 2025 — "Optimizing Traffic Flow and System Efficiency in Networks Through AI-Driven Management" (https://iceast.kmitl.ac.th/2025/)',
  ],

  positions: [
    {
      role: "Treasurer",
      org: "ACM-W Student Chapter, CCET",
      period: "July 2024 – July 2025",
      bullets: ["Managed budgeting, logistics, and finance for chapter events and activities."],
    },
  ],
};

// --- Small helper components ---
const Tag = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-800 shadow-sm">{children}</span>
);

const AnimatedPetal = ({ x = "50%", delay = 0, type = "butterfly" }) => {
  const Icon = type === "butterfly" ? GiButterfly : type === "flower" ? GiFlowerPot : GiCat;
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ y: ["110vh", "-10vh"], opacity: [0, 0.9, 0] }}
      transition={{ duration: 16 + Math.random() * 8, repeat: Infinity, delay }}
      style={{ left: x }}
      className="pointer-events-none absolute text-2xl md:text-4xl text-pink-400/90"
    >
      <Icon />
    </motion.div>
  );
};

export default function Portfolio() {
  const [mode, setMode] = useState("playful"); // playful | subtle
  const [animate, setAnimate] = useState(true);

  return (
    <div className={`min-h-screen relative font-sans ${mode === "playful" ? "bg-gradient-to-br from-pink-50 to-green-50" : "bg-white"}`}>
      {/* Background animations (flora/fauna/cats) */}
      {animate && mode === "playful" && (
        <>
          <AnimatedPetal x="5%" delay={0} type="butterfly" />
          <AnimatedPetal x="18%" delay={2} type="flower" />
          <AnimatedPetal x="32%" delay={4} type="cat" />
          <AnimatedPetal x="46%" delay={1} type="butterfly" />
          <AnimatedPetal x="60%" delay={3} type="flower" />
          <AnimatedPetal x="74%" delay={5} type="cat" />
          <AnimatedPetal x="88%" delay={2.5} type="butterfly" />
        </>
      )}

      {/* Top bar / header */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-white/80 rounded-full p-3 shadow-md border border-pink-200">
              <GiCat className="text-2xl text-pink-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-pink-700">{sampleData.name}</h1>
              <p className="text-sm text-gray-600 mt-1">{sampleData.institute}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm mt-2 text-gray-700">
                <a href={`tel:${sampleData.phone}`} className="hover:underline inline-flex items-center gap-2"><FaPhone /> {sampleData.phone}</a>
                <a href={`mailto:${sampleData.email}`} className="hover:underline inline-flex items-center gap-2"><FaEnvelope /> {sampleData.email}</a>
                <a href={sampleData.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><FaLinkedin /> LinkedIn</a>
                <a href={sampleData.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><FaGithub /> GitHub</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode(mode === "playful" ? "subtle" : "playful")}
              className="px-3 py-2 text-sm rounded-full bg-pink-100 text-pink-700 border border-pink-200 shadow-sm"
            >
              {mode === "playful" ? "Switch to Subtle" : "Switch to Playful"}
            </button>

            <button
              onClick={() => setAnimate((s) => !s)}
              className="px-3 py-2 text-sm rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm"
            >
              {animate ? "Pause Animations" : "Resume Animations"}
            </button>

            <button onClick={() => window.print()} className="px-3 py-2 rounded-full bg-pink-600 text-white text-sm inline-flex items-center gap-2">
              <FaDownload /> Export PDF
            </button>
          </div>
        </div>

        {/* Summary card */}
        <div className={`mt-6 p-6 rounded-2xl shadow-md ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
          <p className="text-gray-800 leading-relaxed">{sampleData.summary}</p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Research */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Research & Publications</h3>
              <div className="space-y-3 text-gray-800">
                {sampleData.research.map((r, i) => (
                  <div key={i} className="border-l-2 border-pink-200 pl-3">
                    <div className="flex items-center justify-between">
                      <strong>{r.title}</strong>
                      {r.venue && <span className="text-sm text-gray-500">{r.venue}</span>}
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                      {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    {r.link && (
                      <div className="mt-2 text-sm"><a href={r.link} target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">View link</a></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Projects</h3>
              <div className="space-y-3">
                {sampleData.projects.map((p, i) => (
                  <div key={i} className="p-3 rounded-xl border border-pink-100 bg-white">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <strong>{p.name}</strong>
                        <div className="text-sm text-gray-600">{p.tech}</div>
                        <div className="text-sm mt-2">{p.summary}</div>
                      </div>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-sm text-pink-600 hover:underline">Open</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Positions */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Positions of Responsibility</h3>
              <div>
                {sampleData.positions.map((pos, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex items-center justify-between">
                      <strong>{pos.role}</strong>
                      <span className="text-sm text-gray-500">{pos.period}</span>
                    </div>
                    <div className="text-sm text-gray-700 mt-1">{pos.bullets?.join(' ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Contact + Education */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Contact & Education</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><FaPhone /> <span>{sampleData.phone}</span></div>
                <div className="flex items-center gap-2"><FaEnvelope /> <span>{sampleData.email}</span></div>
                <div className="flex items-center gap-2"><FaLinkedin /> <a href={sampleData.linkedin} target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">LinkedIn</a></div>
                <div className="flex items-center gap-2"><FaGithub /> <a href={sampleData.github} target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">GitHub</a></div>

                <div className="mt-3">
                  <h4 className="font-semibold">Education</h4>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                    {sampleData.education.map((e, i) => (
                      <li key={i}><strong>{e.degree}</strong>, {e.school} ({e.period}) — <span className="text-sm text-gray-600">{e.grade}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                  <h5 className="font-medium">Languages</h5>
                  <div className="flex flex-wrap gap-2 mt-2">{sampleData.skills.languages.map((s, i) => <Tag key={i}>{s}</Tag>)}</div>
                </div>
                <div>
                  <h5 className="font-medium">Frameworks & Libraries</h5>
                  <div className="flex flex-wrap gap-2 mt-2">{sampleData.skills.frameworks.map((s, i) => <Tag key={i}>{s}</Tag>)}</div>
                </div>
                <div>
                  <h5 className="font-medium">Database & Data</h5>
                  <div className="flex flex-wrap gap-2 mt-2">{sampleData.skills.db.map((s, i) => <Tag key={i}>{s}</Tag>)}</div>
                </div>
                <div>
                  <h5 className="font-medium">Tools & Platforms</h5>
                  <div className="flex flex-wrap gap-2 mt-2">{sampleData.skills.tools.map((s, i) => <Tag key={i}>{s}</Tag>)}</div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className={`p-5 rounded-2xl shadow-sm ${mode === "playful" ? "bg-white/80" : "bg-gray-50"}`}>
              <h3 className="text-lg font-semibold text-pink-700 mb-3">Honours & Awards</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {sampleData.awards.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-10 mb-6">© {new Date().getFullYear()} {sampleData.name}. Design: Flora–Fauna Cutesy Theme 🌸🐾</footer>
      </div>
    </div>
  );
}

