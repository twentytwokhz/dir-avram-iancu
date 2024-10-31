"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  ...props
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-[1px]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(to right, hsl(var(--primary)) 2%, #80808012 50%, hsl(var(--primary)) 98%)`,
            animation: `moveLeft ${duration}ms linear infinite`,
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(to bottom, hsl(var(--primary)) 2%, #80808012 50%, hsl(var(--primary)) 98%)`,
            animation: `moveTop ${duration}ms linear infinite`,
          }}
        />
      </div>
      <div className="relative h-full w-full bg-slate-950 rounded-lg">{children}</div>
    </div>
  );
};