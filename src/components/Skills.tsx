import {
  BarChart3,
  Brain,
  Database,
  LineChart,
  Mic,
  Search,
  Server,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'LLM and AI systems',
      icon: Brain,
      skills: [
        'LLMs (Llama, Mistral, OpenAI)',
        'Transformer fine-tuning (LoRA/QLoRA)',
        'RAG pipelines and embeddings',
        'Prompt engineering',
        'Model optimization and quantization',
        'Time-series ML and anomaly detection',
      ],
    },
    {
      category: 'Vector search and retrieval',
      icon: Search,
      skills: [
        'FAISS',
        'Pinecone',
        'Weaviate',
        'Semantic search',
        'Document chunking',
        'Knowledge grounding',
      ],
    },
    {
      category: 'Engineering and deployment',
      icon: Server,
      skills: [
        'Python and Django',
        'Docker and Kubernetes',
        'CI/CD with GitHub Actions',
        'AWS and cloud orchestration',
        'Real-time inference pipelines',
        'Local model hosting',
      ],
    },
    {
      category: 'Data engineering',
      icon: Database,
      skills: [
        'PySpark',
        'Hadoop and Hive',
        'SQL and ETL pipelines',
        'Kafka ingestion',
        'Data modeling',
        'Pipeline automation',
      ],
    },
    {
      category: 'Risk and analytics',
      icon: LineChart,
      skills: [
        'Market risk monitoring',
        'Exposure tracking',
        'Trade signal automation',
        'VaR and backtesting',
        'Financial data integration',
        'Risk dashboards',
      ],
    },
    {
      category: 'Tools and visualization',
      icon: BarChart3,
      skills: [
        'Power BI',
        'Pandas and NumPy',
        'Scikit-Learn',
        'MATLAB and Simulink',
        'Model evaluation',
        'Technical reporting',
      ],
    },
    {
      category: 'Speech and signal processing',
      icon: Mic,
      skills: [
        'Noise reduction',
        'Adaptive filtering',
        'Statistical modeling',
        'Embedded optimization in C',
      ],
    },
  ];

  return (
    <section id="expertise" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-kicker">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Core skills and tooling</h2>
          <p className="text-[color:var(--muted)] mt-3 max-w-3xl mx-auto">
            End-to-end capability across AI research, data engineering, deployment, and risk analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <category.icon className="text-[color:var(--accent-strong)]" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[color:var(--line)] bg-white/70 p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--ink)]">
                Leadership and collaboration
              </h3>
              <p className="text-[color:var(--muted)] mt-2">
                Stakeholder communication, technical documentation, mentoring, and cross-functional delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Mentoring',
                'Research writing',
                'Stakeholder alignment',
                'Problem-solving',
                'Team leadership',
              ].map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
