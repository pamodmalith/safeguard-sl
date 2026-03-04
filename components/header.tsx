"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoSL } from "./logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 z-50 border-b flex justify-between items-center bg-background/95 backdrop-blur mx-3">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LogoSL />
          </Link>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/"}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "data-active:bg-accent data-active:text-blue-600",
                  )}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/scams"}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "data-active:bg-accent data-active:text-blue-600",
                  )}
                >
                  <Link href="/scams">Common Scams</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/about"}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "data-active:bg-accent data-active:text-blue-600",
                  )}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/help"}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "data-active:bg-accent data-active:text-blue-600",
                  )}
                >
                  <Link href="/help">Get Help</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
