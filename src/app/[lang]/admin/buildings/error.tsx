"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-5 lg:pt-52 flex flex-col justify-center items-center">
      <h2 className="text-xl text-gray-600">
        Erreur s'est produite lors de la récupération des données des immeubles
        !
      </h2>
     <div className="flex space-x-3 items-center">
     <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 ease-out text-white" onClick={() => router.refresh()}>Rafraichir</button>
      <button
      className="p-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 ease-out text-white"
        onClick={
          () => router.push("/admin/home")
          // Attempt to recover by trying to re-render the segment
        }
      >
        Accueil
      </button>
     </div>
    </div>
  );
}
