"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import PowerBiIframe from "./components/PowerBiIframe";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <div>Olá {user.name}</div>
        <Link href="/api/auth/logout">Logout</Link>
        <PowerBiIframe />
      </>
    );
  }
  return <Link href="/api/auth/login">Login</Link>;
}
