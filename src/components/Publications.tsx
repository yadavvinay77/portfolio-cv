import { BookOpen, ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'An AI Approach to Predicting Personality Types in Dogs',
      journal: 'Nature Scientific Reports',
      year: '2024',
      description:
        'Developed machine learning models to analyze and predict canine behavior using observed trait datasets.',
      link: 'https://doi.org/10.1038/s41598-024-52920-9',
      featured: true,
    },
    {
      title: 'Speech Noise Reduction for Speech Processing Areas',
      journal: 'Lambart Book Publication',
      year: '2019',
      description: 'Comprehensive research on noise reduction strategies for speech processing applications.',
      featured: false,
    },
    {
      title: 'Design and Study of Noise Reduction Strategies for Voice Signal',
      journal: 'Journal of Applied Science and Computations',
      year: '2019',
      description: 'Volume 6, Issue 4, April 2019',
      doi: '16.10089.JASC.2018.V6I4.453459.150010980',
      featured: false,
    },
  ];

  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-kicker">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
          <p className="text-[color:var(--muted)] mt-3 max-w-3xl mx-auto">
            Applied research with peer-reviewed outcomes across AI, behavior analysis, and speech processing.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`card p-6 ${pub.featured ? 'card-highlight' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <BookOpen className="text-[color:var(--accent-strong)]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[color:var(--ink)] mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)] mb-3">
                    <span className="font-medium text-[color:var(--accent-strong)]">
                      {pub.journal}
                    </span>
                    <span className="text-[color:var(--line)]">|</span>
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-[color:var(--muted)] leading-relaxed mb-3">
                    {pub.description}
                  </p>
                  {pub.doi && (
                    <p className="text-sm text-[color:var(--muted)] mb-4">
                      DOI: {pub.doi}
                    </p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm"
                    >
                      View publication
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
