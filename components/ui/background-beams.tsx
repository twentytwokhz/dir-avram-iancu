"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      beams.style.setProperty("--mouse-x", `${mouseX}px`);
      beams.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    beams.addEventListener("mousemove", handleMouseMove);

    return () => {
      beams.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_var(--mouse-x,center)_var(--mouse-y,center),transparent_10%,black)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at var(--mouse-x, center) var(--mouse-y, center),
                hsl(var(--primary)) 0%,
                transparent 25%
              ),
              radial-gradient(circle at var(--mouse-x, center) var(--mouse-y, center),
                hsl(var(--primary)) 0%,
                transparent 25%
              ),
              radial-gradient(circle at var(--mouse-x, center) var(--mouse-y, center),
                hsl(var(--primary)) 0%,
                transparent 25%
              )
            `,
            backgroundPosition: "0 0, 50% 50%, 100% 100%",
            backgroundSize: "100% 100%",
          }}
        />
      </div>
    </div>
  );
};