import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#04060d',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Left info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#ffffff',
                }}
              >
                SB
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
              Full Stack Developer specializing in React.js, Node.js, Python FastAPI, NestJS, and Multi-Tenant SaaS
              architectures.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.88rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              About
            </a>
            <a href="#sufisys" style={{ color: 'var(--accent-cyan-light)', textDecoration: 'none', fontWeight: 600 }}>
              SufiSys Project
            </a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Skills
            </a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Experience
            </a>
            <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Education
            </a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60a5fa',
                textDecoration: 'none',
              }}
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan-light)',
                textDecoration: 'none',
              }}
              title="Email"
            >
              <Mail size={17} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved. Built with React &amp; Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Bengaluru, India • Available for Full Stack Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
