import { Calendar, MapPin, CheckCircle2, Building } from 'lucide-react'
import { workExperience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        paddingTop: 'clamp(3.5rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 5vw, 6rem)',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(6, 9, 19, 0) 0%, rgba(11, 17, 32, 0.6) 50%, rgba(6, 9, 19, 0) 100%)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Career Journey
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            3.4+ years of hands-on software engineering delivering high-performance web applications, microservices,
            AI-streaming interfaces, and cloud infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, #06b6d4 0%, #3b82f6 50%, #1e293b 100%)',
              zIndex: 1,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {workExperience.map((exp, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '64px',
                  zIndex: 2,
                }}
              >
                {/* Timeline Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '20px',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#090d16',
                    border: '3px solid var(--accent-cyan)',
                    boxShadow: '0 0 16px rgba(6, 182, 212, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {/* Top Header Row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                        <Building size={18} color="var(--accent-cyan-light)" />
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                          {exp.company}
                        </h3>
                      </div>
                      <div
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: 'var(--accent-cyan-light)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {exp.role}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.4rem',
                      }}
                    >
                      <span
                        className="badge badge-cyan"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <MapPin size={12} color="var(--accent-cyan)" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Skills Tag Strip */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: 'rgba(30, 41, 59, 0.6)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {exp.achievements.map((item, aIdx) => (
                      <li
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          color="var(--accent-emerald-light)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{item}</span>
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
  )
}
