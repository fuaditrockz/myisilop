"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container h-screen w-screen">
      <Header title="Home" isHome />
      <main className="flex flex-col items-center justify-center gap-8 pt-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
            className="h-48 w-auto"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <Button
            onPress={() => router.push("/IncidentPage")}
            color="primary"
            size="lg"
          >
            Incident Handling
          </Button>
          <Button color="primary" size="lg">
            Non-Incident Handling
          </Button>
        </div>
      </main>
    </div>
  );
}
