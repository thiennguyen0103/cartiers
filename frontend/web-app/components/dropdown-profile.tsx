"use client";

import { Dropdown } from "flowbite-react";
import { BadgeCheck, Coins, KeyRound, LogOut, UserIcon } from "lucide-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

type DropdownProfileProps = {
  user: Partial<User>;
};

function DropdownProfile({ user }: DropdownProfileProps) {
  return (
    <Dropdown label={`Welcome ${user.name}`} inline>
      <Dropdown.Item icon={KeyRound as any}>
        <Link href="/session">My session</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={UserIcon as any}>
        <Link href="/">My auctions</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={BadgeCheck as any}>
        <Link href="/">Auction won</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={Coins as any}>
        <Link href="/">Sell my car</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={LogOut as any} onClick={() => signOut()}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default DropdownProfile;
