import { useState } from 'react'
import {
  Layers,
  Building2,
  CreditCard,
  PiggyBank,
  Smartphone,
  ShieldCheck,
  CloudLightning,
  CheckCircle2,
  ZoomIn,
  X,
  Laptop,
} from 'lucide-react'
import { sufisysProject } from '../data/portfolioData'

export default function SufiSysSpotlight() {
  const [activeTab, setActiveTab] = useState('dashboard') // 'dashboard' | 'pigmy' | 'mobile'
  const [modalImage, setModalImage] = useState(null)

  const iconMap = {
    Building2: <Building2 size={20} color="var(--accent-cyan-light)" />,
    CreditCard: <CreditCard size={20} color="#60a5fa" />,
    PiggyBank: <PiggyBank size={20} color="#c084fc" />,
    Smartphone: <Smartphone size={20} color="#34d399" />,
    ShieldCheck: <ShieldCheck size={20} color="#fbbf24" />,
    CloudLightning: <CloudLightning size={20} color="#f43f5e" />,
  }

  const tabList = [
    {
      id: 'dashboard',
      label: 'Multi-Tenant Web Dashboard',
      icon: <Laptop size={16} />,
      img: sufisysProject.images.dashboard,
      caption: 'Executive branch analytics, loan disbursement KPIs, and tenant database switcher',
    },
    {
      id: 'pigmy',
      label: 'Daily Pigmy Savings Ledger',
      icon: <PiggyBank size={16} />,
      img: sufisysProject.images.pigmy,
      caption: '30-day recurring deposit attendance heat-grid, interest accrual, and customer passbook',
    },
    {
      id: 'mobile',
      label: 'Expo Android Collector App',
      icon: <Smartphone size={16} />,
      img: sufisysProject.images.mobile,
      caption: 'React Native & Expo on-field agent route tracker, QR scanner, and offline cash sync',
    },
  ]

  const currentTab = tabList.find((t) => t.id === activeTab) || tabList[0]

  return (
    <section
      id="sufisys"
      style={{
        paddingTop: 'clamp(4rem, 6vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 6vw, 6.5rem)',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(6, 9, 19, 0) 0%, rgba(10, 16, 32, 0.75) 50%, rgba(6, 9, 19, 0) 100%)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Flagship Production Project
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{sufisysProject.title}</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 1.5rem auto' }}>
            {sufisysProject.subtitle}
          </p>

          {/* Tech stack badge strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {sufisysProject.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid var(--border-glass)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan-light)',
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Mockups & Showcase Tabs */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(1rem, 2.5vw, 2rem)',
            marginBottom: '3.5rem',
            background: 'rgba(10, 15, 29, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
          }}
        >
          {/* Tab Navigation Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {tabList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeTab === tab.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                    background:
                      activeTab === tab.id
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)'
                        : 'rgba(15, 23, 42, 0.6)',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Application Screenshots Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: 'var(--accent-emerald-light)',
                background: 'rgba(16, 185, 129, 0.12)',
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <CheckCircle2 size={14} color="var(--accent-emerald-light)" />
              <span>Live Application Screenshots Active</span>
            </div>
          </div>

          {/* Active Image Showcase Stage */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#040711',
              border: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '420px',
              padding: activeTab === 'mobile' ? '1.5rem 0' : '0',
            }}
          >
            <img
              src={currentTab.img}
              alt={currentTab.label}
              style={{
                width: activeTab === 'mobile' ? 'auto' : '100%',
                maxHeight: activeTab === 'mobile' ? '600px' : '650px',
                objectFit: 'contain',
                display: 'block',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => setModalImage(currentTab)}
              title="Click to zoom in fullscreen"
            />

            {/* Hover Zoom Action Badge */}
            <button
              onClick={() => setModalImage(currentTab)}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                border: '1px solid var(--border-glass)',
                padding: '0.5rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <ZoomIn size={15} />
              Expand View
            </button>
          </div>


        </div>

        {/* 6 Key Architectural Modules Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              System Modules &amp; Core Capabilities
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Engineered for strict tenant isolation, daily microfinance accounting, and seamless field agent mobility
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {sufisysProject.modules.map((mod, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {iconMap[mod.icon] || <Layers size={20} />}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>{mod.title}</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Highlights / Architecture Checklist */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 29, 0.95) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                Key Technical Deliverables
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                Full-Stack Architecture &amp; Production Milestones
              </h3>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}>
                Discuss SufiSys Architecture
              </a>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1rem',
            }}
          >
            {sufisysProject.keyAchievements.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.85rem',
                  background: 'rgba(30, 41, 59, 0.4)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <CheckCircle2 size={18} color="var(--accent-emerald-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {modalImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setModalImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                color: '#ffffff',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{modalImage.label}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{modalImage.caption}</p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                style={{
                  background: '#1e293b',
                  border: '1px solid var(--border-glass)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <img
              src={modalImage.img}
              alt={modalImage.label}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
