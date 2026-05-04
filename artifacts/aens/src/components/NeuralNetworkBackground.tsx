import { useTheme } from "./ThemeProvider";

/**
 * Ambient page backdrop — static gradients only (no canvas / particle dots).
 */
export default function NeuralNetworkBackground() {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    false;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-background" />
          <div className="absolute -left-[20%] top-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_68%)] blur-3xl" />
          <div className="absolute -right-[10%] bottom-0 h-[55%] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(225,230,240,0.06)_0%,transparent_70%)] blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-background" />
          <div className="absolute left-1/2 top-0 h-[60%] w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08)_0%,transparent_65%)] blur-3xl" />
        </>
      )}
    </div>
  );
}
