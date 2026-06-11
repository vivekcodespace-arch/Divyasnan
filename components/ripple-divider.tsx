export function RippleDivider({ className = "" }: { className?: string }) {
  return <div aria-hidden className={"ripple-divider " + className} />;
}
