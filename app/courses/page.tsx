'use client';

import SiteLayout from '@/components/SiteLayout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

const courses = [
  {
    cat: 'Financial Planning',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/01/course4.jpg',
    title: 'Professional Financial Planning Program',
    level: 'Foundation – Advanced',
    duration: '12 weeks',
    format: 'Hybrid',
    desc: 'A comprehensive curriculum covering all aspects of personal and corporate financial planning, aligned with CFP global standards.',
  },
  {
    cat: 'Wealth Management',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/01/course7.jpg',
    title: 'CEO Wealth Management Program',
    level: 'Executive',
    duration: '8 weeks',
    format: 'Classroom',
    desc: 'Tailored for CEOs and senior executives who need a strategic perspective on personal and corporate wealth preservation.',
  },
  {
    cat: 'Family Office',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/01/course2.jpg',
    title: 'Family Office Wealth Management Program',
    level: 'Intermediate – Advanced',
    duration: '16 weeks',
    format: 'Hybrid',
    desc: 'Deep-dive into family office structures, governance models, investment policy statements, and succession planning.',
  },
  {
    cat: 'Family Office',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/01/course6.jpg',
    title: 'Professional Family Office Consultant Program',
    level: 'Advanced',
    duration: '20 weeks',
    format: 'Online',
    desc: 'For professional advisors serving family offices — covers legal, tax, investment, and relationship management complexities.',
  },
  {
    cat: 'Financial Planning',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/03/kindle-1867751_1280.jpg',
    title: 'Personal Investment Planning',
    level: 'Foundation',
    duration: '6 weeks',
    format: 'Online',
    desc: 'An entry-level course for individuals wanting to take control of their personal finances and investment portfolio.',
  },
  {
    cat: 'Certification',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/02/AdobeStock_114954721-scaled-1.jpeg',
    title: 'HKSI Licensing Exam Preparation',
    level: 'Certification Prep',
    duration: '4 weeks',
    format: 'Online',
    desc: 'Structured preparation for Hong Kong Securities & Investment Institute licensing papers 1, 2, and 3.',
  },
  {
    cat: 'Wealth Management',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/02/on-going-improvement-in-order-to-adapt-to-financial-market-with-uncertainty.png',
    title: 'Alternative Investment Strategies',
    level: 'Intermediate',
    duration: '10 weeks',
    format: 'Hybrid',
    desc: 'Explores private equity, hedge funds, real assets, and structured products as part of a diversified portfolio.',
  },
  {
    cat: 'Executive',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/03/shutterstock_404074468.jpg',
    title: 'Executive Finance Leadership',
    level: 'Executive',
    duration: '6 weeks',
    format: 'Classroom',
    desc: 'Board-level financial literacy and governance — designed around the schedules and priorities of C-suite leaders.',
  },
];

const categories = ['All', 'Financial Planning', 'Wealth Management', 'Family Office', 'Certification', 'Executive'];

const catColor: Record<string, string> = {
  'Financial Planning': '#2EC4B6',
  'Wealth Management': '#7B1A2D',
  'Family Office': '#E5A52E',
  'Certification': '#7B1A2D',
  'Executive': '#E5A52E',
};

export default function CoursesPage() {
  return (
    <SiteLayout>
      <div style={{ paddingTop: 68 }}>
        <PageHero
          title="All Courses & Programs"
          subtitle="Programs"
          description="From foundation certificates to executive masterclasses — find the program that matches your career stage and goals."
          bgImage="https://mcuinstitute.com/wp-content/uploads/2025/03/shutterstock_404074468.jpg"
        />
      </div>

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          {/* Category pills */}
          <ScrollReveal>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    padding: '8px 20px', borderRadius: 30, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    background: cat === 'All' ? '#7B1A2D' : 'transparent',
                    color: cat === 'All' ? '#fff' : '#666',
                    border: `1.5px solid ${cat === 'All' ? '#7B1A2D' : 'rgba(0,0,0,0.12)'}`,
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {courses.map((course, i) => (
              <ScrollReveal key={i} delay={i * 0.06} threshold={0.1}>
                <div className="strive-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#e8e8ec', overflow: 'hidden' }}>
                      <img
                        src={course.img}
                        alt={course.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div style={{ position: 'absolute', top: 16, left: 16 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: '#fff', padding: '4px 12px',
                        borderRadius: 20, background: catColor[course.cat] || '#7B1A2D',
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>
                        {course.cat}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1A1A2A', lineHeight: 1.4, marginBottom: 10 }}>{course.title}</h3>
                    <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, flex: 1 }}>{course.desc}</p>
                    <div style={{ display: 'flex', gap: 16, marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A2A', marginTop: 2 }}>{course.duration}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A2A', marginTop: 2 }}>{course.level}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Format</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A2A', marginTop: 2 }}>{course.format}</div>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20,
                        fontSize: 13, fontWeight: 600, color: '#E5A52E', transition: 'gap 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
                    >
                      Enquire Now →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ padding: '80px 0', background: '#F8F8FA' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#7B1A2D', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Custom Programs</p>
                <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1A1A2A', letterSpacing: '-0.02em', marginBottom: 16 }}>Need a Tailored Program?</h2>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7 }}>
                  We design bespoke corporate training programs for financial institutions, wealth management firms, and family offices across Asia.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a href="/contact" className="btn-gold">Enquire About Corporate Training</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
