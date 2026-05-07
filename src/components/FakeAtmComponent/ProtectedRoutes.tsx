"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Data } from "../data";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");

    const theData: Data = JSON.parse(query ? query : "{}");
    const currentUser = theData?.atm_simulations?.currentUSer;

    // Be extremely strict:
    // 1. Does the user exist?
    // 2. Is the phone number actually a value (not empty string/null/0)?
    const hasPhone = currentUser?.loginInfo?.isLoggedIn;

    if (!hasPhone) {
      console.log("Access Denied: No valid phone number found.");

      return router.replace("/fake-atm/login");
    } else {
      return setIsAuthorized(true);
    }
  }, [router]);

  // Prevent "flicker" by showing nothing or a spinner until checked
  if (!isAuthorized) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
