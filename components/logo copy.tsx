import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

export const LogoSL = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Shield strokeWidth={3} />
      <h1 className={cn("text-foreground w-auto font-bold ml-1", className)}>
        SafeGuard SL
      </h1>
    </div>
  );
};
