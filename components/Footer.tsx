'use client';

import Logo from './Logo';

const quickLinks = ['Home', 'About', 'Departments', 'Courses', 'Partnership'];
const programs = ['Membership', 'Join Club', 'Login', 'Register', 'Shop'];
const socials = ['In', 'Fb', 'Li'];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#1A1A2A', padding: '64px 0 0' }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48 }}
        >
          {/* Brand column */}
          <div>
            <Logo size={44} />
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7, marginTop: 16, maxWidth: 280,
            }}>
              Nurturing the future of financial planning through comprehensive education and professional development.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {socials.map((s) => (
                <a key={s} href="#" className="footer-social">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 14, fontWeight: 600, color: '#fff',
              marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              Quick Links
            </h4>
            {quickLinks.map((l) => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h4 style={{
              fontSize: 14, fontWeight: 600, color: '#fff',
              marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              Programs
            </h4>
            {programs.map((l) => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: 14, fontWeight: 600, color: '#fff',
              marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              Contact
            </h4>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
              25/F, 88 Lockhart Road,<br />Wanchai, Hong Kong
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
              +(852) 2383 3232
            </p>
            <a
              href="mailto:info@mcuinstitute.com"
              style={{ fontSize: 14, color: '#E5A52E', marginTop: 4, display: 'block' }}
            >
              info@mcuinstitute.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 MCU Institute Limited. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.3)'; }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Teal bottom accent */}
        <div style={{ height: 4, background: '#2EC4B6' }} />
      </div>
    </footer>
  );
}
