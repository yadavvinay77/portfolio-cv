import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Impact', href: '#impact' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Education', href: '#education' },
    { label: 'Version 2', href: 'index.html' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#overview" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] flex items-center justify-center font-semibold">
              VY
            </div>
            <span className="hidden sm:block font-display text-lg">
              Vinaykumar Yadav
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-[color:var(--muted)]">
            <div className="flex items-baseline space-x-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[color:var(--accent-strong)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex">
            <a href="#contact" className="btn-secondary text-sm">
              Contact
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[color:var(--ink)] hover:text-[color:var(--accent-strong)]"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[color:var(--surface)] border-t border-[color:var(--line)]">
          <div className="px-6 pt-4 pb-6 space-y-3 text-[color:var(--muted)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-base font-medium hover:text-[color:var(--accent-strong)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full btn-primary text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
