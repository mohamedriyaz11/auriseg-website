import React, { useState } from 'react';

const TEAM = [
  { id: 1, photo: '/images/About Us/team/Srini - Photo.png', name: 'Srinivasan M. S.', role: 'Founder & CEO', tag: 'Leadership', linkedin: 'https://www.linkedin.com/in/srinivasan-m-s-5690831a0' },
  { id: 2, photo: '/images/About Us/team/Saranya - Photo.png', name: 'Saranya Srinivasan', role: 'Co-Founder', tag: 'Leadership', linkedin: 'https://www.linkedin.com/in/saranyaauriseg' },
  { id: 3, photo: '/images/About Us/team/Mukesh - Photo.png', name: 'Mukesh Sharma', role: 'VP Operations', tag: 'Operations', linkedin: 'https://www.linkedin.com/in/mukesh2305' },
  { id: 4, photo: '/images/About Us/team/Sanjay - Photo.png', name: 'Sanjay G', role: 'VP Sales', tag: 'Sales', linkedin: 'https://www.linkedin.com/in/sanjaygopinathan' },
  { id: 5, photo: '/images/About Us/team/Daniel - Photo.png', name: 'Daniel Rhodes', role: 'Head of Marketing & Analytics', tag: 'Marketing', linkedin: 'https://www.linkedin.com/in/daniel-rhodes-1094a36b' },
  { id: 6, photo: '/images/About Us/team/jeyarajan - Photo.png', name: 'Jeyarajan R', role: 'Sr. Manager – Security Assessment', tag: 'Security', linkedin: 'https://www.linkedin.com/in/jeyarajan-gabriel-08546b16' },
  { id: 7, photo: '/images/About Us/team/Praveen - Photo.png', name: 'Praveen Kumar', role: 'Head of Compliance', tag: 'Compliance', linkedin: 'https://www.linkedin.com/in/praveen-p-4296615a' },
  { id: 8, photo: '/images/About Us/team/Rathinavel - Photo.png', name: 'Rathinavel M S', role: 'Manager – Product Engineering', tag: 'Engineering', linkedin: 'https://www.linkedin.com/in/rathinavelms' },
  { id: 9, photo: '/images/About Us/team/Shiva.png', name: 'Rathinavel M S', role: 'Manager – Product Engineering', tag: 'Engineering', linkedin: 'https://www.linkedin.com/in/rathinavelms' },
  { id: 8, photo: '/images/About Us/team/Thomson.png', name: 'Rathinavel M S', role: 'Manager – Product Engineering', tag: 'Engineering', linkedin: 'https://www.linkedin.com/in/rathinavelms' },
];

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M16.667 2.5H3.333A.833.833 0 002.5 3.333v13.334c0 .46.373.833.833.833h13.334a.833.833 0 00.833-.833V3.333A.833.833 0 0016.667 2.5zM7.083 14.167H5v-5.5h2.083v5.5zM6.042 7.75a1.208 1.208 0 110-2.416 1.208 1.208 0 010 2.416zm8.125 6.417H12.083V11.25c0-.792-.014-1.81-1.104-1.81-1.104 0-1.271.863-1.271 1.754v2.973H7.625v-5.5h1.997v.753h.028c.278-.527.958-1.083 1.972-1.083 2.108 0 2.498 1.39 2.498 3.197v3.633h.047z" fill="white" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TeamCard = ({ member, featured }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`at-card${featured ? ' at-card--featured' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag pill */}
      <span className="at-tag">{member.tag}</span>

      {/* Photo */}
      <img
        src={member.photo}
        alt={member.name}
        className={`at-photo${hovered ? ' at-photo--zoom' : ''}`}
        onError={(e) => { e.target.onerror = null; e.target.style.background = '#1a1a2e'; }}
      />

      {/* Always-visible name strip at bottom */}
      <div className={`at-strip${hovered ? ' at-strip--hidden' : ''}`}>
        <span className="at-strip-name">{member.name}</span>
      </div>

      {/* Hover overlay — slides up */}
      <div className={`at-overlay${hovered ? ' at-overlay--visible' : ''}`}>
        <div className="at-overlay-inner">
          <div className="at-overlay-text">
            <div className="at-overlay-role">{member.role}</div>
            <div className="at-overlay-name">{member.name}</div>
          </div>
          <div className="at-overlay-divider" />
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="at-overlay-btn"
            aria-label={`${member.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutTeam = () => (
  <>
    <style>{`
      /* ─── Section ─── */
      .at-section {
        width: 100%;
        background: #0A0A0F;
        box-sizing: border-box;
        padding: 96px 80px;
        position: relative;
        overflow: hidden;
      }

      /* Background ambient glow */
      .at-section::before {
        content: '';
        position: absolute;
        top: -200px; left: -200px;
        width: 600px; height: 600px;
        background: radial-gradient(circle, rgba(255,85,54,0.12) 0%, transparent 70%);
        pointer-events: none;
      }
      .at-section::after {
        content: '';
        position: absolute;
        bottom: -150px; right: -150px;
        width: 500px; height: 500px;
        background: radial-gradient(circle, rgba(255,85,54,0.08) 0%, transparent 70%);
        pointer-events: none;
      }

      /* ─── Header ─── */
      .at-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 64px;
        gap: 24px;
        position: relative;
        z-index: 1;
      }
      .at-header-left {}
      .at-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #FF5536;
        margin-bottom: 16px;
      }
      .at-eyebrow-line {
        width: 32px;
        height: 1.5px;
        background: #FF5536;
        display: inline-block;
      }
      .at-title {
        font-family: 'Cabinet Grotesk', sans-serif;
        font-weight: 700;
        font-size: 56px;
        line-height: 1.05;
        color: #FFFFFF;
        margin: 0;
        letter-spacing: -0.03em;
      }
      .at-title span {
        color: #FF5536;
      }
      .at-header-right {
        max-width: 320px;
        text-align: right;
      }
      .at-count {
        font-family: 'Inter', sans-serif;
        font-size: 72px;
        font-weight: 800;
        color: rgba(255,85,54,0.12);
        line-height: 1;
        letter-spacing: -0.04em;
        display: block;
        margin-bottom: 8px;
      }
      .at-desc {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: rgba(255,255,255,0.45);
        line-height: 1.7;
        margin: 0;
      }

      /* ─── Grid ─── */
      .at-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto auto;
        gap: 16px;
        position: relative;
        z-index: 1;
      }

      /* Featured cards (first 2) are taller */
      .at-card--featured {
        grid-row: span 1;
      }

      /* ─── Card ─── */
      .at-card {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        /* Soft neutral bg — white-bg photos multiply into this seamlessly */
        background: #dbd7e3;
        aspect-ratio: 4 / 4.5;
      }
      .at-card--featured {
        aspect-ratio: 4 / 4.7;
      }

      /* ─── Tag ─── */
      .at-tag {
        position: absolute;
        top: 14px;
        left: 14px;
        z-index: 3;
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: white;
        background: rgba(255,85,54,0.92);
        padding: 4px 10px;
        border-radius: 999px;
        backdrop-filter: blur(4px);
      }

      /* ─── Photo ─── */
      /* mix-blend-mode: multiply makes white photo backgrounds
         disappear into the card's #dbd7e3 background uniformly */
      .at-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        display: block;
        mix-blend-mode: multiply;
        transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease;
        filter: brightness(0.95) saturate(0.95) contrast(1.05);
      }
      .at-photo--zoom {
        transform: scale(1.06);
        filter: brightness(0.5) saturate(0.4) contrast(1);
      }

      /* ─── Name strip (always visible at bottom) ─── */
      .at-strip {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
        padding: 32px 16px 16px;
        z-index: 2;
        transition: opacity 0.3s ease;
      }
      .at-strip--hidden {
        opacity: 0;
        pointer-events: none;
      }
      .at-strip-name {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: rgba(255,255,255,0.9);
        letter-spacing: -0.01em;
      }

      /* ─── Hover overlay ─── */
      .at-overlay {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: flex;
        align-items: flex-end;
        padding: 0;
        pointer-events: none;
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
      }
      .at-overlay--visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      .at-overlay-inner {
        width: 100%;
        padding: 20px 16px 18px;
        background: linear-gradient(to top, rgba(10,10,15,0.98) 0%, rgba(10,10,15,0.80) 70%, transparent 100%);
      }
      .at-overlay-role {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #FF5536;
        margin-bottom: 6px;
      }
      .at-overlay-name {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
        letter-spacing: -0.02em;
        line-height: 1.2;
        margin-bottom: 12px;
      }
      .at-overlay-divider {
        width: 100%;
        height: 1px;
        background: rgba(255,85,54,0.3);
        margin-bottom: 12px;
      }
      .at-overlay-btn {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: white;
        text-decoration: none;
        background: #FF5536;
        padding: 7px 14px;
        border-radius: 6px;
        transition: background 0.2s ease, transform 0.2s ease;
      }
      .at-overlay-btn:hover {
        background: #e04420;
        transform: scale(1.04);
      }

      /* ─── Tablet ─── */
      @media (max-width: 1100px) {
        .at-section { padding: 64px 40px; }
        .at-title { font-size: 42px; }
        .at-grid { grid-template-columns: repeat(4, 1fr); gap: 12px; }
      }

      /* ─── Mobile ─── */
      @media (max-width: 768px) {
        .at-section { padding: 52px 20px; }
        .at-header { flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
        .at-title { font-size: 32px; }
        .at-header-right { text-align: left; max-width: 100%; }
        .at-count { font-size: 48px; }
        .at-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .at-card, .at-card--featured { aspect-ratio: 4 / 4.5; }

        /* On mobile: images in full colour, always show overlay */
        .at-photo { filter: none; mix-blend-mode: normal; }
        .at-photo--zoom { transform: none; filter: none; }
        .at-strip { display: none; }

        /* Overlay always visible on mobile */
        .at-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Overlay inner: flex row — text left, LinkedIn icon right */
        .at-overlay-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          padding: 16px 12px 12px;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
        }

        /* Text block bottom-left */
        .at-overlay-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .at-overlay-name { font-size: 12px; margin-bottom: 2px; }
        .at-overlay-role { font-size: 9px; margin-bottom: 0; }
        .at-overlay-divider { display: none; }

        /* LinkedIn icon-only button bottom-right */
        .at-overlay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
          border-radius: 8px;
          flex-shrink: 0;
          margin-left: 6px;
        }
        .at-overlay-btn span { display: none; }
        .at-overlay-btn svg:last-child { display: none; }
      }
    `}</style>

    <section className="at-section">
      {/* Header */}
      <div className="at-header">
        <div className="at-header-left">
          <div className="at-eyebrow">
            <span className="at-eyebrow-line" />
            Meet the Team
          </div>
          <h2 className="at-title">
            The Minds Behind<br />
            <span>Enterprise Security</span>
          </h2>
        </div>
        <div className="at-header-right">
          <span className="at-count">10</span>
          <p className="at-desc">
            Seasoned experts driving Auriseg's mission to protect organisations across the globe.
          </p>
        </div>
      </div>

      {/* Team Grid — all 8 visible, no carousel */}
      <div className="at-grid">
        {TEAM.map((member, i) => (
          <TeamCard key={member.id} member={member} featured={i < 2} />
        ))}
      </div>
    </section>
  </>
);

export default AboutTeam;