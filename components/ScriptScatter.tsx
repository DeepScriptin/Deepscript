import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  text: string;
  size: number;
  color: string;
}

const ScriptScatter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);

  const spawnParticles = (x: number, y: number) => {
    const symbols = ['{', '}', '=>', '()', 'AI', '0', '1', 'script', 'code', 'Deep', '[]', '</>', ';'];
    const colors = ['#FFFFFF', '#0660d8', '#cb00da', '#00f2ff'];

    for (let i = 0; i < 20; i++) {
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15,
        alpha: 1,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 14 + 10,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };

  useEffect(() => {
    const handleScatter = (e: CustomEvent<{ x: number; y: number }>) => {
      spawnParticles(e.detail.x, e.detail.y);
    };

    window.addEventListener('logo-hover-scatter' as any, handleScatter as any);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.font = `black ${p.size}px Outfit`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillText(p.text, p.x, p.y);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('logo-hover-scatter' as any, handleScatter as any);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
    />
  );
};

export default ScriptScatter;