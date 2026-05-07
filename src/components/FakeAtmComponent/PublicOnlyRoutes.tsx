"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Data } from "../data";

export default function PublicOnlyRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Mark that we are now on the client side
    setMounted(true);

    const query = localStorage.getItem("AmosIdeaApp");
    const theData: Data = JSON.parse(query ? query : "{}");
    const currentUser = theData?.atm_simulations?.currentUSer;

    // 2. Check auth status
    if (currentUser?.loginInfo?.isLoggedIn) {
      router.replace("/fake-atm/dashbord");
    }
  }, [router]);

  // 3. IMPORTANT: If we aren't mounted or if a user is found, render nothing.
  // This prevents the login form from "flashing" before the redirect happens.
  if (!mounted) return null;

  // Double check localStorage again for the render cycle
  const query =
    typeof window !== "undefined" ? localStorage.getItem("AmosIdeaApp") : null;
  const isLogged = JSON.parse(query || "{}")?.atm_simulations?.currentUSer
    ?.loginInfo?.isLoggedIn;

  if (isLogged) return null;

  return <>{children}</>;
}
