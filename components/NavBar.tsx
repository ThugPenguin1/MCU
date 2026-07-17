'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Departments', href: '/departments' },
  {
    label: 'Courses', href: '/courses',
    children: [{ label: 'Course Information', href: '/courses' }],
  },
  { label: 'Partnership', href: '/partnership' },
  {
    label: 'Membership', href: '/membership',
    children: [{ label: 'Join Club', href: '/membership#join' }],
  },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.35s',
    }}>
      <div style={{ height: 4, background: '#2EC4B6' }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: scrolled ? '8px 40px' : '14px 40px',
        display: 'flex', alignItems: 'center', gap: 36,
        transition: 'padding 0.35s',
      }}>
        <Link href="/" style={{ flexShrink: 0 }}>
          <Logo size={scrolled ? 40 : 48} />
        </Link>

        {/* Desktop nav */}
        <div className="nav-links" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 24 }}>
          {navItems.map((item) => (
            <div key={item.label} className="nav-item" style={{ position: 'relative' }}>
              <Link
                href={item.href}
                className="nav-link"
                style={{
                  fontSize: 14, fontWeight: 500,
                  color: isActive(item.href) ? '#E5A52E' : '#444',
                  padding: '8px 0', transition: 'color 0.2s',
                }}
              >
                {item.label}{item.children ? ' ▾' : ''}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right items */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div className="nav-item" style={{ position: 'relative' }}>
            <Link
              href="/login"
              className="nav-link"
              style={{
                fontSize: 14, fontWeight: 500,
                color: isActive('/login') ? '#E5A52E' : '#444',
                padding: '8px 0', transition: 'color 0.2s',
              }}
            >
              Login ▾
            </Link>
            <div className="nav-dropdown">
              <Link href="/register">Register</Link>
            </div>
          </div>
          <Link href="/shop" className="btn-shop">Shop</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          aria-label="Toggle menu"
        >
          <span style={{ width: 24, height: 2, background: '#444', display: 'block' }} />
          <span style={{ width: 24, height: 2, background: '#444', display: 'block' }} />
          <span style={{ width: 24, height: 2, background: '#444', display: 'block' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 15, fontWeight: 500,
                color: isActive(item.href) ? '#E5A52E' : '#444',
                padding: '10px 0',
                borderBottom: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: 15, fontWeight: 500, color: '#444', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}
          >
            Login
          </Link>
          <Link href="/register" onClick={() => setMobileOpen(false)} style={{ fontSize: 15, fontWeight: 500, color: '#444', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
            Register
          </Link>
          <Link href="/shop" className="btn-shop" style={{ marginTop: 8, textAlign: 'center' }}>Shop</Link>
        </div>
      )}
    </nav>
  );
}
