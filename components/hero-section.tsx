import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex min-h-[50vh] md:min-h-[60vh] bg-blue-600/5 flex-col items-center justify-center px-6 py-5">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-8 px-4 py-2 text-sm font-medium hover:bg-background border-amber-500 border shadow-md shadow-zinc-950/5 transition-colors duration-300 "
        >
          🇱🇰 Sri Lanka Digital Safety Initiative
        </Badge>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Learn to Spot <span className="text-amber-500">Online Scams</span>
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
          <Link href="/spot-the-trap">
            <Button className="cursor-pointer p-6 min-w-55 text-lg">
              <PlayIcon /> Start the Training
            </Button>
          </Link>
          <Link href="/common-scams">
            <Button
              variant="secondary"
              className="cursor-pointer p-6 min-w-55 text-lg border border-blue-500"
            >
              Browse Scam Examples
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
