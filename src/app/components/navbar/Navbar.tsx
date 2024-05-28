"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import { LoginIcon } from "../icons/Icons";
import { useNav } from "@components/app/context/NavContext";

const Navbar: React.FC = () => {
  // const session = await getSession();
  const { user, error, isLoading } = useUser();
  const { setView } = useNav();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
      </div>
      {user && (
        <ul className="navbar-links">
          <li>
            <a href="#sales" onClick={() => setView("sales")}>
              Vendas
            </a>
          </li>
          |
          <li>
            <a href="#region" onClick={() => setView("region")}>
              Fornecedores
            </a>
          </li>
        </ul>
      )}
      {!user ? (
        <Link href="/api/auth/login" className="login-button">
          Login
        </Link>
      ) : (
        <Link className="logout-button" href="/api/auth/logout">
          Sair
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
