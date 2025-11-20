import { Flex, Link } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import "@/app/global"

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  const currentPath = usePathname();
  console.log("Current Path:", currentPath);

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link className={classnames(text-zinc-500 hover:text-zinc-800 transition-colors; )} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
