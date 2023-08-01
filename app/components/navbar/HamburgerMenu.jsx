import {
  GraduationCap,
  LucideBuilding2,
  MenuIcon,
  Music2Icon,
} from "lucide-react";

import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import Products from "./Products";

const HamburgerMenu = () => {
  return (
    <div className="flex items-center space-x-2">
      <Products />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="bg-bars border-0 hover:bg-light hover:text-dark rounded-full"
          >
            <MenuIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-dark text-light">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Our Products</h4>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <GraduationCap />
                <Link href="/colleges">Colleges</Link>
              </div>
              <div className="flex items-centerr gap-4">
                <LucideBuilding2 />
                <Link href="/venues">Venues</Link>
              </div>
              <div className="flex items-centerr gap-4">
                <Music2Icon />
                <Link href="/artists">Artist</Link>
              </div>
              <span className="w-full border border-light" />
              <div className="flex justify-between my-2">
                <Button variant="link" className="text-light">
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="text-[rgba(255,246,1,1)] bg-dark rounded-full border-[rgba(255,246,1,1)]"
                >
                  Sign Up
                </Button>
              </div>
              <span className="w-full border border-light" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HamburgerMenu;
