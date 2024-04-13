"use client";
import { useEffect } from "react";
import Lock from "@/public/lock.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div className="h-full text-gray-500 justify-center flex flex-col space-y-4 items-center my-auto ">
      <h1>Accès Refusé</h1>
      <p>Désolé, vous n avez pas la permission d accéder à cette page</p>
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
        Revenir à la page d accueil
      </button>
    </div>
  );
}
export default NotFound;
