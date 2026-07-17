'use client';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 48 }: LogoProps) {
  const h = size * 1.15;
  return (
    <svg width={size} height={h} viewBox="0 0 100 115" fill="none" style={{ transition: 'all 0.3s' }}>
      <path d="M50 5 L90 25 L90 75 Q90 105 50 112 Q10 105 10 75 L10 25 Z" fill="#7B1A2D" opacity="0.9" />
      <path d="M50 12 L83 29 L83 73 Q83 99 50 105 Q17 99 17 73 L17 29 Z" fill="#fff" opacity="0.15" />
      <text x="50" y="42" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="DM Sans,sans-serif" letterSpacing="0.5">灣區學院</text>
      <text x="50" y="62" textAnchor="middle" fill="#E5A52E" fontSize="16" fontWeight="800" fontFamily="DM Sans,sans-serif" letterSpacing="1">MCU</text>
      <text x="50" y="78" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="600" fontFamily="DM Sans,sans-serif" letterSpacing="1.5">INSTITUTE</text>
      <path d="M25 85 Q20 70 25 55" stroke="#CBD5E1" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M75 85 Q80 70 75 55" stroke="#CBD5E1" strokeWidth="2" fill="none" opacity="0.6" />
      <text x="50" y="22" textAnchor="middle" fill="#E5A52E" fontSize="8">★ ★ ★ ★ ★</text>
    </svg>
  );
}
