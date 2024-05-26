"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import PowerBiIframe from "./components/bi/PowerBiIframe";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingPage from "./components/loaders/LoadingPage";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const navigate = useRouter();

  if (isLoading) return <LoadingPage />

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
  return navigate.push("/login");
}
