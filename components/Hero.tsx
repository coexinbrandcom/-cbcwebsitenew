
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
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

    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    onResize();
    window.addEventListener('resize', onResize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMouse);

    // ── Unit-sphere wireframe lines ──────────────────────────────────
    const LAT = 9, LON = 14, SEG = 56;
    type Line = [number, number, number][];
    const sphereLines: Line[] = [];

    for (let i = 1; i < LAT; i++) {
      const phi = (Math.PI * i) / LAT;
      const line: Line = [];
      for (let j = 0; j <= SEG; j++) {
        const t = (2 * Math.PI * j) / SEG;
        line.push([Math.sin(phi) * Math.cos(t), Math.cos(phi), Math.sin(phi) * Math.sin(t)]);
      }
      sphereLines.push(line);
    }
    for (let i = 0; i < LON; i++) {
      const t = (2 * Math.PI * i) / LON;
      const line: Line = [];
      for (let j = 0; j <= SEG; j++) {
        const phi = (Math.PI * j) / SEG;
        line.push([Math.sin(phi) * Math.cos(t), Math.cos(phi), Math.sin(phi) * Math.sin(t)]);
      }
      sphereLines.push(line);
    }

    // ── Floating particles ───────────────────────────────────────────
    const particles = Array.from({ length: 90 }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
      vz: (Math.random() - 0.5) * 0.0015,
    }));

    // ── Rotation state ───────────────────────────────────────────────
    let rotX = 0, rotY = 0;

    const rotate = (x: number, y: number, z: number, ax: number, ay: number): [number, number, number] => {
      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      return [x2, y1, z2];
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Smoothly track mouse
      rotX += (mouseRef.current.y * 0.12 - rotX) * 0.025 + 0.0025;
      rotY += (mouseRef.current.x * 0.12 - rotY) * 0.025 + 0.005;

      // Responsive sizing
      const R = Math.min(W * 0.28, H * 0.40, 280);
      const FOV = R * 2.8;
      const wide = W > 900;
      // Sphere origin: right-center on desktop, bottom-center on mobile
      const ox = wide ? W * 0.64 : W * 0.5;
      const oy = wide ? H * 0.5 : H * 0.72;

      const proj = (wx: number, wy: number, wz: number) => {
        const px = wx * R, py = wy * R, pz = wz * R;
        const d = FOV / (FOV + pz + R * 0.5);
        return { sx: px * d, sy: py * d, pz, d };
      };

      // ── Sphere ───────────────────────────────────────────────────
      sphereLines.forEach(line => {
        const pts = line.map(([x, y, z]) => {
          const [rx, ry, rz] = rotate(x, y, z, rotX, rotY);
          return proj(rx, ry, rz);
        });

        for (let i = 0; i < pts.length - 1; i++) {
          const avgZ = (pts[i].pz + pts[i + 1].pz) / 2;
          const t = Math.max(0, Math.min(1, (avgZ / R + 1) / 2));
          const alpha = 0.04 + t * 0.46;

          ctx.beginPath();
          ctx.moveTo(ox + pts[i].sx, oy + pts[i].sy);
          ctx.lineTo(ox + pts[i + 1].sx, oy + pts[i + 1].sy);
          ctx.strokeStyle = `rgba(0,212,255,${alpha.toFixed(2)})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      });

      // Sphere vertex dots at intersections
      const dotStep = Math.round(SEG / LON);
      sphereLines.slice(0, LAT - 1).forEach(line => {
        for (let i = 0; i < line.length; i += dotStep) {
          const [x, y, z] = line[i];
          const [rx, ry, rz] = rotate(x, y, z, rotX, rotY);
          const p = proj(rx, ry, rz);
          const t = Math.max(0, Math.min(1, (p.pz / R + 1) / 2));
          if (t < 0.15) return;
          ctx.beginPath();
          ctx.arc(ox + p.sx, oy + p.sy, 1.5 * p.d, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,212,255,${(t * 0.7).toFixed(2)})`;
          ctx.fill();
        }
      });

      // ── Particles ────────────────────────────────────────────────
      const PS = Math.max(W, H) * 0.52;
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.z += p.vz;
        if (Math.abs(p.x) > 1.1) p.vx *= -1;
        if (Math.abs(p.y) > 1.1) p.vy *= -1;
        if (Math.abs(p.z) > 1.1) p.vz *= -1;
      });

      const pp = particles.map(p => {
        const [rx, ry] = rotate(p.x, p.y, p.z, rotX * 0.1, rotY * 0.1);
        const d = FOV / (FOV + p.z * PS * 0.3 + PS);
        return { sx: W / 2 + rx * PS * d, sy: H / 2 + ry * PS * d };
      });

      const CONN = Math.min(W, H) * 0.16;
      for (let i = 0; i < pp.length; i++) {
        for (let j = i + 1; j < pp.length; j++) {
          const dx = pp[i].sx - pp[j].sx;
          const dy = pp[i].sy - pp[j].sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN) {
            const a = ((1 - dist / CONN) * 0.09).toFixed(2);
            ctx.beginPath();
            ctx.moveTo(pp[i].sx, pp[i].sy);
            ctx.lineTo(pp[j].sx, pp[j].sy);
            ctx.strokeStyle = `rgba(255,255,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      pp.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.22)';
        ctx.fill();
      });

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

      {/* Full-width 3D canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Text readability gradient — opaque left, transparent right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.82) 30%, rgba(5,5,5,0.35) 60%, rgba(5,5,5,0.05) 100%)',
        }}
      />

      {/* Ambient cyan glow behind sphere */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/4 rounded-full blur-[110px] z-[1] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="relative max-w-2xl">

          {/* Corner frame */}
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
