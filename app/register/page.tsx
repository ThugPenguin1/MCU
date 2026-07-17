'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    password: '', confirm: '', interest: '', agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', fontSize: 15, borderRadius: 10,
    border: '1.5px solid rgba(0,0,0,0.12)', outline: 'none', background: '#fff',
    fontFamily: 'DM Sans, sans-serif', color: '#1A1A2A', transition: 'border-color 0.2s',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { alert('Passwords do not match.'); return; }
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F8FA', display: 'flex' }}>
      {/* Left panel */}
      <div style={{
        width: '40%', background: 'linear-gradient(135deg, #7B1A2D 0%, #5a1320 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '60px 56px', position: 'relative', overflow: 'hidden',
      }}
        className="auth-panel"
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Logo size={52} />
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginTop: 32, lineHeight: 1.2 }}>
            Join MCU Institute
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginTop: 14, lineHeight: 1.7, maxWidth: 300 }}>
            Create your account to enrol in courses, track your progress, and connect with a community of financial professionals.
          </p>
          <div style={{ marginTop: 40, padding: 24, borderRadius: 12, background: 'rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 14, color: '#E5A52E', fontWeight: 600, marginBottom: 12 }}>New Member Benefits</div>
            {['Free introductory webinar', '10% discount on first course', 'Access to student resources', 'Digital membership card'].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ color: '#E5A52E', fontWeight: 700, fontSize: 12 }}>✓</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: '#E5A52E', fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 500 }}>
          <div style={{ marginBottom: 8 }}>
            <Link href="/" style={{ fontSize: 13, color: '#7B1A2D', fontWeight: 600 }}>← Back to site</Link>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A2A', marginBottom: 12 }}>Account Created!</h1>
              <p style={{ fontSize: 15, color: '#666', marginBottom: 32 }}>
                Welcome to MCU Institute. Check your email to verify your account and get started.
              </p>
              <Link href="/login" className="btn-gold">Go to Sign In</Link>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A2A', marginTop: 24, marginBottom: 8 }}>Create Account</h1>
              <p style={{ fontSize: 15, color: '#666', marginBottom: 32 }}>Fill in the details below to get started.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>First Name *</label>
                    <input type="text" required placeholder="John" style={inputStyle} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Last Name *</label>
                    <input type="text" required placeholder="Chan" style={inputStyle} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Email Address *</label>
                  <input type="email" required placeholder="you@example.com" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Phone Number</label>
                  <input type="tel" placeholder="+(852) 0000 0000" style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Area of Interest</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }}>
                    <option value="">Select an area…</option>
                    <option>Financial Planning</option>
                    <option>Wealth Management</option>
                    <option>Family Office</option>
                    <option>Professional Certification</option>
                    <option>Executive Education</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Password *</label>
                    <input type="password" required placeholder="Min. 8 characters" style={inputStyle} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#444', display: 'block', marginBottom: 6 }}>Confirm Password *</label>
                    <input type="password" required placeholder="Repeat password" style={inputStyle} value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} onFocus={(e) => { e.target.style.borderColor = '#7B1A2D'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; }} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <input
                    type="checkbox" id="agree" required style={{ width: 16, height: 16, cursor: 'pointer', marginTop: 2, flexShrink: 0 }}
                    checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  />
                  <label htmlFor="agree" style={{ fontSize: 14, color: '#666', cursor: 'pointer', lineHeight: 1.5 }}>
                    I agree to the <a href="#" style={{ color: '#7B1A2D', fontWeight: 600 }}>Terms of Service</a> and{' '}
                    <a href="#" style={{ color: '#7B1A2D', fontWeight: 600 }}>Privacy Policy</a>
                  </label>
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '15px', borderRadius: 30, fontSize: 15, fontWeight: 600,
                    background: '#7B1A2D', color: '#fff', border: 'none', cursor: 'pointer', transition: 'all 0.3s', marginTop: 8,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#9B2A3D'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#7B1A2D'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  Create Account
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
