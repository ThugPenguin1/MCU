'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const cards = [
  {
    title: 'Continuous Training',
    desc: 'Focus on upgrading wealth management and financial planning knowledge and skills.',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/03/kindle-1867751_1280.jpg',
  },
  {
    title: 'On-going Improvement',
    desc: 'All courses are modified regularly to align to the trend and direction of the global economy.',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/02/on-going-improvement-in-order-to-adapt-to-financial-market-with-uncertainty.png',
  },
  {
    title: 'Implementation of Learning',
    desc: 'Emphasis is placed on the application of knowledge and realization of ideas.',
    img: 'https://mcuinstitute.com/wp-content/uploads/2025/02/AdobeStock_114954721-scaled-1.jpeg',
  },
];

export default function StriveSection() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading subtitle="Our Commitment" title="What We Strive" />
        </ScrollReveal>

        <div
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}
        >
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1} threshold={0.1}>
              <div className="strive-card">
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: '#e8e8ec' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1A1A2A', marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
