"use client";

import { Button, DarkThemeToggle } from "flowbite-react";
import Logo from "./logo";
import SearchBar from "./search-bar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-6 py-4 shadow-md">
      <Logo />
      <SearchBar />
      <div className="flex gap-4">
        <DarkThemeToggle />
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
