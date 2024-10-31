"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; createdAt: number; size: number; style: any }>>([]);

  useEffect(() => {
    const generateSparkle = () => {
      return {
        id: Math.random(),
        createdAt: Date.now(),
        size: Math.random() * 10 + 5,
        style: {
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          zIndex: 2,
        },
      };
    };

    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(sparkles => {
        const filtered = sparkles.filter(sparkle => now - sparkle.createdAt < 500);
        return [...filtered, generateSparkle()].slice(-3);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={cn("relative inline-block", className)} {...props}>
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          className="absolute inline-block animate-sparkle-ping"
          style={sparkle.style}
        >
          <svg
            className="animate-sparkle"
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
              fill="#FFC700"
            />
          </svg>
        </span>
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};