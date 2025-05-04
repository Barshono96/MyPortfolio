"use client";

import React from "react";

type Point = { x: number; y: number };

export function TechCircuitBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
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

    // Define colors
    const colors = {
      background: "#001220",
      primaryBlue: "#00a8ff",
      accentCyan: "#00fff2",
      darkBlue: "#003366",
    };

    // Animation variables
    let animationFrame: number;
    let time = 0;
    let rotation = 0;

    // Circuit nodes for animation
    const circuitNodes: {
      x: number;
      y: number;
      pulse: number;
      pulseSpeed: number;
      size: number;
    }[] = [];

    // Generate circuit nodes
    const generateNodes = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      circuitNodes.length = 0; // Clear existing nodes

      // Create nodes along circuit paths
      for (let i = 0; i < 20; i++) {
        const angle = (i * Math.PI * 2) / 20;
        const distance = 200 + Math.random() * 300;
        circuitNodes.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          pulse: Math.random() * Math.PI * 2, // Random starting phase
          pulseSpeed: 0.02 + Math.random() * 0.03,
          size: 3 + Math.random() * 4,
        });
      }

      // Add some random nodes
      for (let i = 0; i < 15; i++) {
        circuitNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          size: 2 + Math.random() * 3,
        });
      }
    };

    // Create the central HUD circle with animation
    const createCircleHUD = (
      centerX: number,
      centerY: number,
      time: number
    ) => {
      // Outer rotating rings
      for (let i = 0; i < 5; i++) {
        const ringRadius = 150 - i * 15;
        const rotationOffset =
          ((i % 2 === 0 ? 1 : -1) * time * 0.1) % (Math.PI * 2);

        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 168, 255, ${0.2 - i * 0.03})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add rotating dots on rings
        if (i % 2 === 0) {
          const numDots = 12;
          for (let j = 0; j < numDots; j++) {
            const dotAngle = (j * Math.PI * 2) / numDots + rotationOffset;
            const dotX = centerX + Math.cos(dotAngle) * ringRadius;
            const dotY = centerY + Math.sin(dotAngle) * ringRadius;

            ctx.beginPath();
            ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 242, ${
              0.7 + Math.sin(time * 2 + j) * 0.3
            })`;
            ctx.fill();
          }
        }
      }

      // Animated segmented rings
      for (let radius = 50; radius < 130; radius += 20) {
        // Calculate rotation based on radius (inner rings rotate faster)
        const ringRotation = time * (0.2 - radius * 0.001);
        drawSegmentedRing(centerX, centerY, radius, 40, 0.8, ringRotation);
      }

      // Inner filled circle with pulsing effect
      const pulseScale = 1 + Math.sin(time * 1.5) * 0.1;
      const innerRadius = 40 * pulseScale;

      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        5,
        centerX,
        centerY,
        innerRadius
      );
      gradient.addColorStop(0, "rgba(0, 255, 242, 0.8)");
      gradient.addColorStop(1, "rgba(0, 168, 255, 0.2)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Center point with glow effect
      const glowSize = 3 + Math.sin(time * 3) * 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Add glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowSize * 2, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        glowSize * 2
      );
      glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      glowGradient.addColorStop(1, "rgba(0, 255, 242, 0)");
      ctx.fillStyle = glowGradient;
      ctx.fill();
    };

    // Draw a ring with segments - now with rotation parameter
    const drawSegmentedRing = (
      centerX: number,
      centerY: number,
      radius: number,
      segments: number,
      opacity: number,
      rotation: number = 0
    ) => {
      const angleStep = (Math.PI * 2) / segments;

      for (let i = 0; i < segments; i++) {
        const startAngle = i * angleStep + rotation;
        const endAngle = startAngle + angleStep * 0.7;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle =
          i % 5 === 0
            ? `rgba(0, 255, 242, ${
                opacity + Math.sin(time * 2 + i * 0.1) * 0.2
              })`
            : `rgba(0, 168, 255, ${
                opacity + Math.sin(time * 2 + i * 0.1) * 0.1
              })`;
        ctx.lineWidth = i % 3 === 0 ? 3 : 1;
        ctx.stroke();
      }
    };

    // Create circuit lines with animation
    const createCircuitLines = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Lines radiating from center
      const lineEndpoints: Point[] = [];
      const numLines = 12;

      for (let i = 0; i < numLines; i++) {
        const angle = (i * Math.PI * 2) / numLines + time * 0.05;
        const length = 100 + Math.random() * 400;
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;

        // Store endpoints for connecting lines
        if (i % 2 === 0) {
          lineEndpoints.push({ x: endX, y: endY });
        }

        // Draw main line with data flow effect
        const dataSpeed = time * 2 + i;
        const dataPos = (dataSpeed % 100) / 100;

        ctx.beginPath();
        ctx.moveTo(
          centerX + Math.cos(angle) * 130,
          centerY + Math.sin(angle) * 130
        );
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(0, 168, 255, ${0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Animated data packet
        if (i % 3 === 0) {
          const packetX =
            centerX + Math.cos(angle) * (130 + (length - 130) * dataPos);
          const packetY =
            centerY + Math.sin(angle) * (130 + (length - 130) * dataPos);

          ctx.beginPath();
          ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
          ctx.fillStyle = colors.accentCyan;
          ctx.fill();

          // Trailing glow
          ctx.beginPath();
          ctx.arc(packetX, packetY, 6, 0, Math.PI * 2);
          const packetGradient = ctx.createRadialGradient(
            packetX,
            packetY,
            0,
            packetX,
            packetY,
            6
          );
          packetGradient.addColorStop(0, "rgba(0, 255, 242, 0.5)");
          packetGradient.addColorStop(1, "rgba(0, 255, 242, 0)");
          ctx.fillStyle = packetGradient;
          ctx.fill();
        }

        // Animated nodes
        if (Math.random() > 0.5) {
          // Node with pulse
          const pulseSize = 4 + Math.sin(time * 2 + i) * 2;

          ctx.beginPath();
          ctx.arc(endX, endY, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle =
            Math.random() > 0.7 ? colors.accentCyan : colors.primaryBlue;
          ctx.fill();

          // Glow effect for nodes
          ctx.beginPath();
          ctx.arc(endX, endY, pulseSize * 2, 0, Math.PI * 2);
          const nodeGradient = ctx.createRadialGradient(
            endX,
            endY,
            0,
            endX,
            endY,
            pulseSize * 2
          );
          nodeGradient.addColorStop(0, `rgba(0, 168, 255, 0.5)`);
          nodeGradient.addColorStop(1, `rgba(0, 168, 255, 0)`);
          ctx.fillStyle = nodeGradient;
          ctx.fill();
        }
      }

      // Update and draw circuit nodes with pulsing effect
      circuitNodes.forEach((node) => {
        node.pulse += node.pulseSpeed;
        const pulseSize = node.size * (0.8 + Math.sin(node.pulse) * 0.2);

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 168, 255, ${
          0.7 + Math.sin(node.pulse) * 0.3
        })`;
        ctx.fill();

        // Add glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
        const nodeGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          pulseSize * 2
        );
        nodeGradient.addColorStop(0, `rgba(0, 168, 255, 0.3)`);
        nodeGradient.addColorStop(1, `rgba(0, 168, 255, 0)`);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
      });
    };

    // Draw arrowhead
    const drawArrowhead = (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number
    ) => {
      const headLength = 10;
      const angle = Math.atan2(toY - fromY, toX - fromX);

      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fillStyle = colors.accentCyan;
      ctx.fill();
    };

    // Draw horizontal/vertical circuit lines in background
    const drawBackgroundCircuits = (time: number) => {
      // Top and bottom borders
      for (let i = 0; i < 3; i++) {
        const y1 = 50 + i * 30;
        const y2 = canvas.height - 50 - i * 30;

        drawHorizontalCircuitLine(y1, 0.4, time, i % 2 === 0);
        drawHorizontalCircuitLine(y2, 0.4, time, i % 2 === 1);
      }

      // Diagonal borders
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(300, 0);
      ctx.strokeStyle = `rgba(0, 168, 255, 0.6)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width, 150);
      ctx.lineTo(canvas.width - 300, 0);
      ctx.strokeStyle = `rgba(0, 168, 255, 0.6)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 150);
      ctx.lineTo(300, canvas.height);
      ctx.strokeStyle = `rgba(0, 168, 255, 0.6)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width, canvas.height - 150);
      ctx.lineTo(canvas.width - 300, canvas.height);
      ctx.strokeStyle = `rgba(0, 168, 255, 0.6)`;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // Draw horizontal circuit line with data flow animation
    const drawHorizontalCircuitLine = (
      y: number,
      opacity: number,
      time: number,
      leftToRight: boolean
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.strokeStyle = `rgba(0, 168, 255, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Add dots and segments
      const numSegments = Math.floor(canvas.width / 50);
      for (let i = 0; i < numSegments; i++) {
        const x = i * 50;

        if (i % 5 === 0) {
          // Draw square
          ctx.fillStyle = `rgba(0, 168, 255, ${opacity + 0.2})`;
          ctx.fillRect(x - 3, y - 3, 6, 6);
        } else if (i % 3 === 0) {
          // Draw accent segment
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 30, y);
          ctx.strokeStyle = `rgba(0, 255, 242, ${opacity + 0.3})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      // Add moving data points along the line
      const dataSpeed = time * 50;
      const startPos = leftToRight
        ? dataSpeed % canvas.width
        : canvas.width - (dataSpeed % canvas.width);

      const dataPoint1 = leftToRight
        ? (startPos + 0) % canvas.width
        : (startPos - 0) % canvas.width;
      const dataPoint2 = leftToRight
        ? (startPos + 200) % canvas.width
        : (startPos - 200) % canvas.width;
      const dataPoint3 = leftToRight
        ? (startPos + 400) % canvas.width
        : (startPos - 400) % canvas.width;

      // Draw data points
      [dataPoint1, dataPoint2, dataPoint3].forEach((x) => {
        if (x >= 0 && x <= canvas.width) {
          // Glowing data packet
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = colors.accentCyan;
          ctx.fill();

          // Glow effect
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          const packetGlow = ctx.createRadialGradient(x, y, 0, x, y, 8);
          packetGlow.addColorStop(0, "rgba(0, 255, 242, 0.6)");
          packetGlow.addColorStop(1, "rgba(0, 255, 242, 0)");
          ctx.fillStyle = packetGlow;
          ctx.fill();

          // Trail effect
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(leftToRight ? x - 20 : x + 20, y);
          const trailGradient = ctx.createLinearGradient(
            x,
            y,
            leftToRight ? x - 20 : x + 20,
            y
          );
          trailGradient.addColorStop(0, "rgba(0, 255, 242, 0.5)");
          trailGradient.addColorStop(1, "rgba(0, 255, 242, 0)");
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    };

    // Draw background
    const drawBackground = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#000d18");
      gradient.addColorStop(0.5, "#001220");
      gradient.addColorStop(1, "#000d18");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Generate initial nodes
    generateNodes();

    // Animation function
    const animate = () => {
      // Update time variables for animation
      time += 0.01;
      rotation += 0.005;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();
      drawBackgroundCircuits(time);
      createCircleHUD(canvas.width / 2, canvas.height / 2, time);
      createCircuitLines();

      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Clean up
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
