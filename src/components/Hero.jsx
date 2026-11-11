import { useState } from 'react'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Terminal,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section
      id="about"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Bio & CTAs */}
          <div>
            {/* Experience Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                <Sparkles size={14} />
                Full Stack Developer • 3.4+ Years Experience
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}
              >
                <MapPin size={13} color="var(--accent-cyan)" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 1.8rem + 2.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 1rem + 0.4vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--accent-cyan-light)',
                marginBottom: '1rem',
                lineHeight: 1.4,
              }}
            >
              Building responsive web applications, real-time microservices, and multi-tenant SaaS platforms.
            </p>

            {/* Summary text */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              Specialized in the <strong>MERN stack (React.js, Node.js, Express.js, MongoDB)</strong>,{' '}
              <strong>Python FastAPI</strong>, and <strong>NestJS</strong>. Experienced in designing REST APIs,
              real-time WebSocket streams, state management with Redux, Docker containerization, and AWS EC2 production
              deployments.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '2.5rem' }}>
              <a href="#sufisys" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                <Layers size={18} />
                Explore SufiSys SaaS
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}>
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="#experience"
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.4rem', fontSize: '0.95rem' }}
              >
                View Experience
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                title="View GitHub Profile"
              >
                <GithubIcon size={16} />
                GitHub
                <ExternalLink size={12} opacity={0.7} />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                title="View LinkedIn Profile"
              >
                <LinkedinIcon size={16} color="#0a66c2" />
                LinkedIn
                <ExternalLink size={12} opacity={0.7} />
              </a>

              {/* Email Copy Pill */}
              <button
                onClick={handleCopyEmail}
                className="btn btn-outline"
                style={{
                  padding: '0.5rem 0.9rem',
                  fontSize: '0.85rem',
                  color: copiedEmail ? 'var(--accent-emerald-light)' : 'inherit',
                  borderColor: copiedEmail ? 'var(--accent-emerald)' : undefined,
                }}
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
                {copiedEmail ? 'Copied Email!' : personalInfo.email}
              </button>

              {/* Phone Direct */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="btn btn-outline"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                title="Call phone"
              >
                <Phone size={15} color="var(--accent-cyan-light)" />
                {personalInfo.formattedPhone}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Card / Profile Visual */}
          <div style={{ position: 'relative' }}>
            {/* Ambient decorative glow */}
            <div
              style={{
                position: 'absolute',
                top: '-15%',
                right: '-10%',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />

            {/* Code Terminal Box */}
            <div
              className="glass-panel"
              style={{
                padding: '0',
                overflow: 'hidden',
                background: '#090d16',
                border: '1px solid rgba(56, 189, 248, 0.25)',
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }}></span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Terminal size={13} color="var(--accent-cyan)" />
                  sudarshan_profile.ts
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald-light)', fontWeight: 600 }}>
                  ● Active
                </div>
              </div>

              {/* Code Contents */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: 1.8,
                  overflowX: 'auto',
                }}
              >
                <div>
                  <span style={{ color: '#c084fc' }}>const</span>{' '}
                  <span style={{ color: '#38bdf8' }}>developer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>name:</span>{' '}
                  <span style={{ color: '#34d399' }}>"{personalInfo.name}"</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>experience:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>3.4</span>{' '}
                  <span style={{ color: '#64748b' }}>// years</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>location:</span>{' '}
                  <span style={{ color: '#34d399' }}>"{personalInfo.location}"</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>coreStack:</span> [
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span style={{ color: '#38bdf8' }}>'React.js'</span>,{' '}
                    <span style={{ color: '#38bdf8' }}>'Next.js'</span>,{' '}
                    <span style={{ color: '#38bdf8' }}>'Node.js'</span>,
                    <br />
                    <span style={{ color: '#38bdf8' }}>'FastAPI (Python)'</span>,{' '}
                    <span style={{ color: '#38bdf8' }}>'NestJS'</span>,
                    <br />
                    <span style={{ color: '#38bdf8' }}>'MongoDB'</span>,{' '}
                    <span style={{ color: '#38bdf8' }}>'Redux'</span>
                  </div>
                  <span style={{ color: '#94a3b8' }}>]</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>flagshipProject:</span> &#123;
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span style={{ color: '#94a3b8' }}>name:</span>{' '}
                    <span style={{ color: '#34d399' }}>"SufiSys"</span>,
                    <br />
                    <span style={{ color: '#94a3b8' }}>type:</span>{' '}
                    <span style={{ color: '#fbbf24' }}>"Multi-Tenant Finance SaaS"</span>,
                    <br />
                    <span style={{ color: '#94a3b8' }}>apps:</span>{' '}
                    <span style={{ color: '#38bdf8' }}>["React Web", "Expo Android"]</span>
                  </div>
                  <span style={{ color: '#94a3b8' }}>&#125;</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>devOps:</span> [
                  <span style={{ color: '#38bdf8' }}>'AWS EC2'</span>,{' '}
                  <span style={{ color: '#38bdf8' }}>'Docker'</span>,{' '}
                  <span style={{ color: '#38bdf8' }}>'Nginx'</span>,{' '}
                  <span style={{ color: '#38bdf8' }}>'CI/CD'</span>],
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>readyToDeliver:</span>{' '}
                  <span style={{ color: '#c084fc' }}>true</span>
                </div>
                <div>&#125;</div>
              </div>

              {/* Status bar bottom */}
              <div
                style={{
                  padding: '0.6rem 1.25rem',
                  background: 'rgba(15, 23, 42, 0.95)',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>UTF-8 • TypeScript 5.5</span>
                <span style={{ color: 'var(--accent-emerald-light)' }}>✓ Compiles 0 errors</span>
              </div>
            </div>

            {/* Quick Metrics Float Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginTop: '1rem',
              }}
            >
              {personalInfo.highlights.slice(0, 2).map((h, i) => (
                <div
                  key={i}
                  className="glass-panel"
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.65)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8' }}>{h.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
