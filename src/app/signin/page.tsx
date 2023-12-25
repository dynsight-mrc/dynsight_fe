"use client";

import { signIn, useSession } from "next-auth/react";
import { permanentRedirect, redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitRequest = async (event: Event) => {
    event.preventDefault();

    try {
      let res = await signIn("Credentials", {
        redirect: false,
        username,
        password,
      });
      if (res?.ok) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }

    /* if (res?.ok) {
      console.log(res);
      
    } */
  };

  const handleChangeUsername = (event: Event) => {
    setUsername((event.target as HTMLInputElement).value);
  };

  const handleChangePassword = (event: Event) => {
    setPassword((event.target as HTMLInputElement).value);
  };
  
  return (
    <div className="h-screen w-screen  flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={(event: any) => submitRequest(event)}
        className="flex flex-col items-center"
      >
        <div className="m-3">
          <label htmlFor="username" />
          <input
            onChange={(event: any) => handleChangeUsername(event)}
            id="username"
            type="text"
            className="p-3 text-gray-500"
          />
        </div>
        <div className="m-3">
          <label htmlFor="password" />
          <input
            onChange={(event: any) => handleChangePassword(event)}
            type="password"
            id="password"
            className="p-3 text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="bg-white border border-gray-200 p-3 py-2 rounded-md hover:bg-blue-200"
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Signin;
