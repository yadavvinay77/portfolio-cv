import { Award, Mic, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Nature Scientific Reports publication',
      description: 'Led an AI-driven canine behavior prediction project with global research partners.',
    },
    {
      icon: Sparkles,
      title: 'LLM systems in production',
      description: 'Built RAG pipelines, vector search systems, and on-device chatbots.',
    },
    {
      icon: ShieldCheck,
      title: 'Federated learning frameworks',
      description: 'Designed privacy-preserving FL and VFL training workflows and secure aggregation.',
    },
    {
      icon: TrendingUp,
      title: 'End-to-end delivery',
      description: 'Delivered data pipelines, model training, deployment, and cross-functional execution.',
    },
    {
      icon: Users,
      title: 'Mentorship at scale',
      description: 'Guided 150+ students across ML, big data, and AI tooling.',
    },
    {
      icon: Mic,
      title: 'Speech processing research',
      description: 'Built noise-reduction algorithms in MATLAB, Simulink, and optimized C.',
    },
  ];

  return (
    <section id="impact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-kicker">Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Key achievements and outcomes
          </h2>
          <p className="text-[color:var(--muted)] mt-3 max-w-3xl mx-auto">
            Blending applied research with production engineering to deliver measurable outcomes in AI,
            data, and risk analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <item.icon className="text-[color:var(--accent-strong)]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--ink)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[color:var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
