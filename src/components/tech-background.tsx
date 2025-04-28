"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface Hexagon {
  center: Point;
  size: number;
  opacity: number;
  highlight: boolean;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate random hexagons
    const hexagons: Hexagon[] = [];
    const mainHexagons: Hexagon[] = [];
    const connectionPoints: Point[] = [];

    // Create main hexagons in the center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Add main hexagons
    mainHexagons.push(
      {
        center: { x: centerX, y: centerY },
        size: 80,
        opacity: 0.8,
        highlight: true,
      },
      {
        center: { x: centerX - 150, y: centerY - 50 },
        size: 60,
        opacity: 0.7,
        highlight: true,
      },
      {
        center: { x: centerX + 160, y: centerY + 30 },
        size: 70,
        opacity: 0.75,
        highlight: true,
      },
      {
        center: { x: centerX - 80, y: centerY + 110 },
        size: 50,
        opacity: 0.7,
        highlight: true,
      },
      {
        center: { x: centerX + 70, y: centerY - 100 },
        size: 55,
        opacity: 0.65,
        highlight: true,
      }
    );

    // Add smaller background hexagons
    for (let i = 0; i < 15; i++) {
      hexagons.push({
        center: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        },
        size: 15 + Math.random() * 30,
        opacity: 0.1 + Math.random() * 0.3,
        highlight: false,
      });
    }

    // Add connection points (dots)
    for (let i = 0; i < 20; i++) {
      connectionPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    // Draw a hexagon
    function drawHexagon(
      ctx: CanvasRenderingContext2D,
      center: Point,
      size: number,
      opacity: number,
      highlight: boolean
    ) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = center.x + size * Math.cos(angle);
        const y = center.y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Fill with gradient
      const gradient = ctx.createLinearGradient(
        center.x - size,
        center.y - size,
        center.x + size,
        center.y + size
      );
      gradient.addColorStop(0, `rgba(0, 100, 150, ${opacity * 0.2})`);
      gradient.addColorStop(1, `rgba(0, 200, 255, ${opacity * 0.4})`);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw border
      ctx.strokeStyle = highlight
        ? `rgba(0, 255, 255, ${opacity * 0.9})`
        : `rgba(0, 200, 255, ${opacity * 0.5})`;
      ctx.lineWidth = highlight ? 2 : 1;
      ctx.stroke();

      // Draw highlight points on vertices if it's a highlighted hexagon
      if (highlight) {
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = center.x + size * Math.cos(angle);
          const y = center.y + size * Math.sin(angle);

          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 255, 255, 0.9)";
          ctx.fill();
        }
      }
    }

    // Draw connections between points
    function drawConnections(ctx: CanvasRenderingContext2D, points: Point[]) {
      const maxDistance = 300; // Maximum distance for connections

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    // Draw connection dots
    function drawDots(ctx: CanvasRenderingContext2D, points: Point[]) {
      for (const point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    // Animation variables
    let animationFrame: number;
    let time = 0;

    // Animation function
    function animate() {
      time += 0.005;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background - dark blue/black gradient
      const bgGradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      bgGradient.addColorStop(0, "#000810");
      bgGradient.addColorStop(0.5, "#001525");
      bgGradient.addColorStop(1, "#000810");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate connection points
      for (const point of connectionPoints) {
        point.x += Math.sin(time + point.y * 0.01) * 0.5;
        point.y += Math.cos(time + point.x * 0.01) * 0.5;

        // Keep points within canvas
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;
      }

      // Draw all elements
      for (const hexagon of hexagons) {
        drawHexagon(
          ctx,
          hexagon.center,
          hexagon.size,
          hexagon.opacity,
          hexagon.highlight
        );
      }

      // Slightly animate main hexagons
      for (const hexagon of mainHexagons) {
        const animatedCenter = {
          x: hexagon.center.x + Math.sin(time * 0.5) * 5,
          y: hexagon.center.y + Math.cos(time * 0.7) * 5,
        };
        drawHexagon(
          ctx,
          animatedCenter,
          hexagon.size,
          hexagon.opacity,
          hexagon.highlight
        );
      }

      drawConnections(ctx, connectionPoints);
      drawDots(ctx, connectionPoints);

      animationFrame = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
