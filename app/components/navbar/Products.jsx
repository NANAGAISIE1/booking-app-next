"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";

function Products() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-light hover:text-light">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuViewport className="!bg-dark !text-light rounded-lg shadow-[rgba(225,_225,_225,_0.2)_0px_20px_40px_-7px] fixed left-auto right-0 w-full" />
          <NavigationMenuContent className="p-8 m-auto">
            <li className="list-none">
              <h3 className="flex w-full flex-col justify-end px-6 py-2 text-primary font-bold">
                Products
              </h3>
              <NavigationMenuLink asChild>
                <Link
                  className="flex w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md hover:bg-bars/30"
                  href="/"
                >
                  <div className="mb-2 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-bars/30"
                  href="/"
                >
                  <div className="mb-2 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-bars/30"
                  href="/"
                >
                  <div className="mb-2 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Products;
