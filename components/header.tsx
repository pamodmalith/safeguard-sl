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
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Common Scams", href: "/scams" },
  { name: "About", href: "/about" },
  { name: "Get Help", href: "/help" },
];

const Header = () => {
  const pathname = usePathname();

  function buildNavMenu() {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink
                asChild
                active={pathname === link.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "data-active:bg-accent data-active:text-blue-600 data-active:focus:text-blue-600",
                )}
              >
                <Link href={link.href}>{link.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b flex justify-between items-center bg-background/95 backdrop-blur px-3">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <LogoSL />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {buildNavMenu()}
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <MenuIcon />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              showCloseButton={true}
              className="bg-background p-3"
            >
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <SheetTrigger asChild key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-3 rounded-md text-left transition-colors hover:bg-accent",
                        pathname === link.href
                          ? "bg-accent text-blue-600 font-medium"
                          : "text-foreground",
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
