"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Lock from "@/public/lock.svg";
import Image from "next/image";
import {  useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => {};
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();
  

  
  return (
    <div className="h-full text-gray-500 justify-center flex flex-col space-y-4 items-center my-auto ">
      <h1>Accés Refusé</h1>
      <p>Desole, vous n'avez pas la permission d'accéder a cette page</p>
      <Image className="h-8 w-8" src={Lock} alt="Accès Interdit" />

      <button
        onClick={
          () => {
            router.back();
          }
          // Attempt to recover by trying to re-render the segment
        }
        className="py-2 px-3 border text-blue-500 border-blue-200 rounded-md  hover:bg-blue-300 hover:text-white transition-all duration-300 ease-out"
      >
        Revenir a la page d accueil
      </button>
    </div>
  );
}
