import { Award, GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'University of East London, UK',
      year: 'Sept 2022',
      grade: 'Distinction',
    },
    {
      degree: 'Master of Engineering in Signal Processing and Communication',
      institution: 'Gujarat Technological University, India',
      year: 'June 2019',
      grade: 'Distinction',
    },
    {
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      institution: 'Gujarat Technological University, India',
      year: 'June 2012',
      grade: 'Distinction',
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-kicker">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic background</h2>
          <p className="text-[color:var(--muted)] mt-3 max-w-3xl mx-auto">
            Advanced training in AI, signal processing, and communication systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <GraduationCap className="text-[color:var(--accent-strong)]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[color:var(--ink)] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[color:var(--muted)]">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-[color:var(--muted)]">
                    <span>{edu.year}</span>
                    <span className="flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-1 bg-white/70">
                      <Award className="text-[color:var(--accent-strong)]" size={14} />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
