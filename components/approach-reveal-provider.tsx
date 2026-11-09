"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const ApproachRevealContext = createContext<{
  revealedSteps: ReadonlySet<number>;
  revealStep: (index: number) => void;
} | null>(null);

export function ApproachRevealProvider({ children }: { children: ReactNode }) {
  const [revealedSteps, setRevealedSteps] = useState<ReadonlySet<number>>(() => new Set());

  function revealStep(index: number) {
    setRevealedSteps((current) => current.has(index) ? current : new Set([...current, index]));
  }

  return (
    <ApproachRevealContext.Provider value={{ revealedSteps, revealStep }}>
      {children}
    </ApproachRevealContext.Provider>
  );
}

export function useApproachReveal() {
  const context = useContext(ApproachRevealContext);
  if (!context) throw new Error("Approach cards require an ApproachRevealProvider");
  return context;
}
