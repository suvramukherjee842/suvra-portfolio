interface GridBgProps {
  heroMask?: boolean;
  contactMask?: boolean;
}

export default function GridBg({ heroMask, contactMask }: GridBgProps) {
  const maskImage = heroMask
    ? "radial-gradient(95% 115% at 84% 45%, #000 30%, transparent 74%)"
    : "radial-gradient(120% 120% at 50% 50%, transparent 20%, #000 64%)";

  void contactMask; // acknowledged, contactMask uses the else branch above

  return (
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden",
      WebkitMaskImage: maskImage, maskImage,
    }}>
      {/* base white grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.045) 1px,transparent 1px)",
        backgroundSize: "46px 46px",
      }} />
      {/* animated lime grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(to right,rgba(195,231,91,0.42) 1px,transparent 1px),linear-gradient(to bottom,rgba(195,231,91,0.38) 1px,transparent 1px)",
        backgroundSize: "46px 46px",
        WebkitMaskImage: "linear-gradient(90deg,transparent 0%,transparent 28%,#000 44%,#000 56%,transparent 72%,transparent 100%)",
        maskImage: "linear-gradient(90deg,transparent 0%,transparent 28%,#000 44%,#000 56%,transparent 72%,transparent 100%)",
        WebkitMaskSize: "220% 100%", maskSize: "220% 100%",
        WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
        animation: "gridSweep 6s linear infinite",
      }} />
    </div>
  );
}
