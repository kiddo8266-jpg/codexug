import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 36 },
    md: { width: 150, height: 45 },
    lg: { width: 200, height: 60 },
  };
  const { width, height } = sizes[size];

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 150 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CodexUg Logo"
      >
        {/* Circuit pattern background */}
        <rect width="150" height="45" rx="4" fill="transparent" />
        
        {/* Angle bracket left */}
        <path
          d="M8 22.5L18 12L20.5 14.5L13 22.5L20.5 30.5L18 33L8 22.5Z"
          fill="#06B6D4"
        />
        
        {/* Angle bracket right */}
        <path
          d="M34 22.5L24 12L21.5 14.5L29 22.5L21.5 30.5L24 33L34 22.5Z"
          fill="#06B6D4"
        />
        
        {/* Circuit dot */}
        <circle cx="21" cy="22.5" r="2.5" fill="#0A1628" stroke="#06B6D4" strokeWidth="1" />
        
        {/* CodexUg text */}
        <text
          x="40"
          y="29"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="700"
          fill="#FFFFFF"
        >
          Codex
        </text>
        <text
          x="96"
          y="29"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="700"
          fill="#06B6D4"
        >
          Ug
        </text>
        
        {/* Decorative circuit line */}
        <line x1="40" y1="34" x2="120" y2="34" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="120" cy="34" r="1.5" fill="#06B6D4" fillOpacity="0.6" />
      </svg>
    </Link>
  );
}
