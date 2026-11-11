import { useState } from 'react'
import {
  Layout,
  Server,
  Database,
  Cloud,
  Smartphone,
  Cpu,
  Search,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import { technicalSkills } from '../data/portfolioData'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const iconMap = {
    Layout: <Layout size={22} color="var(--accent-cyan-light)" />,
    Server: <Server size={22} color="#60a5fa" />,
    Database: <Database size={22} color="#34d399" />,
    Cloud: <Cloud size={22} color="#f59e0b" />,
    Smartphone: <Smartphone size={22} color="#c084fc" />,
    Cpu: <Cpu size={22} color="#f43f5e" />,
  }

  const categoryNames = ['All', ...technicalSkills.map((c) => c.category)]

  // Filter skills based on category and search query
  const filteredCategories = technicalSkills
    .map((cat) => {
      const matchesCategory = activeCategory === 'All' || cat.category === activeCategory
      if (!matchesCategory) return null

      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      )

      if (searchQuery && matchingSkills.length === 0) return null

      return {
        ...cat,
        skills: matchingSkills,
      }
    })
    .filter(Boolean)

  const totalSkillCount = technicalSkills.reduce((acc, cat) => acc + cat.skills.length, 0)

  return (
    <section
      id="skills"
      style={{
        paddingTop: 'clamp(3.5rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 5vw, 6rem)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Technical Expertise
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A comprehensive overview of my frontend, backend, database, and cloud engineering toolkit built over 3.4+
            years of production application development.
          </p>
        </div>

        {/* Filter bar and search input */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '1rem 1.25rem',
            borderRadius: '14px',
            border: '1px solid var(--border-glass)',
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
            }}
          >
            {categoryNames.map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border:
                    activeCategory === catName
                      ? '1px solid var(--accent-cyan)'
                      : '1px solid var(--border-glass)',
                  background:
                    activeCategory === catName
                      ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)'
                      : 'rgba(30, 41, 59, 0.5)',
                  color: activeCategory === catName ? '#ffffff' : 'var(--text-secondary)',
                }}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              minWidth: '220px',
            }}
          >
            <Search
              size={15}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }}
            />
            <input
              type="text"
              placeholder={`Search ${totalSkillCount} skills...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.8rem 0.5rem 2.2rem',
                borderRadius: '8px',
                background: '#090e1a',
                border: '1px solid var(--border-glass)',
                color: '#ffffff',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(30, 41, 59, 0.7)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[cat.icon] || <Cpu size={22} />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {cat.category}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1.25rem',
                  }}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '0.45rem 0.8rem',
                        borderRadius: '8px',
                        background: skill.featured
                          ? 'rgba(6, 182, 212, 0.12)'
                          : 'rgba(30, 41, 59, 0.6)',
                        border: skill.featured
                          ? '1px solid rgba(56, 189, 248, 0.35)'
                          : '1px solid var(--border-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'transform 0.15s ease',
                      }}
                    >
                      {skill.featured ? (
                        <Sparkles size={12} color="var(--accent-cyan-light)" />
                      ) : (
                        <CheckCircle size={12} color="var(--accent-emerald-light)" />
                      )}
                      <span
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: skill.featured ? 600 : 500,
                          color: skill.featured ? '#f8fafc' : 'var(--text-secondary)',
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          color: skill.featured ? 'var(--accent-cyan-light)' : 'var(--text-muted)',
                          marginLeft: '0.2rem',
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>{cat.skills.length} Technologies</span>
                <span style={{ color: 'var(--accent-emerald-light)' }}>✓ Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
