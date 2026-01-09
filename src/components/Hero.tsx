import { BookOpen, LineChart, Linkedin, Mail, MapPin, Phone, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [portraitOk, setPortraitOk] = useState(true);

  const focusAreas = [
    'LLM Systems',
    'RAG + Vector Search',
    'Data Pipelines',
    'Risk Analytics',
    'MLOps and Deployment',
  ];

  const stats = [
    { icon: Sparkles, value: '6+ years', label: 'AI/ML delivery' },
    { icon: Users, value: '150+', label: 'Students mentored' },
    { icon: BookOpen, value: 'Nature', label: 'Scientific Reports' },
    { icon: LineChart, value: 'Risk', label: 'Analytics pipelines' },
  ];

  return (
    <section id="overview" className="pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="space-y-6">
          <p className="section-kicker reveal-up">AI / ML Engineer | Data Engineering Specialist</p>
          <h1 className="text-4xl md:text-6xl font-bold reveal-up delay-1">
            Vinaykumar Yadav
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--muted)] leading-relaxed reveal-up delay-2">
            AI/ML engineer with 6+ years of experience designing, deploying, and scaling intelligent systems,
            LLM applications, and data pipelines across finance, research, and academia. Focused on on-device
            chatbots, RAG pipelines, vector search, and production-ready AI services.
          </p>

          <div className="flex flex-wrap gap-3 reveal-up delay-3">
            {focusAreas.map((area) => (
              <span key={area} className="pill">
                {area}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 reveal-up delay-4">
            <a href="mailto:yadavvinay77@gmail.com" className="btn-primary">
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vinaykumar-yadav-633a86bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href="#publications" className="btn-secondary">
              <BookOpen size={18} />
              Publications
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--muted)]">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              London, UK
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} />
              (+44) 7880 038549
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="card p-6">
            <div className="relative h-64 rounded-3xl overflow-hidden bg-[color:var(--surface-2)]">
              <div className="absolute inset-0 hero-glow" />
              {portraitOk ? (
                <img
                  src="/images/vinay-portrait.jpg"
                  alt="Vinaykumar Yadav portrait"
                  className="relative z-10 h-full w-full object-cover"
                  onError={() => setPortraitOk(false)}
                />
              ) : (
                <div className="relative z-10 h-full w-full flex items-center justify-center text-5xl font-bold">
                  VY
                </div>
              )}
            </div>

            <div className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-[color:var(--accent-strong)]" />
                Published researcher in Nature Scientific Reports (2024).
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-[color:var(--accent-strong)]" />
                Mentored 150+ students in AI/ML and big data tooling.
              </div>
              <div className="flex items-center gap-3">
                <LineChart size={18} className="text-[color:var(--accent-strong)]" />
                Building risk analytics engines with real-time data feeds.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-white/70 p-4">
              <p className="section-kicker">Current</p>
              <p className="text-base font-semibold text-[color:var(--ink)]">
                Risk Analyst, Educate2Trade
              </p>
              <p className="text-sm text-[color:var(--muted)]">
                LLM-driven sentiment pipelines and market risk monitoring.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="card px-5 py-4 float-slow">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                Availability
              </p>
              <p className="text-sm font-semibold text-[color:var(--ink)]">
                Open to full-time roles and consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="card p-4 reveal-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[color:var(--surface-2)] flex items-center justify-center">
                <stat.icon size={18} className="text-[color:var(--accent-strong)]" />
              </div>
              <div>
                <p className="text-lg font-semibold text-[color:var(--ink)]">{stat.value}</p>
                <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
