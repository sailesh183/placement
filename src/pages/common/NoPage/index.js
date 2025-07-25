import React, { useEffect, useRef } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

function NoPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      };
    };

    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          .glitch-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .glitch {
            position: relative;
            font-size: 8rem;
            font-weight: bold;
            color: #FFFFFF;
            letter-spacing: 3px;
            z-index: 1;
          }

          .glitch:before,
          .glitch:after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #111827;
          }

          .glitch:before {
            left: 2px;
            text-shadow: -2px 0 #ff00c1;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-2 3s infinite linear alternate-reverse;
          }

          .glitch:after {
            left: -2px;
            text-shadow: -2px 0 #00fff9;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 2.5s infinite linear alternate-reverse;
          }

          @keyframes glitch-anim {
            0% { clip: rect(42px, 9999px, 44px, 0); transform: skew(0.65deg); }
            5% { clip: rect(35px, 9999px, 50px, 0); transform: skew(0.23deg); }
            10% { clip: rect(66px, 9999px, 98px, 0); transform: skew(0.96deg); }
            15% { clip: rect(25px, 9999px, 55px, 0); transform: skew(0.35deg); }
            20% { clip: rect(85px, 9999px, 99px, 0); transform: skew(0.69deg); }
            25% { clip: rect(15px, 9999px, 45px, 0); transform: skew(0.13deg); }
            30% { clip: rect(74px, 9999px, 92px, 0); transform: skew(0.57deg); }
            35% { clip: rect(23px, 9999px, 56px, 0); transform: skew(0.28deg); }
            40% { clip: rect(46px, 9999px, 77px, 0); transform: skew(0.85deg); }
            45% { clip: rect(33px, 9999px, 64px, 0); transform: skew(0.42deg); }
            50% { clip: rect(28px, 9999px, 81px, 0); transform: skew(0.76deg); }
            55% { clip: rect(51px, 9999px, 93px, 0); transform: skew(0.31deg); }
            60% { clip: rect(17px, 9999px, 48px, 0); transform: skew(0.89deg); }
            65% { clip: rect(62px, 9999px, 82px, 0); transform: skew(0.24deg); }
            70% { clip: rect(39px, 9999px, 71px, 0); transform: skew(0.67deg); }
            75% { clip: rect(56px, 9999px, 95px, 0); transform: skew(0.38deg); }
            80% { clip: rect(29px, 9999px, 68px, 0); transform: skew(0.72deg); }
            85% { clip: rect(44px, 9999px, 88px, 0); transform: skew(0.19deg); }
            90% { clip: rect(71px, 9999px, 100px, 0); transform: skew(0.83deg); }
            95% { clip: rect(32px, 9999px, 59px, 0); transform: skew(0.45deg); }
            100% { clip: rect(48px, 9999px, 76px, 0); transform: skew(0.27deg); }
          }

          .particle-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-in forwards;
          }
          
          .animate-fade-in-delay {
            animation: fadeIn 0.5s ease-in 0.3s forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>

      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        <canvas ref={canvasRef} className="particle-canvas" />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="glitch-wrapper">
            <div className="glitch" data-text="404">
              404
            </div>
          </div>
          
          <h2 className="mt-8 text-2xl md:text-3xl font-light text-gray-300 animate-fade-in">
            Page Not Found
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-md text-center animate-fade-in-delay">
            The page you're looking for seems to have vanished into the digital void.
          </p>
          
          <div className="mt-12 flex space-x-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            
            <a 
              href="/"
              className="flex items-center px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoPage;
