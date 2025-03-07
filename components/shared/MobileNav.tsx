"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={24}
          className="md:py-2 flex items-center gap-2"
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                width={32}
                height={32}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet content sm:w-64">
              <>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={152}
                  height={23}
                  className="md:py-2 flex items-center gap-2"
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "text-purple-600"
                        } p-18 flex whitespace-nowrap text-dark-700 cursor-pointer`}
                      >
                        <Link href={link.route}>{link.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login </Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
