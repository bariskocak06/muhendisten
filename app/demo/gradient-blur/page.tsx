import { GradientBlur } from "@/components/ui/gradient-blur";

export default function GradientBlurDemoPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden cursor-move">
      <GradientBlur />
      <h4 className="pointer-events-none absolute left-0 top-[40%] w-full text-center font-heading text-5xl text-foreground/90 md:text-6xl">
        Gradient Blur
      </h4>
    </div>
  );
}
