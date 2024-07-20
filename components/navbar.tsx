import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { cn, link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  HeartFilledIcon,
  Logo,
  TagUser,
} from "@/components/icons";
import BgImage from "./bgImage";
import { FaArrowDown, FaChevronDown, FaUserCircle } from "react-icons/fa";
// import { MyDropdown } from "./dropdown";

export const Navbar = () => {
  return (
    <><NextUINavbar maxWidth="xl" position="sticky" className="bg-white">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <p className="font-bold text-inherit">LOGO</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarItem className="hidden md:flex">
          <Button
            className="text-sm  font-normal text-default-600 bg-transparent-50"
            href="/"
            endContent={<FaChevronDown />}
            variant="flat">For Sale</Button>
          <Button
            className="text-sm  font-normal text-default-600 bg-transparent-50"
            href="/"
            endContent={<FaChevronDown />}
            variant="flat">To Rent</Button>
        </NavbarItem>
        <NavbarItem>
          <ul className="hidden lg:flex gap-4  font-normal text-default-600 justify-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
          {/* <MyDropdown /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            href="/"
            endContent={<FaUserCircle className="text-black" />}
            variant="flat">Login</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
      <BgImage />
    </>
  );
};
