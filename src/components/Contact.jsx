import { useState } from 'react'
import {
  Mail,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const contactLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: <GithubIcon size={28} />,
      isExternal: true,
      btnText: 'Visit',
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: <LinkedinIcon size={28} color="#0a66c2" />,
      isExternal: true,
      btnText: 'Visit',
    },
    {
      name: 'Email',
      handle: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
      icon: <Mail size={28} color="var(--accent-cyan-light)" />,
      isEmail: true,
    },
  ]

  return (
    <section
      id="contact"
      style={{
        paddingTop: 'clamp(4rem, 6vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 6vw, 6.5rem)',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(6, 9, 19, 0) 0%, rgba(10, 16, 32, 0.9) 100%)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Get in Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Open to senior full-stack developer roles, SaaS architecture initiatives, and exciting engineering
            collaborations. Reach out directly or drop a message below.
          </p>
        </div>

        {/* Clean, Prominent Contact Icons Row */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noreferrer' : undefined}
              className="glass-panel"
              style={{
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                gap: '0.85rem',
                position: 'relative',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.5)',
                }}
              >
                {item.icon}
              </div>

              {/* Title & Optional Email Handle */}
              <div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {item.name}
                  {item.isExternal && <ExternalLink size={14} opacity={0.6} />}
                </div>

                {item.handle && (
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem',
                      wordBreak: 'break-all',
                    }}
                  >
                    {item.handle}
                  </div>
                )}
              </div>

              {/* Action Button */}
              {item.isEmail ? (
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span
                    className="btn btn-primary"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                  >
                    Send Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-outline"
                    style={{ padding: '0.45rem 0.8rem', fontSize: '0.82rem' }}
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ) : (
                <span
                  className="btn btn-secondary"
                  style={{ padding: '0.45rem 1.4rem', fontSize: '0.85rem', marginTop: '0.5rem' }}
                >
                  {item.btnText}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
