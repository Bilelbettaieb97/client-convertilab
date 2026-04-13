"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const channels = [
  {
    key: "instagram",
    label: "Instagram",
    href: SITE.social.instagram,
    hoverBg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    hoverShadow: "0 0 30px rgba(225, 48, 108, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.155 0-3.507.012-4.748.069-1.155.053-1.78.247-2.196.412-.552.215-.946.471-1.36.885-.413.413-.67.808-.884 1.36-.166.416-.36 1.04-.412 2.196C2.342 9.997 2.33 10.35 2.33 12s.012 2.003.069 3.244c.053 1.155.247 1.78.412 2.196.215.552.471.946.885 1.36.413.413.808.67 1.36.884.416.166 1.04.36 2.196.412 1.241.057 1.593.069 3.244.069s2.003-.012 3.244-.069c1.155-.053 1.78-.247 2.196-.412.552-.215.946-.471 1.36-.885.413-.413.67-.808.884-1.36.166-.416.36-1.04.412-2.196.057-1.241.069-1.593.069-3.244s-.012-2.003-.069-3.244c-.053-1.155-.247-1.78-.412-2.196-.215-.552-.471-.946-.885-1.36-.413-.413-.808-.67-1.36-.884-.416-.166-1.04-.36-2.196-.412-1.241-.057-1.593-.069-3.244-.069zm0 3.131a4.868 4.868 0 100 9.736 4.868 4.868 0 000-9.736zm0 8.03a3.162 3.162 0 110-6.325 3.162 3.162 0 010 6.325zm6.183-8.252a1.137 1.137 0 11-2.275 0 1.137 1.137 0 012.275 0z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SITE.social.linkedin,
    hoverBg: "#0077b5",
    hoverShadow: "0 0 30px rgba(0, 119, 181, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: SITE.social.tiktok,
    hoverBg: "linear-gradient(135deg, #25F4EE 0%, #000 50%, #FE2C55 100%)",
    hoverShadow: "0 0 30px rgba(254, 44, 85, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.45a8.16 8.16 0 005 1.6V6.69h-2.07z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: SITE.social.youtube,
    hoverBg: "#FF0000",
    hoverShadow: "0 0 30px rgba(255, 0, 0, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: SITE.social.facebook,
    hoverBg: "#1877F2",
    hoverShadow: "0 0 30px rgba(24, 119, 242, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function SocialConnect() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-950 via-purple-950/30 to-black overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 flex flex-col items-center px-4 font-sans w-full">
        {/* Header */}
        <div className="w-full max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-6 tracking-tight">
            Restons <span className="text-white">en contact</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Une question, un projet, juste envie de discuter ? Nous sommes disponibles sur tous vos canaux préférés.
          </p>
        </div>

        {/* Glowing socials container */}
        <div className="relative w-full max-w-3xl">
          <div
            className="rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/90 border border-purple-500/20 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 md:p-10 transition-all duration-500 hover:scale-[1.02]"
            style={{ boxShadow: "0 0 60px rgba(168, 85, 247, 0.4), 0 0 120px rgba(236, 72, 153, 0.2)" }}
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {channels.map((c) => (
                <a
                  key={c.key}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                  data-key={c.key}
                  style={{
                    ["--hover-bg" as string]: c.hoverBg,
                    ["--hover-shadow" as string]: c.hoverShadow,
                  }}
                >
                  <div className="icon-container">{c.svg}</div>
                  <span className="icon-label">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Direct contact: email + phone */}
        <div className="mt-12 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40 flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-purple-300 mb-0.5">Email</div>
              <div className="text-white font-bold truncate">{SITE.email}</div>
            </div>
          </a>

          <a
            href={`tel:${SITE.phone}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-pink-500/20 hover:border-pink-400/60 hover:bg-pink-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-500/40 flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-pink-300 mb-0.5">Téléphone</div>
              <div className="text-white font-bold">{SITE.phoneDisplay}</div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .icon-container {
          display: inline-flex;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
          background: var(--hover-bg);
          box-shadow: var(--hover-shadow);
        }
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        .icon-label {
          margin-top: 12px;
          color: white;
          font-weight: 600;
          font-size: 13px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .social-icon:hover svg {
          animation: shake-cl 0.5s;
        }
        @keyframes shake-cl {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
