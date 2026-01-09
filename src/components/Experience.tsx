import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Risk Analyst',
      company: 'Educate2Trade',
      location: 'London',
      period: 'Sept 2024 - Present',
      highlights: [
        'Automated market sentiment extraction and risk signal generation with LLM pipelines.',
        'Built Python-based analytics engines integrating economic data, volatility feeds, and indicators.',
        'Designed ETL pipelines to ingest and transform financial datasets into dashboards.',
        'Developed backtesting frameworks and optimized algorithmic trading workflows.',
        'Ensured adherence to risk, compliance, and audit standards.',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Dogvatar (R&D Project, University of East London)',
      location: 'London',
      period: 'May 2022 - June 2024',
      highlights: [
        'Developed AI-driven predictive models for canine behavior using large dynamic datasets.',
        'Implemented ML pipelines for feature extraction, clustering, and model optimization.',
        'Built Power BI dashboards with automated refresh workflows.',
        'Introduced MLOps practices: CI/CD, model versioning, reproducible pipelines.',
        'Published in Nature Scientific Reports on canine personality prediction.',
      ],
    },
    {
      title: 'Data Scientist (TA) - AI / Big Data / Power BI',
      company: 'University of East London',
      location: 'London',
      period: 'May 2022 - Sept 2024',
      highlights: [
        'Developed scalable big data pipelines with Hadoop, PySpark, and HDFS.',
        'Engineered end-to-end ML workflows including LLM fine-tuning and evaluation.',
        'Built cloud-hosted AI applications for NLP and research automation use cases.',
        'Mentored 150+ students on AI, ML, and Big Data technologies.',
      ],
    },
    {
      title: 'Research Fellow',
      company: 'eiTRA, eInfochips - An Arrow Company',
      location: 'India',
      period: 'July 2018 - June 2019',
      highlights: [
        'Developed speech enhancement models using statistical methods and adaptive filtering.',
        'Converted algorithms into optimized C code for embedded hardware.',
        'Created data pipelines for training on large-scale noisy speech datasets.',
        'Authored peer-reviewed research publications on speech quality improvement.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Shree Swaminarayan Computing Services Pvt. Ltd.',
      location: 'India',
      period: 'November 2012 - July 2016',
      highlights: [
        'Built web applications using Django, HTML, CSS, JavaScript, and MySQL.',
        'Developed backend APIs, authentication, and data-driven features.',
        'Managed deployments and Git-based version control.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-kicker">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work experience</h2>
          <p className="text-[color:var(--muted)] mt-3 max-w-3xl mx-auto">
            A blend of industry delivery, research leadership, and academic mentorship.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-[color:var(--line)]" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-12">
                <div className="hidden md:flex absolute left-0 top-6 h-9 w-9 rounded-full bg-[color:var(--surface-2)] border border-[color:var(--line)] items-center justify-center">
                  <Briefcase size={18} className="text-[color:var(--accent-strong)]" />
                </div>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[color:var(--ink)]">
                        {exp.title}
                      </h3>
                      <p className="text-[color:var(--muted)]">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-[color:var(--muted)] mt-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-[color:var(--muted)]">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
