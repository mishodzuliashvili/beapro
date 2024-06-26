"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

import { Logo } from "./logo";
import TLink from "./t-link";
import AuthLink from "./auth-link";
import getCurrentUser from "@/actions/user/current/get";
import { useState } from "react";
import { User } from "@prisma/client";
type HeaderProps = {
  user: User | null;
};
export default function Header({ user }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      className="p-1"
      maxWidth="full"
      // onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <TLink href="/" color="foreground">
          <NavbarBrand>
            <Logo />
            {/* <p className="font-bold text-inherit text-xl underline text-primary">
              AI
            </p> */}
          </NavbarBrand>
        </TLink>
      </NavbarContent>

      {!user && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <TLink color="foreground" href="#features">
              Features
            </TLink>
          </NavbarItem>
          <NavbarItem>
            <TLink href="#howitworks" color="foreground">
              How it works?
            </TLink>
          </NavbarItem>
          <NavbarItem>
            <TLink color="foreground" href="#whyitworks">
              Why it works?
            </TLink>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        <NavbarItem>
          <AuthLink user={user} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
