import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

/**
 * PrecisionRobot — AENS "Overseer" mascot.
 *
 * Uses a 3D Spline scene (interactive robot that follows the cursor) wrapped
 * inside the AENS command HUD: rotating halo rings, glowing hover pad, corner
 * brackets, floating HUD chips, and an animated spotlight sweep.
 */
export default function PrecisionRobot() {
  return (
    <div className="relative h-full w-full isolate" data-testid="hero-robot">
      {/* animated spotlight sweep (aceternity) */}
      <Spotlight className="-top-20 left-0 md:-left-10 md:-top-10" fill="#dde1e8" />

      {/* THE SPLINE OVERSEER — widened left/right framing for full arm span */}
      <div className="absolute inset-y-[-5%] -left-[25%] -right-[16%] flex items-center justify-center overflow-visible pb-[15%] pt-[4%] sm:-left-[23%] sm:-right-[14%] sm:pb-[13%] md:-left-[21%] md:-right-[12%] md:pb-[11%] lg:-left-[19%] lg:-right-[10%] lg:pb-[10%]">
        <div className="relative h-full w-full max-h-[980px] max-w-[1040px] origin-center translate-x-[11%] -translate-y-[1%] scale-[0.68] sm:scale-[0.72] md:scale-[0.76] lg:scale-[0.8] xl:scale-[0.84] 2xl:scale-[0.88]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="!h-full !w-full"
          />
        </div>
      </div>

    </div>
  );
}
