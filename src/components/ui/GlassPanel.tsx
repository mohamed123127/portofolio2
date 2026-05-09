import React from "react";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function GlassPanel({
  children,
  className = "",
  as: Component = "div"
}: GlassPanelProps) {
  return (
    <Component className={`glass-panel ${className}`}>
      {children}
    </Component>
  );
}
