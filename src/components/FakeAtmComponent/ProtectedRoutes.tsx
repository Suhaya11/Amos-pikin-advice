"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Data } from "../data";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const query = localStorage.getItem("AmosIdeaApp");

    const theData: Data = JSON.parse(query ? query : "{}");
    const currentUser = theData?.atm_simulations?.currentUSer;

    // Be extremely strict:
    // 1. Does the user exist?
    // 2. Is the phone number actually a value (not empty string/null/0)?
    const hasPhone = currentUser?.loginInfo?.phoneNumber;

    if (!currentUser || !hasPhone) {
      console.log("Access Denied: No valid phone number found.");
      router.replace("/fake-atm/");
    } else {
      setIsAuthorized(true);
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
