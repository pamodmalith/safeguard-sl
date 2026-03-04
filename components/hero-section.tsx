import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-8 px-4 py-2 text-sm font-medium"
        >
          🇱🇰 Sri Lanka Digital Safety Initiative
        </Badge>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Learn to Spot Online Scams
          <br />
          Before They Fool You
        </h1>

        {/* Subtitle */}
        <p className="mb-12 mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Free, interactive training designed for older adults. No jargon. No
          login. Just clear, practical skills.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-lg px-8 py-4 h-auto">
            Start Learning Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Watch Demo Video
          </Button>
        </div>
      </div>
    </section>
  );
}
