import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Smartphone, Search, Check } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className=" py-10 md:py-20 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center md:text-left">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            How Does It Work?
          </h2>
          <p className="mt-4">
            Three simple steps to become a smarter digital citizen.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-1">
              <CardDecorator>
                <Smartphone className="size-6" strokeWidth={4} aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 font-medium">See a Real Scam</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-0 text-sm">
                We show you authentic-looking fake messages - the same ones that
                arrive on real phones every day in Sri Lanka.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-1">
              <CardDecorator>
                <Search className="size-6" strokeWidth={4} aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 font-medium">Spot the Traps</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-0 text-sm">
                Tap on suspicious parts of the message. Each red flag you find
                teaches you what to look for next time.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-1">
              <CardDecorator>
                <Check className="size-6" strokeWidth={4} aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 font-medium">Stay Safe</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-0 text-sm">
                By the end, you&rsquo;ll know exactly what warning signs to look
                for - and you&rsquo;ll know what to do if you receive one.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
