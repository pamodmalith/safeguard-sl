import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Check, MessageSquareWarningIcon } from "lucide-react";

export default function Features() {
  return (
    <section className=" py-10 md:py-20 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center md:text-left">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">
            How Does It Work?
          </h2>
          <p className="mt-4">
            Three simple steps to become a smarter digital citizen.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-1">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-red-600/10">
                <MessageSquareWarningIcon
                  className="size-14 text-red-600"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>

              <h3 className="mt-2 text-red-500 font-medium">See a Real Scam</h3>
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
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-blue-600/10">
                <Search
                  className="size-14 text-blue-600"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>

              <h3 className="mt-2 text-blue-600 font-medium">Spot the Traps</h3>
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
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-green-600/10">
                <Check
                  className="size-14 text-green-600"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>

              <h3 className="mt-2 text-green-600 font-medium">Stay Safe</h3>
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
