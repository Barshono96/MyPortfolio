"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Gear {
  x: number;
  y: number;
  radius: number;
  teeth: number;
  rotation: number;
  speed: number;
  color: string;
  direction: number; // 1 for clockwise, -1 for counter-clockwise
}

interface Connection {
  from: number;
  to: number;
}

export function GearBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create gears
    const gears: Gear[] = [
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.3,
        radius: 70,
        teeth: 24,
        rotation: 0,
        speed: 0.2,
        color: "#4dd8e6",
        direction: 1,
      },
      {
        x: canvas.width * 0.9,
        y: canvas.height * 0.4,
        radius: 40,
        teeth: 16,
        rotation: 0,
        speed: 0.3,
        color: "#4dd8e6",
        direction: -1,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.3,
        radius: 55,
        teeth: 20,
        rotation: 0,
        speed: 0.25,
        color: "#4dd8e6",
        direction: -1,
      },
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.5,
        radius: 60,
        teeth: 20,
        rotation: 0,
        speed: 0.18,
        color: "#4dd8e6",
        direction: 1,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.48,
        radius: 45,
        teeth: 18,
        rotation: 0,
        speed: 0.22,
        color: "#4dd8e6",
        direction: -1,
      },
    ];

    // Create network nodes (dots)
    const nodes: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    // Create connections between nodes
    const connections: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetNode = Math.floor(Math.random() * nodes.length);
        if (targetNode !== i) {
          connections.push({ from: i, to: targetNode });
        }
      }
    }

    // Draw a gear
    function drawGear(ctx: CanvasRenderingContext2D, gear: Gear) {
      const { x, y, radius, teeth, rotation, color } = gear;
      const toothDepth = radius * 0.2; // Depth of gear teeth
      const innerRadius = radius * 0.7; // Inner circle radius
      const centerHoleRadius = radius * 0.2; // Center hole radius
      const spokesCount = 6; // Number of spokes

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw outer gear teeth
      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const angle = (i * 2 * Math.PI) / teeth;
        const nextAngle = ((i + 1) * 2 * Math.PI) / teeth;
        const midAngle = (angle + nextAngle) / 2;

        const outerX1 = (radius - toothDepth / 2) * Math.cos(angle);
        const outerY1 = (radius - toothDepth / 2) * Math.sin(angle);

        const outerX2 = (radius + toothDepth / 2) * Math.cos(midAngle);
        const outerY2 = (radius + toothDepth / 2) * Math.sin(midAngle);

        const outerX3 = (radius - toothDepth / 2) * Math.cos(nextAngle);
        const outerY3 = (radius - toothDepth / 2) * Math.sin(nextAngle);

        if (i === 0) {
          ctx.moveTo(outerX1, outerY1);
        } else {
          ctx.lineTo(outerX1, outerY1);
        }

        ctx.lineTo(outerX2, outerY2);
        ctx.lineTo(outerX3, outerY3);
      }
      ctx.closePath();

      // Add gradient fill
      const gradient = ctx.createRadialGradient(
        0,
        0,
        innerRadius,
        0,
        0,
        radius + toothDepth / 2
      );
      gradient.addColorStop(0, "rgba(77, 216, 230, 0.4)");
      gradient.addColorStop(0.7, "rgba(77, 216, 230, 0.6)");
      gradient.addColorStop(1, "rgba(77, 216, 230, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add stroke
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw inner circle
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw inner details - spokes
      for (let i = 0; i < spokesCount; i++) {
        const angle = (i * Math.PI) / (spokesCount / 2);
        ctx.beginPath();
        ctx.moveTo(
          centerHoleRadius * Math.cos(angle),
          centerHoleRadius * Math.sin(angle)
        );
        ctx.lineTo(
          innerRadius * 0.9 * Math.cos(angle),
          innerRadius * 0.9 * Math.sin(angle)
        );
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Draw center hole
      ctx.beginPath();
      ctx.arc(0, 0, centerHoleRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(77, 216, 230, 0.8)";
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Add a dot in the very center
      ctx.beginPath();
      ctx.arc(0, 0, centerHoleRadius / 3, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      ctx.restore();
    }

    // Draw a connection line between nodes
    function drawConnection(
      ctx: CanvasRenderingContext2D,
      from: { x: number; y: number },
      to: { x: number; y: number }
    ) {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only draw if within reasonable distance
      if (distance < 300) {
        const opacity = Math.max(0.1, 1 - distance / 300);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(77, 216, 230, ${opacity * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Draw a network node (dot)
    function drawNode(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      isHighlighted = false
    ) {
      ctx.beginPath();
      ctx.arc(x, y, isHighlighted ? 3 : 2, 0, Math.PI * 2);
      ctx.fillStyle = isHighlighted
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(77, 216, 230, 0.8)";
      ctx.fill();
    }

    // Add hexagon patterns in the background
    function drawHexagonPatterns(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.strokeStyle = "rgba(77, 216, 230, 0.15)";
      ctx.lineWidth = 1;

      const hexSize = 40;
      const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 1;
      const rows =
        Math.ceil(canvas.height / ((hexSize * Math.sqrt(3)) / 2)) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const centerX = col * hexSize * 1.5;
          const centerY = (row * hexSize * Math.sqrt(3)) / 2;
          const offsetX = row % 2 === 0 ? 0 : hexSize * 0.75;

          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = centerX + offsetX + hexSize * 0.5 * Math.cos(angle);
            const y = centerY + hexSize * 0.5 * Math.sin(angle);

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      ctx.restore();
    }

    // Animation variables
    let animationFrame: number;
    let time = 0;

    // Animate the scene
    function animate() {
      time += 0.01;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dark blue background with opacity
      ctx.fillStyle = "rgba(0, 10, 30, 0.92)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw an additional gradient overlay
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(0, 20, 40, 0.6)");
      gradient.addColorStop(1, "rgba(0, 10, 20, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hexagon patterns
      drawHexagonPatterns(ctx);

      // Animate nodes slightly
      for (const node of nodes) {
        node.x += Math.sin(time + node.y * 0.01) * 0.3;
        node.y += Math.cos(time + node.x * 0.01) * 0.3;

        // Keep within bounds
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;
      }

      // Draw connections between nodes
      for (const connection of connections) {
        drawConnection(ctx, nodes[connection.from], nodes[connection.to]);
      }

      // Draw network nodes
      for (const node of nodes) {
        drawNode(ctx, node.x, node.y, Math.random() > 0.9); // Occasionally highlight a node
      }

      // Update and draw gears
      for (const gear of gears) {
        gear.rotation += gear.speed * 0.01 * gear.direction;
        drawGear(ctx, gear);
      }

      // Request next frame
      animationFrame = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#000c18]">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </>
  );
}
