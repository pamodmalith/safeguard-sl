"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

const Ready = () => {
  return (
    <section className="max-w-6xl mx-auto text-center py-0 px-4">
      <h1 className="text-3xl font-bold">Ready to test your instincts?</h1>
      <p className="mt-2 text-muted-foreground">
        The training takes under 3 minutes. No account, no download, no cost.
      </p>
      <Button className="mt-5 text-white rounded-md cursor-pointer transition-colors duration-300">
        Start &rdquo;Spot the Trap&ldquo; <ArrowRightIcon />
      </Button>
    </section>
  );
};

export default Ready;
