"use client";

export default function Dashboard() {
  // Animation-க்காக 30 glowing particles உருவாக்குகிறோம்
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <main className="movie-screen">

      {/* Background lighting effects */}
      <div className="light-beam beam-one"></div>
      <div className="light-beam beam-two"></div>

      {/* Glowing particles */}
      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle}
            className="particle"
            style={{
              left: `${(particle * 37) % 100}%`,
              top: `${(particle * 23) % 100}%`,
              animationDelay: `${(particle % 10) * 0.3}s`,
              animationDuration: `${3 + (particle % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Main cinematic title */}
      <section className="title-container">

        {/* Small intro text */}
        <p className="intro-text">
          THE LEGEND BEGINS
        </p>

        {/* Animated RAGHAV title */}
        <h1 className="raghav-title">
          RAGHAV
        </h1>

        {/* Underline animation */}
        <div className="title-line"></div>

        {/* Subtitle */}
        <p className="subtitle">
          UNSTOPPABLE. UNBREAKABLE. UNFORGETTABLE.
        </p>

        {/* Animated button */}
        <button
          className="enter-button"
          onClick={() => alert("WELCOME TO RAGHAV'S WORLD!")}
        >
          ENTER MY WORLD
        </button>

      </section>

      {/* Bottom cinematic text */}
      <footer className="movie-footer">
        <span>R</span>
        <span>ESTRICTED TO ORDINARY</span>
        <span>© RAGHAV</span>
      </footer>

      {/* CSS animation effects */}
      <style jsx>{`
        /* Full-screen cinematic background */
        .movie-screen {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(ellipse at center, #17254a 0%, #080b19 45%, #02030a 100%);
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* Blue and purple cinematic light beams */
        .light-beam {
          position: absolute;
          width: 35%;
          height: 150%;
          top: -25%;
          filter: blur(65px);
          opacity: 0.2;
          pointer-events: none;
        }

        .beam-one {
          left: 5%;
          background: #1677ff;
          transform: rotate(25deg);
          animation: beamMove 7s ease-in-out infinite alternate;
        }

        .beam-two {
          right: 5%;
          background: #a020f0;
          transform: rotate(-25deg);
          animation: beamMove 9s ease-in-out infinite alternate-reverse;
        }

        /* Particle container */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Each individual glowing particle */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #a8d9ff;
          box-shadow: 0 0 12px 3px #358bff;
          animation: floatParticle 5s ease-in-out infinite alternate;
        }

        /* Main title positioning */
        .title-container {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px;
          text-align: center;
          animation: sceneReveal 1.5s ease-out both;
        }

        /* Intro text animation */
        .intro-text {
          margin-bottom: 25px;
          color: #8cbaff;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 8px;
          animation: fadeIn 2s ease-out both;
        }

        /* Main RAGHAV cinematic title */
        .raghav-title {
          margin: 0;
          font-size: clamp(48px, 12vw, 130px);
          font-weight: 900;
          letter-spacing: clamp(4px, 2vw, 16px);
          line-height: 1.1;
          color: #f8fbff;
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #a8caff 25%,
            #ffffff 45%,
            #637ba9 60%,
            #ffffff 80%,
            #7c9acb 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 12px #4285ff)
                  drop-shadow(0 0 35px #245bff);
          animation: titleReveal 2s cubic-bezier(.16, 1, .3, 1) both,
                     titleGlow 3s ease-in-out 2s infinite alternate;
        }

        /* Animated horizontal line */
        .title-line {
          width: min(320px, 70%);
          height: 2px;
          margin: 28px auto;
          background: linear-gradient(
            90deg,
            transparent,
            #60a5fa,
            #ffffff,
            #a855f7,
            transparent
          );
          box-shadow: 0 0 18px #438aff;
          transform-origin: center;
          animation: lineReveal 1.8s ease-out both;
        }

        /* Subtitle styling */
        .subtitle {
          color: #aab9d7;
          font-size: clamp(9px, 2vw, 12px);
          letter-spacing: clamp(2px, 1vw, 5px);
          line-height: 2;
          animation: fadeIn 2s ease-out 0.8s both;
        }

        /* Enter button */
        .enter-button {
          margin-top: 38px;
          padding: 14px 28px;
          border: 1px solid #6ca5ff;
          border-radius: 3px;
          background: rgba(23, 54, 110, 0.25);
          color: white;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: fadeIn 2s ease-out 1.2s both;
        }

        /* Button hover effect */
        .enter-button:hover {
          background: #2563eb;
          box-shadow: 0 0 25px #347eff;
          transform: scale(1.06);
        }

        /* Footer */
        .movie-footer {
          position: absolute;
          right: 25px;
          bottom: 20px;
          left: 25px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #697b9d;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .movie-footer span:first-child {
          color: #83b5ff;
          font-weight: bold;
          font-size: 15px;
        }

        /* Title zooms forward into the screen */
        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: perspective(500px) translateZ(-300px) scale(0.5);
            filter: blur(15px);
          }
          70% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: perspective(500px) translateZ(0) scale(1);
          }
        }

        /* Continuous metallic title glow */
        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 10px #4285ff);
          }
          to {
            filter: drop-shadow(0 0 25px #4285ff)
                    drop-shadow(0 0 45px #793bff);
          }
        }

        /* Whole scene slowly appears */
        @keyframes sceneReveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Subtitle and intro fade in */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Line expands horizontally */
        @keyframes lineReveal {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        /* Particles float around */
        @keyframes floatParticle {
          from {
            opacity: 0.15;
            transform: translate3d(0, 0, 0) scale(0.7);
          }
          to {
            opacity: 1;
            transform: translate3d(15px, -35px, 0) scale(1.5);
          }
        }

        /* Background light beams slowly move */
        @keyframes beamMove {
          from {
            opacity: 0.1;
          }
          to {
            opacity: 0.35;
          }
        }

        /* Support users who prefer less animation */
        @media (prefers-reduced-motion: reduce) {
          .movie-screen *,
          .movie-screen *::before,
          .movie-screen *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 480px) {
          .intro-text {
            letter-spacing: 4px;
          }

          .movie-footer {
            right: 12px;
            left: 12px;
            font-size: 7px;
            letter-spacing: 1px;
          }
        }
      `}</style>

    </main>
  );
}