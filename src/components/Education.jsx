import { GraduationCap, Award, Languages as LanguagesIcon, CheckCircle2, Globe } from 'lucide-react'
import { education, languages } from '../data/portfolioData'

export default function Education() {
  return (
    <section
      id="education"
      style={{
        paddingTop: 'clamp(3.5rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 5vw, 6rem)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Academic Credentials &amp; Communication
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Languages</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Formal Computer Science engineering background complemented by trilingual fluency in cross-functional team
            settings.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Education Card */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={24} color="var(--accent-cyan-light)" />
                </div>
                <span className="badge badge-cyan">{education.period}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.4rem' }}>
                {education.degree}
              </h3>

              <div style={{ fontSize: '1.02rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '1rem' }}>
                {education.institution}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1.5rem',
                }}
              >
                <Award size={16} color="var(--accent-emerald-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald-light)' }}>
                  CGPA: {education.cgpa}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {education.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2
                      size={16}
                      color="var(--accent-cyan-light)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              Affiliated to Visvesvaraya Technological University (VTU)
            </div>
          </div>

          {/* Languages Card */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LanguagesIcon size={24} color="#c084fc" />
                </div>
                <span className="badge badge-purple">Trilingual Communication</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.4rem' }}>
                Language Proficiencies
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Fluent verbal and written communication for collaborating with distributed engineering teams, business
                stakeholders, and client managers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem 1.25rem',
                      background: 'rgba(30, 41, 59, 0.5)',
                      borderRadius: '10px',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Globe size={18} color="var(--accent-cyan-light)" />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>{lang.language}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{lang.proficiency}</div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--accent-emerald-light)',
                        fontWeight: 600,
                      }}
                    >
                      {lang.rating}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              Effective communication across English, South-Indian regional, and national stakeholder bases.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
