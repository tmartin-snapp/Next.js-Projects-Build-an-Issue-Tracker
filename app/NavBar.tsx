"use client";

import React from "react";
import { Container, Flex, Link } from "@radix-ui/themes";
import AuthStatus from "./components/AuthStatus";
import NavLinks from "./components/NavLinks";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <FaBug />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
