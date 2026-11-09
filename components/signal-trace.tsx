export function SignalTrace({ className }: { className: string }) {
  return (
    <svg className={`signal-trace pointer-events-none ${className}`} viewBox="0 0 200 90" fill="none" aria-hidden="true">
      <path d="M8 75h40l25-25h48l20-24h51M48 75l20 10h35M121 50l18 21h42M73 50V24l15-16h31" stroke="currentColor" strokeWidth="1.25" />
      <path className="signal-route" d="M8 75h40l25-25h48l20-24h51" stroke="currentColor" strokeWidth="2" strokeDasharray="9 190" />
      <circle cx="8" cy="75" r="3" fill="currentColor" />
      <circle cx="73" cy="50" r="4" fill="currentColor" />
      <circle cx="121" cy="50" r="4" fill="currentColor" />
      <circle cx="192" cy="26" r="3" fill="currentColor" />
      <circle cx="119" cy="8" r="2.5" fill="currentColor" />
      <circle cx="181" cy="71" r="2.5" fill="currentColor" />
    </svg>
  );
}
