import { Eye, Info } from "lucide-react";
import { SpotTheTrapGame } from "@/components/spot-the-trap-game";

export default function SpotTheTrapPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-blue-600/5 min-h-[30vh] items-center flex">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-1">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-balance text-2xl font-bold text-foreground lg:text-4xl">
              Spot the Trap
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Practice identifying scam messages in a safe environment. Read
              each message carefully, identify the red flags, then decide if it
              is safe or a scam.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2">
              <Info className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                5 scenarios - takes about 3 minutes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Game */}
      <section className="bg-background py-10 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SpotTheTrapGame />
        </div>
      </section>
    </div>
  );
}
