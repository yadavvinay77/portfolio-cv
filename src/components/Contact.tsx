import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="card p-8 md:p-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Let&apos;s build the next AI milestone
              </h2>
              <p className="text-[color:var(--muted)] mt-4 leading-relaxed">
                I am available for full-time opportunities and consulting projects across AI/ML,
                data engineering, and risk analytics. Reach out to discuss collaboration, product ideas,
                or research partnerships.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="mailto:yadavvinay77@gmail.com" className="btn-primary">
                  <Mail size={18} />
                  Email me
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
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:yadavvinay77@gmail.com"
                className="card p-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <Mail className="text-[color:var(--accent-strong)]" size={18} />
                </div>
                <span className="text-sm text-[color:var(--muted)]">yadavvinay77@gmail.com</span>
              </a>
              <a href="tel:+447880038549" className="card p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <Phone className="text-[color:var(--accent-strong)]" size={18} />
                </div>
                <span className="text-sm text-[color:var(--muted)]">(+44) 7880 038549</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vinaykumar-yadav-633a86bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <Linkedin className="text-[color:var(--accent-strong)]" size={18} />
                </div>
                <span className="text-sm text-[color:var(--muted)]">LinkedIn Profile</span>
              </a>
              <div className="card p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[color:var(--surface-2)] flex items-center justify-center">
                  <MapPin className="text-[color:var(--accent-strong)]" size={18} />
                </div>
                <span className="text-sm text-[color:var(--muted)]">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-[color:var(--muted)]">
          <p>&copy; {new Date().getFullYear()} Vinaykumar Yadav. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
