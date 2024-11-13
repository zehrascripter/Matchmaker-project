import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-6xl mx-auto items-center bg-red-700 p-4 h-20 rounded-md sticky top-0">
      {/* Logo */}
      <div>
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          width={100}
          height={24}
        />
      </div>

      {/* Sheet for Small Screens */}
      <div className="lg:hidden">
        <Sheet >
          <SheetTrigger className="text-white font-bold">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-red-700">
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
            </SheetHeader>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href="/">
                  <span className=" text-white hover:text-yellow-500 font-bold text-lg">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pages/about">
                  <span className=" text-white hover:text-yellow-500 font-bold text-lg">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pages/contact">
                  <span className=" text-white hover:text-yellow-500 font-bold text-lg">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Standard Navbar Links for Large Screens */}
      <div className="hidden lg:flex">
        <ul className="text-white flex gap-4">
          <Link href="/">
            <li className="hover:cursor-pointer hover:text-yellow-500 font-bold text-lg">
              Home
            </li>
          </Link>
          <Link href="/pages/about">
            <li className="hover:cursor-pointer hover:text-yellow-500 font-bold text-lg">
              About
            </li>
          </Link>
          <Link href="/pages/contact">
            <li className="hover:cursor-pointer hover:text-yellow-500 font-bold text-lg">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
