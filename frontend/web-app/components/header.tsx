import { getCurrentUser } from "@/app/actions/authActions";
import { DarkThemeToggle } from "flowbite-react";
import DropdownProfile from "./dropdown-profile";
import LoginButton from "./login-button";
import Logo from "./logo";
import SearchBar from "./search-bar";

const Header = async () => {
  const user = await getCurrentUser();
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-6 py-4 shadow-md">
      <Logo />
      <SearchBar />
      <div className="flex gap-4">
        <DarkThemeToggle />
        {user ? <DropdownProfile user={user} /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
