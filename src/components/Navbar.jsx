import { useState, useEffect } from 'react'
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'SufiSys SaaS', href: '#sufisys', featured: true },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const handlePrintResume = () => {
    window.print()
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(5, 8, 17, 0.88)'
          : 'rgba(5, 8, 17, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#ffffff',
              boxShadow: '0 4px 14px -2px rgba(6, 182, 212, 0.4)',
            }}
          >
            SB
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', color: 'var(--text-main)' }}>
              {personalInfo.name}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan-light)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="status-dot"></span>
              {personalInfo.status}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: link.featured ? 'var(--accent-cyan-light)' : 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: link.featured ? 600 : 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = link.featured ? 'var(--accent-cyan-light)' : 'var(--text-secondary)')
              }
            >
              {link.featured && <Sparkles size={14} />}
              {link.label}
              {link.featured && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    background: 'rgba(6, 182, 212, 0.18)',
                    color: '#38bdf8',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Featured
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
          <button
            onClick={handlePrintResume}
            className="btn btn-outline"
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
            title="Print or save full portfolio resume"
          >
            <FileText size={15} />
            Resume View
          </button>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
          >
            <Send size={15} />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid var(--border-glass)',
            borderRadius: '8px',
            color: 'var(--text-main)',
            width: '42px',
            height: '42px',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            width: '100%',
            background: 'rgba(10, 15, 29, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: link.featured ? 'var(--accent-cyan-light)' : 'var(--text-main)',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.6rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {link.featured && <Sparkles size={16} />}
                {link.label}
              </span>
              {link.featured && <span className="badge badge-cyan">Featured SaaS</span>}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                handlePrintResume()
              }}
              className="btn btn-outline"
              style={{ flex: 1, padding: '0.75rem' }}
            >
              <FileText size={16} />
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ flex: 1, padding: '0.75rem' }}
            >
              <Send size={16} />
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  )
}
