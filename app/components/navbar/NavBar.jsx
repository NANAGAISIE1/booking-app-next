"use client";
import transparentLetters from "../.../../../../public/transparent-letters.svg";
import transparent from "../../../public/transparent.svg";
import Image from "next/image";
import SearchArea from "./SearchArea";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex justify-between bg-bars/30 fixed w-full align-middle p-2 space-x-3">
      <Link href="./" className="items-center justify-center flex m-0 p-0">
        <Image
          src={transparentLetters}
          alt="logo"
          height={30}
          width={30}
          style={{ objectFit: "contain" }}
          className="md:hidden"
        />
        <Image
          src={transparent}
          alt="logo"
          height={60}
          width={150}
          style={{ objectFit: "contain" }}
          className="hidden md:flex"
        />
      </Link>
      <SearchArea />
      <Menu />
    </header>
  );
};

export default NavBar;
