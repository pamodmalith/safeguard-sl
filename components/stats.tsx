export default function StatsSection() {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-3 *:text-center grid-cols-2 md:grid-cols-4 dark:[--color-muted:var(--color-zinc-900)]">
          <div className="bg-muted dark:bg-transparent rounded-(--radius) space-y-4 py-12 border-blue-500 border shadow-md shadow-zinc-950/5">
            <div className="text-3xl text-amber-500 sm:text-5xl font-bold">
              12,650+
            </div>
            <p className="text-xs sm:text-base">Cases in 2025</p>
          </div>
          <div className="bg-muted dark:bg-transparent rounded-(--radius) space-y-4 py-12 border-blue-500 border shadow-md shadow-zinc-950/5">
            <div className="text-3xl text-amber-500 sm:text-5xl font-bold">
              LKR 15B
            </div>
            <p className="text-xs sm:text-base">Lost to single fraud</p>
          </div>
          <div className="bg-muted dark:bg-transparent rounded-(--radius) space-y-4 py-12 border-blue-500 border shadow-md shadow-zinc-950/5">
            <div className="text-3xl text-amber-500 sm:text-5xl font-bold">
              3 min
            </div>
            <p className="text-xs sm:text-base">To complete training</p>
          </div>
          <div className="bg-muted dark:bg-transparent rounded-(--radius) space-y-4 py-12 border-blue-500 border shadow-md shadow-zinc-950/5">
            <div className="text-3xl text-amber-500 sm:text-5xl font-bold">
              Free
            </div>
            <p className="text-xs sm:text-base">No account needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
