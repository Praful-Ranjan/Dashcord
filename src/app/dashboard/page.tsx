"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1 className="text-3xl font-semibold">
            {user?.picture ? (
              <Image
                className="rounded-full border border-black"
                src={user?.picture}
                alt="logo"
                width={55}
                height={55}
              />
            ) : (
              <div className="size-fit p-2 rounded-full bg-slate-300 border border-black">
                {user?.given_name![0]}
                {user?.family_name![0]}
              </div>
            )}
          </h1>
          <br />
          <Button>
            <LogoutLink>Log Out</LogoutLink>
          </Button>
        </>
      ) : (
        "Not Logged In"
      )}
    </div>
  );
};

export default Dashboard;
