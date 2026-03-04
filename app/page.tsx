export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-xl font-bold text-zinc-900 dark:text-white">
            Safeguard SL
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              Common Scams
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              Get Help
            </a>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Welcome to Safeguard SL
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl text-center">
            Your trusted resource for scam awareness and protection
          </p>
        </section>
      </main>
    </div>
  );
}
