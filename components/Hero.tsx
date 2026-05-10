
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [loadTime, setLoadTime] = useState('0.14s');

  useEffect(() => {
    if (window.performance) {
      const timing = window.performance.timing;
      const lt = ((timing.loadEventEnd - timing.navigationStart) / 1000).toFixed(2);
      if (parseFloat(lt) > 0) setLoadTime(`${lt}s`);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let W = 0, H = 0;
    let particles: { x: number; y: number; life: number; maxLife: number; hue: number }[] = [];
    let t = 0;

    // Glow positions — two followers at different lag speeds
    let gx1 = 0, gy1 = 0;   // fast follower
    let gx2 = 0, gy2 = 0;   // slow follower
    let mx  = 0, my  = 0;   // raw mouse target

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouse);

    // Flow angle at any canvas position — sum of sinusoids at different scales/phases
    // produces smooth but complex wave interference = "organized chaos"
    const angle = (x: number, y: number, time: number): number => {
      const s = 0.0016;
      return (
        Math.sin(x * s        + time * 0.45) * Math.PI * 2 +
        Math.cos(y * s * 1.5  - time * 0.30) * Math.PI * 2 +
        Math.sin((x - y) * s * 0.9 + time * 0.18) * Math.PI +
        Math.cos((x + y) * s * 0.5 - time * 0.12) * Math.PI * 0.6
      );
    };

    const spawn = (): typeof particles[0] => ({
      x: Math.random() * W,
      y: Math.random() * H,
      life: 0,
      maxLife: 160 + Math.random() * 220,
      hue: 185 + Math.random() * 30,   // cyan → teal range
    });

    const init = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, W, H);
      // Seed glow to canvas centre so first frame isn't jarring
      gx1 = gx2 = mx = W / 2;
      gy1 = gy2 = my = H / 2;

      const count = Math.min(3200, Math.floor((W * H) / 380));
      particles = Array.from({ length: count }, spawn);
    };

    init();

    const onResize = () => { init(); };
    window.addEventListener('resize', onResize);

    const SPEED  = 1.6;
    const FADE   = 'rgba(5,5,5,0.012)'; // very slow fade → long trailing strokes

    const draw = () => {
      // Slowly erase old trails — this IS the wave effect
      ctx.fillStyle = FADE;
      ctx.fillRect(0, 0, W, H);

      t += 0.004;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const a  = angle(p.x, p.y, t);
        const nx = p.x + Math.cos(a) * SPEED;
        const ny = p.y + Math.sin(a) * SPEED;

        p.life++;
        // Envelope: fade in for first 20 steps, fade out for last 20
        const env = Math.min(p.life / 20, 1, (p.maxLife - p.life) / 20);
        const alpha = env * 0.55;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = `hsla(${p.hue},100%,65%,${alpha.toFixed(2)})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        p.x = nx;
        p.y = ny;

        if (p.life >= p.maxLife || nx < -4 || nx > W + 4 || ny < -4 || ny > H + 4) {
          particles[i] = spawn();
        }
      }

      // ── Edge glow ─────────────────────────────────────────────────────────
      // Lerp followers toward mouse at different speeds
      gx1 += (mx - gx1) * 0.055;
      gy1 += (my - gy1) * 0.055;
      gx2 += (mx - gx2) * 0.018;
      gy2 += (my - gy2) * 0.018;

      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      // Ring 1 — tight, fast, peaking at ~70% radius (annular edge glow)
      const g1 = ctx.createRadialGradient(gx1, gy1, 40, gx1, gy1, 210);
      g1.addColorStop(0,    'hsla(192,100%,55%,0)');
      g1.addColorStop(0.45, 'hsla(192,100%,60%,0.028)');
      g1.addColorStop(0.72, 'hsla(192,100%,65%,0.048)');
      g1.addColorStop(1,    'hsla(192,100%,55%,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      // Ring 2 — wide, slow, ghostly trail behind cursor
      const g2 = ctx.createRadialGradient(gx2, gy2, 120, gx2, gy2, 440);
      g2.addColorStop(0,    'hsla(200,100%,60%,0)');
      g2.addColorStop(0.38, 'hsla(200,100%,62%,0.015)');
      g2.addColorStop(0.68, 'hsla(200,100%,65%,0.032)');
      g2.addColorStop(1,    'hsla(200,100%,55%,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      ctx.restore();
      // ─────────────────────────────────────────────────────────────────────

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">

      {/* Full-width flow field canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Left vignette — keeps text sharp over the animation */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.78) 28%, rgba(5,5,5,0.28) 58%, rgba(5,5,5,0.04) 100%)',
        }}
      />
      {/* Bottom vignette so metrics row stays readable */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="relative max-w-2xl">

          {/* Corner bracket */}
          <div className="absolute -inset-4 md:-inset-10 border border-cyan-500/20 pointer-events-none hidden md:block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>A partner for strategy and technical execution</span>
          </div>

          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Strategic Insight.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-white">
              Digital Engineering.
            </span><br />
            Brand Authority.
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
            We handle the technical work and strategy that businesses need to scale. Our team works with companies in hospitality, agriculture, and retail to build systems that actually work.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/contact"
              className="group relative flex items-center justify-center space-x-3 bg-white text-black font-bold py-5 px-10 rounded-none transition-all duration-300 transform hover:bg-cyan-500 active:scale-95 font-space text-sm uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">Request a Briefing</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <a
              href="#strategy"
              className="flex items-center justify-center space-x-3 border border-white/20 hover:border-cyan-500 text-white font-bold py-5 px-10 rounded-none transition-all duration-300 font-space text-sm uppercase tracking-widest backdrop-blur-sm"
            >
              Our Capabilities
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Response Speed</p>
              <p className="font-space font-bold text-xl text-cyan-400">{loadTime}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Platform Reliability</p>
              <p className="font-space font-bold text-xl text-cyan-400">99.9%</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Growth Multiplier</p>
              <p className="font-space font-bold text-xl text-cyan-400">4.8x</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
