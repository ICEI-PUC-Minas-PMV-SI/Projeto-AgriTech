"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import PowerBiIframe from "./components/bi/PowerBiIframe";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingPage from "./components/loaders/LoadingPage";
import { useNav } from "./context/NavContext";
import getRelatory from "./data/powerbiData";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const navigate = useRouter();
  const [biData, setBiData] = useState<any>({});

  const { currentView } = useNav();

  useEffect(() => {
    if (!currentView) return;
    setBiData(getRelatory(currentView));
  }, [currentView]);

  console.log(biData);
  if (isLoading) return <LoadingPage />;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return <PowerBiIframe title={biData?.title} src={biData?.src} />;
  }
  return navigate.push("/login");
}
