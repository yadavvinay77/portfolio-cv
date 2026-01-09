import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  BookOpen,
  Brain,
  ChevronLeft,
  ChevronRight,
  Database,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Mic,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const images = {
  hero: `${baseUrl}images/v2/hero.svg`,
  lab: `${baseUrl}images/v2/lab.svg`,
  data: `${baseUrl}images/v2/data.svg`,
  skyline: `${baseUrl}images/v2/skyline.svg`,
  network: `${baseUrl}images/v2/network.svg`,
  ui: `${baseUrl}images/v2/ui.svg`,
  model: `${baseUrl}images/v2/model.svg`,
  portrait: `${baseUrl}images/v2/vinay-portrait.jpg`,
};

const logoBase = `${baseUrl}images/v2/logos/`;

const stackLogos: Record<string, { png?: string; svg?: string }> = {
  Python: { svg: `${logoBase}python.svg` },
  PyTorch: { svg: `${logoBase}pytorch.svg` },
  TensorFlow: { svg: `${logoBase}tensorflow.svg` },
  FastAPI: { svg: `${logoBase}fastapi.svg` },
  React: { svg: `${logoBase}react.svg` },
  TypeScript: { svg: `${logoBase}typescript.svg` },
  Vite: { svg: `${logoBase}vite.svg` },
  'Tailwind CSS': { svg: `${logoBase}tailwindcss.svg` },
  Docker: { svg: `${logoBase}docker.svg` },
  Kubernetes: { svg: `${logoBase}kubernetes.svg` },
  'GitHub Actions': { svg: `${logoBase}githubactions.svg` },
  PostgreSQL: { svg: `${logoBase}postgresql.svg` },
  MySQL: { svg: `${logoBase}mysql.svg` },
  Streamlit: { svg: `${logoBase}streamlit.svg` },
  OpenAI: { png: `${logoBase}openai.png`, svg: `${logoBase}openai.svg` },
  Pinecone: { png: `${logoBase}pinecone.png` },
  Weaviate: { png: `${logoBase}weaviate.png` },
  'Apache Kafka': { svg: `${logoBase}apachekafka.svg` },
  'Apache Hadoop': { svg: `${logoBase}apachehadoop.svg` },
  'Apache Spark': { svg: `${logoBase}apachespark.svg` },
  JavaScript: { png: `${logoBase}javascript.png` },
  HTML: { png: `${logoBase}html5.png` },
  CSS: { png: `${logoBase}css3.png` },
  Flask: { png: `${logoBase}flask.png` },
  AWS: { png: `${logoBase}aws.png` },
  Azure: { png: `${logoBase}azure.png` },
  Pandas: { png: `${logoBase}pandas.png` },
  NumPy: { png: `${logoBase}numpy.png` },
};

type SliderSize = 'compact' | 'wide' | 'full';

type SliderProps = {
  ariaLabel: string;
  children: ReactNode;
  size?: SliderSize;
};

function Slider({ ariaLabel, children, size = 'wide' }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const updateScrollable = () => {
      setScrollable(track.scrollWidth > track.clientWidth + 4);
    };

    updateScrollable();
    const observer = new ResizeObserver(updateScrollable);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const amount = Math.max(track.clientWidth * 0.85, 260);
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <div className={`v2-slider v2-slider--${size}`}>
      <div className={`v2-slider__controls${scrollable ? '' : ' is-hidden'}`}>
        <button
          className="v2-slider__btn"
          type="button"
          aria-label={`Scroll ${ariaLabel} left`}
          onClick={() => scrollBy(-1)}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="v2-slider__btn"
          type="button"
          aria-label={`Scroll ${ariaLabel} right`}
          onClick={() => scrollBy(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="v2-slider__track" ref={trackRef} aria-label={ariaLabel} role="group">
        {children}
      </div>
    </div>
  );
}

export default function V2App() {
  useEffect(() => {
    const frames = Array.from(document.querySelectorAll('.v2-section__frame'));
    if (frames.length === 0) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      frames.forEach((frame) => frame.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    frames.forEach((frame) => observer.observe(frame));
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: 'LLM systems',
      description:
        'On-device chatbots, conversational AI, and transformer fine-tuning for production-ready assistants.',
    },
    {
      icon: Search,
      title: 'RAG and vector search',
      description:
        'FAISS, Pinecone, and Weaviate stacks for grounded responses, embeddings, and semantic retrieval.',
    },
    {
      icon: Database,
      title: 'Data engineering',
      description:
        'Streaming and batch pipelines with PySpark, Hadoop, SQL, and Kafka for analytics at scale.',
    },
    {
      icon: LineChart,
      title: 'Risk analytics',
      description:
        'Market risk monitoring, VaR, backtesting, and signal automation for trading workflows.',
    },
    {
      icon: ShieldCheck,
      title: 'Federated learning',
      description:
        'Privacy-preserving FL and VFL frameworks with secure aggregation and compliance focus.',
    },
    {
      icon: Mic,
      title: 'Speech processing',
      description:
        'Noise reduction and enhancement models in MATLAB, Simulink, and optimized C pipelines.',
    },
  ];

  const skillCaseStudies = [
    {
      title: 'LLM + RAG Systems',
      image: images.hero,
      alt: 'Abstract AI system visual',
      problem: 'Need grounded, private, and low-latency AI assistants.',
      impact: 'Delivered local and cloud LLM assistants with reliable RAG pipelines.',
      stack: ['Llama', 'OpenAI', 'Ollama', 'RAG', 'Embeddings', 'FAISS', 'Prompt Engineering'],
    },
    {
      title: 'Data Engineering Foundations',
      image: images.data,
      alt: 'Data pipeline visualization',
      problem: 'Ingest, clean, and normalize market and research data reliably.',
      impact: 'Designed ETL pipelines that power analytics, forecasting, and dashboards.',
      stack: ['Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'MySQL', 'Market Data'],
    },
    {
      title: 'Risk & Trading Intelligence',
      image: images.skyline,
      alt: 'City skyline with market glow',
      problem: 'Turn noisy market data into actionable trading signals.',
      impact: 'Built backtesting workflows, risk metrics, and multi-asset dashboards.',
      stack: ['Backtesting', 'Risk', 'Trading', 'Forex', 'Crypto', 'Analytics'],
    },
    {
      title: 'Deployment & MLOps',
      image: images.network,
      alt: 'Connected network nodes',
      problem: 'Ship models with reproducibility, speed, and reliability.',
      impact: 'Containerized services with CI/CD and cloud-ready deployment patterns.',
      stack: ['Docker', 'CI/CD', 'GitHub Actions', 'Azure', 'FastAPI', 'Flask', 'REST APIs'],
    },
    {
      title: 'Product UI & Dashboards',
      image: images.ui,
      alt: 'Interface panels and dashboards',
      problem: 'Surface AI insights through fast, usable interfaces.',
      impact: 'Built interactive dashboards and data products for decision-making.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Modeling & Forecasting',
      image: images.model,
      alt: 'Modeling chart and trajectory',
      problem: 'Forecast time-series behavior under volatility.',
      impact: 'Implemented LSTM forecasting and reinforcement learning experiments.',
      stack: ['PyTorch', 'LSTM', 'Reinforcement Learning', 'NLP'],
    },
    {
      title: 'Rapid Prototyping',
      image: images.lab,
      alt: 'AI lab environment',
      problem: 'Validate ideas quickly with usable demos.',
      impact: 'Delivered Streamlit prototypes for GenAI assistants and research workflows.',
      stack: ['Streamlit', 'LLM', 'Ollama', 'Vector Search'],
    },
  ];

  const projectCaseStudies = [
    {
      title: 'RAG with Ollama (Local & Free)',
      image: images.lab,
      alt: 'AI lab workspace',
      problem: 'Build private RAG without cloud dependencies.',
      impact: 'Delivered local Ollama + FAISS retrieval with a Streamlit UI.',
      stack: ['Ollama', 'FAISS', 'Streamlit', 'Python'],
    },
    {
      title: 'Banking Assist (Ollama)',
      image: images.data,
      alt: 'Data system visualization',
      problem: 'Simulate banking service workflows with realistic data.',
      impact: 'Implemented streaming assistant over FastAPI and SQLite.',
      stack: ['FastAPI', 'SQLite', 'WebSocket', 'Ollama'],
    },
    {
      title: 'FDR GenAI Assistant',
      image: images.hero,
      alt: 'AI platform hero visual',
      problem: 'Speed up financial dispute resolution with evidence-based answers.',
      impact: 'Automated PDF ingestion, RAG retrieval, classification, and severity scoring.',
      stack: ['FastAPI', 'FAISS', 'Llama', 'TF-IDF'],
    },
    {
      title: 'AI Stock Screener & Forecasting',
      image: images.data,
      alt: 'Market data visualization',
      problem: 'Enable offline-ready screening and forecasting for equities.',
      impact: 'Built LSTM forecasting, TA engines, and agentic AI insights in Streamlit.',
      stack: ['Streamlit', 'PyTorch', 'LSTM', 'Ollama'],
    },
    {
      title: 'Trading AI Platform & Risk Suite',
      image: images.skyline,
      alt: 'Market skyline visual',
      problem:
        'Deliver real-time market intelligence, risk dashboards, and signal workflows in one platform.',
      impact:
        'Unified Angel One + Yahoo Finance ingestion, FastAPI services, React/TradingView UI, and MT5/Plotly risk analytics.',
      stack: [
        'FastAPI',
        'React',
        'TradingView',
        'Angel One',
        'Yahoo Finance',
        'Python',
        'ETL',
        'MetaTrader5',
        'Plotly',
        'Risk',
      ],
    },
    {
      title: 'Vertical Federated Learning Prototype',
      image: images.network,
      alt: 'Federated network visualization',
      problem: 'Train models on split features without sharing raw data.',
      impact: 'Implemented VFL with secure aggregation and TenSEAL options.',
      stack: ['Python', 'TenSEAL', 'Federated Learning'],
    },
    {
      title: 'GenAI Lab Chatbot',
      image: images.lab,
      alt: 'Chatbot lab interface',
      problem: 'Blend local LLM responses with live web context.',
      impact: 'Built Streamlit chatbot with spaCy NLP and SerpAPI search.',
      stack: ['Streamlit', 'Llama', 'spaCy', 'SerpAPI'],
    },
    {
      title: 'LLM Classification Finetuning',
      image: images.model,
      alt: 'Model training visualization',
      problem: 'Predict preferred LLM responses from conversation data.',
      impact: 'Fine-tuned RoBERTa to classify Chatbot Arena preferences.',
      stack: ['Transformers', 'RoBERTa', 'Python'],
    },
  ];

  const experience = [
    {
      role: 'Risk Analyst',
      company: 'Educate2Trade',
      period: 'Sept 2024 - Present',
      highlights: [
        'LLM-driven sentiment pipelines and real-time market analytics.',
        'ETL pipelines for economic data, volatility feeds, and indicators.',
        'Backtesting frameworks and risk-compliance workflows.',
      ],
    },
    {
      role: 'Data Scientist',
      company: 'Dogvatar (University of East London)',
      period: 'May 2022 - June 2024',
      highlights: [
        'Predictive models for canine behavior with global research partners.',
        'MLOps foundations for reproducible pipelines and CI/CD.',
        'Nature Scientific Reports publication (2024).',
      ],
    },
    {
      role: 'Data Scientist (TA)',
      company: 'University of East London',
      period: 'May 2022 - Sept 2024',
      highlights: [
        'Big data pipelines and LLM fine-tuning workflows.',
        'Cloud-hosted AI applications for research automation.',
        'Mentored 150+ students across AI and big data.',
      ],
    },
    {
      role: 'Research Fellow',
      company: 'eiTRA, eInfochips',
      period: 'July 2018 - June 2019',
      highlights: [
        'Speech enhancement models and embedded C optimization.',
        'Peer-reviewed publications on noise reduction.',
      ],
    },
  ];

  const publications = [
    {
      title: 'An AI Approach to Predicting Personality Types in Dogs',
      venue: 'Nature Scientific Reports',
      year: '2024',
      link: 'https://doi.org/10.1038/s41598-024-52920-9',
    },
    {
      title: 'Speech Noise Reduction for Speech Processing Areas',
      venue: 'Lambart Book Publication',
      year: '2019',
    },
    {
      title: 'Design and Study of Noise Reduction Strategies for Voice Signal',
      venue: 'Journal of Applied Science and Computations',
      year: '2019',
    },
  ];

  const education = [
    {
      degree: 'MSc Artificial Intelligence',
      school: 'University of East London',
      year: '2022',
      grade: 'Distinction',
    },
    {
      degree: 'MEng Signal Processing and Communication',
      school: 'Gujarat Technological University',
      year: '2019',
      grade: 'Distinction',
    },
    {
      degree: 'BEng Electronics and Communication',
      school: 'Gujarat Technological University',
      year: '2012',
      grade: 'Distinction',
    },
  ];

  const renderStackChip = (tag: string) => {
    const logo = stackLogos[tag];
    const src = logo?.png ?? logo?.svg;
    const fallback = logo?.png ? logo.svg : undefined;

    return (
      <span className="v2-case__chip" key={tag}>
        {src && (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            data-fallback={fallback ?? ''}
            onError={(event) => {
              const next = event.currentTarget.dataset.fallback;
              if (next && !event.currentTarget.dataset.fallbackUsed) {
                event.currentTarget.src = next;
                event.currentTarget.dataset.fallbackUsed = 'true';
                return;
              }
              event.currentTarget.style.display = 'none';
            }}
          />
        )}
        {tag}
      </span>
    );
  };

  return (
    <div className="v2">
      <header className="v2-nav">
        <div className="v2-container v2-nav__inner">
          <a href="index.html" className="v2-logo">
            <span>VY</span>
          </a>
          <nav className="v2-nav__links">
            <a href="#systems">Systems</a>
            <a href="#skills">Skills</a>
            <a href="#studio">Studio</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="v2-cta">
            Let's talk
          </a>
        </div>
      </header>

      <main>
        <section className="v2-hero v2-section--frame v2-section--teal" id="top">
          <div className="v2-container">
            <div className="v2-section__frame v2-section__frame--hero">
              <div className="v2-hero__panel">
                <div className="v2-hero__top">
                  <a className="v2-pill" href="tel:+447880038549">
                    <span className="v2-pill__icon">
                      <Phone size={16} />
                    </span>
                    <span>(+44) 7880 038549</span>
                  </a>
                  <a className="v2-pill" href="mailto:yadavvinay77@gmail.com">
                    <span className="v2-pill__icon">
                      <Mail size={16} />
                    </span>
                    <span>yadavvinay77@gmail.com</span>
                  </a>
                  <div className="v2-pill">
                    <span className="v2-pill__icon">
                      <MapPin size={16} />
                    </span>
                    <span>London, UK</span>
                  </div>
                </div>
                <div className="v2-hero__main">
                  <div className="v2-hero__portrait">
                    <span className="v2-hero__ring v2-hero__ring--outer" aria-hidden="true" />
                    <span className="v2-hero__ring v2-hero__ring--mid" aria-hidden="true" />
                    <span className="v2-hero__ring v2-hero__ring--inner" aria-hidden="true" />
                    <img src={images.portrait} alt="Vinaykumar Yadav portrait" />
                  </div>
                  <div className="v2-hero__content">
                    <div className="v2-hero__name">
                      <span>Vinaykumar Yadav</span>
                      <span className="v2-hero__role">AI/ML Engineer</span>
                    </div>
                    <h1>Innovating through logic and code.</h1>
                    <p className="v2-lead">
                      Building high-impact AI systems, LLM products, and data pipelines for finance,
                      research, and academia. Focused on real-time intelligence, privacy-first learning,
                      and scalable deployment.
                    </p>
                    <div className="v2-hero__actions">
                      <a href="#contact" className="v2-btn v2-btn--primary">
                        Work together
                      </a>
                      <a href="mailto:yadavvinay77@gmail.com" className="v2-btn v2-btn--ghost">
                        Email me
                      </a>
                    </div>
                    <div className="v2-hero__stats">
                      <div className="v2-stat">
                        <Sparkles size={18} />
                        <div>
                          <span>6+ years</span>
                          <p>AI/ML delivery</p>
                        </div>
                      </div>
                      <div className="v2-stat">
                        <Users size={18} />
                        <div>
                          <span>150+ mentees</span>
                          <p>AI and big data</p>
                        </div>
                      </div>
                      <div className="v2-stat">
                        <BookOpen size={18} />
                        <div>
                          <span>Nature 2024</span>
                          <p>Published research</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--blue" id="systems">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Signature Systems</p>
                <h2>Product-grade AI capabilities</h2>
                <p>
                  A portfolio built around intelligent systems that ship, scale, and integrate with
                  real business workflows.
                </p>
              </div>
              <Slider ariaLabel="Signature systems" size="compact">
                {highlights.map((item) => (
                  <div className="v2-card" key={item.title}>
                    <div className="v2-card__icon">
                      <item.icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--amber" id="skills">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Skills</p>
                <h2>Full-stack AI engineering toolkit</h2>
                <p>
                  Skills and tooling derived from recent hands-on projects across LLMs, data pipelines,
                  and production delivery.
                </p>
              </div>
              <Slider ariaLabel="Skills case studies" size="wide">
                {skillCaseStudies.map((item) => (
                  <article className="v2-case" key={item.title}>
                    <div className="v2-case__image">
                      <img src={item.image} alt={item.alt} />
                    </div>
                    <div className="v2-case__body">
                      <h3>{item.title}</h3>
                      <div className="v2-case__row">
                        <span className="v2-case__label">Problem</span>
                        <p>{item.problem}</p>
                      </div>
                      <div className="v2-case__row">
                        <span className="v2-case__label">Impact</span>
                        <p>{item.impact}</p>
                      </div>
                      <div className="v2-case__stack">
                        {item.stack.map(renderStackChip)}
                      </div>
                    </div>
                  </article>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-split v2-section--frame v2-section--teal" id="studio">
          <div className="v2-container">
            <div className="v2-section__frame">
              <Slider ariaLabel="LLM studio" size="full">
                <div className="v2-split__grid">
                  <div className="v2-split__visual">
                    <img src={images.lab} alt="AI lab environment" />
                  </div>
                  <div className="v2-split__content">
                    <p className="v2-eyebrow">LLM Studio</p>
                    <h2>From prototypes to production</h2>
                    <p>
                      I architect end-to-end LLM solutions: data ingestion, vectorization, retrieval,
                      evaluation, and deployment. The goal is reliable intelligence with measurable
                      impact.
                    </p>
                    <div className="v2-tags">
                      {[
                        'Llama',
                        'Mistral',
                        'OpenAI',
                        'LoRA/QLoRA',
                        'FAISS',
                        'Pinecone',
                        'Weaviate',
                        'Docker',
                        'Kubernetes',
                      ].map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-gallery v2-section--frame v2-section--blue">
          <div className="v2-container">
            <div className="v2-section__frame">
              <Slider ariaLabel="Capability gallery" size="wide">
                <div className="v2-gallery__card">
                  <img src={images.data} alt="Data pipeline visualization" />
                  <div>
                    <h3>Data pipelines</h3>
                    <p>Streaming, ETL, and analytics-ready data products.</p>
                  </div>
                </div>
                <div className="v2-gallery__card">
                  <img src={images.skyline} alt="City skyline with lights" />
                  <div>
                    <h3>Risk intelligence</h3>
                    <p>Signals, dashboards, and market monitoring in real time.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--amber" id="projects">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Projects</p>
                <h2>Recent builds and prototypes</h2>
                <p>
                  Selected projects spanning RAG systems, trading analytics, federated learning, and
                  GenAI applications.
                </p>
              </div>
              <Slider ariaLabel="Project case studies" size="wide">
                {projectCaseStudies.map((item) => (
                  <article className="v2-case" key={item.title}>
                    <div className="v2-case__image">
                      <img src={item.image} alt={item.alt} />
                    </div>
                    <div className="v2-case__body">
                      <h3>{item.title}</h3>
                      <div className="v2-case__row">
                        <span className="v2-case__label">Problem</span>
                        <p>{item.problem}</p>
                      </div>
                      <div className="v2-case__row">
                        <span className="v2-case__label">Impact</span>
                        <p>{item.impact}</p>
                      </div>
                      <div className="v2-case__stack">
                        {item.stack.map(renderStackChip)}
                      </div>
                    </div>
                  </article>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--teal" id="experience">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Experience</p>
                <h2>Applied leadership and delivery</h2>
                <p>
                  A blend of industry, research, and academic roles focused on AI impact.
                </p>
              </div>
              <Slider ariaLabel="Experience timeline" size="wide">
                {experience.map((item) => (
                  <div className="v2-timeline__item" key={item.role}>
                    <div className="v2-timeline__dot" />
                    <div className="v2-timeline__card">
                      <div className="v2-timeline__top">
                        <h3>{item.role}</h3>
                        <span>{item.period}</span>
                      </div>
                      <p className="v2-muted">{item.company}</p>
                      <ul>
                        {item.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--blue" id="research">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Research</p>
                <h2>Publications and peer review</h2>
                <p>Applied research delivered with measurable outcomes.</p>
              </div>
              <Slider ariaLabel="Research publications" size="compact">
                {publications.map((paper) => (
                  <div className="v2-card v2-card--flat" key={paper.title}>
                    <BookOpen size={20} />
                    <div>
                      <h3>{paper.title}</h3>
                      <p className="v2-muted">
                        {paper.venue} | {paper.year}
                      </p>
                      {paper.link && (
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          View DOI
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-section--frame v2-section--amber" id="education">
          <div className="v2-container">
            <div className="v2-section__frame">
              <div className="v2-section__header">
                <p className="v2-eyebrow">Education</p>
                <h2>Academic foundation</h2>
                <p>Advanced training in AI, signal processing, and communication systems.</p>
              </div>
              <Slider ariaLabel="Education timeline" size="compact">
                {education.map((item) => (
                  <div className="v2-card" key={item.degree}>
                    <div className="v2-card__icon">
                      <GraduationCap size={22} />
                    </div>
                    <h3>{item.degree}</h3>
                    <p className="v2-muted">{item.school}</p>
                    <p className="v2-muted">
                      {item.year} | {item.grade}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="v2-section v2-contact v2-section--frame v2-section--teal" id="contact">
          <div className="v2-container">
            <div className="v2-section__frame">
              <Slider ariaLabel="Contact details" size="full">
                <div className="v2-contact__grid">
                  <div>
                    <p className="v2-eyebrow">Contact</p>
                    <h2>Open to full-time roles and consulting</h2>
                    <p className="v2-muted">
                      Let's discuss AI strategy, data pipelines, or LLM products that move the needle.
                    </p>
                  </div>
                  <div className="v2-contact__cards">
                    <a href="mailto:yadavvinay77@gmail.com" className="v2-card">
                      <Mail size={20} />
                      <div>
                        <p>Email</p>
                        <span>yadavvinay77@gmail.com</span>
                      </div>
                    </a>
                    <a href="tel:+447880038549" className="v2-card">
                      <Phone size={20} />
                      <div>
                        <p>Phone</p>
                        <span>(+44) 7880 038549</span>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vinaykumar-yadav-633a86bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="v2-card"
                    >
                      <Linkedin size={20} />
                      <div>
                        <p>LinkedIn</p>
                        <span>vinaykumar-yadav</span>
                      </div>
                    </a>
                    <div className="v2-card">
                      <MapPin size={20} />
                      <div>
                        <p>Location</p>
                        <span>London, UK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
