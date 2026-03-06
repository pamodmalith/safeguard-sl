"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <section className="max-w-6xl mx-auto text-center py-0 px-4 mb-10">
      <h1 className="text-4xl font-bold lg:text-5xl">
        Ready to test your instincts?
      </h1>
      <p className="mt-2 text-muted-foreground">
        The training takes under 3 minutes. No account, no download, no cost.
      </p>
      <Link href="/spot-the-trap">
        <Button className="mt-5 text-white p-6 text-lg min-w-55 rounded-md cursor-pointer transition-colors duration-300">
          Start &rdquo;Spot the Trap&ldquo; <ArrowRightIcon />
        </Button>
      </Link>
    </section>
  );
};

export default Ready;
