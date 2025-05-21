"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { openInNewTab } from "./util";

export default function AnimatedGradientHero() {
  const containerRef = useRef(null);

  // Track mouse position to move gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();

      // Calculate relative position within the container (0-100)
      const x = Math.min(Math.max(((clientX - left) / width) * 100, 0), 100);
      const y = Math.min(Math.max(((clientY - top) / height) * 100, 0), 100);

      // Update CSS variables for gradient position
      containerRef.current.style.setProperty("--mouse-x", `${x}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="animated-gradient-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="heading font-main font-ultrabold">
            Hey!<span className="wave-emoji">👋🏾</span>
            <br />
            I'm Boye
          </h1>
          <p className="description font-neue-machina-plain font-normal">
            I specialize in building scalable, high-performing web, mobile, and
            machine learning applications using cutting-edge tools.
          </p>
          <button
            onClick={() =>
              openInNewTab("https://calendly.com/boyepanthera/30min")
            }
            className="cta-button"
          >
            Let's Talk
          </button>
        </div>

        <div className="image-container">
          <div className="profile-image-wrapper">
            <Image
              src="/boye-coding-image.jpg"
              alt="Boye"
              width={400}
              height={500}
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animated-gradient-container {
          position: relative;
          min-height: 50vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
          background-color: #fff5e6;
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        .animated-gradient-container::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 190, 159, 0.6) 0%,
            rgba(255, 213, 194, 0.4) 30%,
            rgba(255, 236, 210, 0.1) 60%,
            rgba(255, 245, 230, 0) 80%
          );
          transform: translate(
            calc((var(--mouse-x) - 50%) * -0.1),
            calc((var(--mouse-y) - 50%) * -0.1)
          );
          transition: transform 0.2s ease-out;
          pointer-events: none;
        }

        .animated-gradient-container::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          z-index: 1;
          position: relative;
          padding: 32px;
        }

        .text-content {
          flex: 1;
          padding-right: 2rem;
        }

        .heading {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1.5rem;
          color: #111;
        }

        .wave-emoji {
          display: inline-block;
          margin-left: 0.5rem;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .description {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
          color: #333;
        }

        .cta-button {
          background-color: #1a0a00;
          color: #ffa64d;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #2a1a0a;
          transform: translateY(-2px);
        }

        .image-container {
          flex: 0.8;
          display: flex;
          justify-content: center;
        }

        .profile-image-wrapper {
          border-radius: 12px 12px 94px 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .profile-image-wrapper:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .profile-image {
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }

          .text-content {
            padding-right: 0;
            padding-top: 2rem;
          }

          .heading {
            font-size: 3rem;
          }

          .description {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </div>
  );
}
