"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import DynsightLogo from "@/public/dynsight-logo.png";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";

function UserCredentialsForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submitRequest = async (event: Event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let res = await signIn("Credentials", {
        redirect: false,
        email,
      });

      if (res?.ok) {
        router.push("/");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeEmail = (event: Event) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  return (
    <form
      action=""
      onSubmit={(event: any) => submitRequest(event)}
      className="flex flex-col items-center space-y-5"
    >
      <div className="w-full relative group">
        <label
          htmlFor="username"
          className="absolute group-focus:text-white text-gray-400 font-thin px-2 -top-3 left-2 bg-teltonikaGray-500"
        >
          Email
        </label>
        <input
          onChange={(event: any) => handleChangeEmail(event)}
          id="email"
          type="email"
          className="p-2 w-full outline-non text-gray-400  focus:border-white rounded-md bg-transparent border border-gray-600 ring-gray-100 font-thin"
        />
      </div>

      <div className="justify-start w-full underline">
        <Link
          className="hover:text-gray-200 text-sm font-opensans tracking-tight"
          href={"signin"}
        >
          Retourner au formulaire de connexion
        </Link>
      </div>
      <div className="flex flex-row justify-end  w-full ">
       
        <button
          type="submit"
          className={`group ${
            loading
              ? "border-gray-500 cursor-default hover:bg-none"
              : "border-white hover:bg-white"
          } border flex space-x-2    rounded-md uppercase font-oswald px-4 py-1.5`}
        >
          <span
            className={`${
              loading
                ? "text-gray-500"
                : "text-white group-hover:text-teltonikaGray-500"
            } uppercase`}
          >
            Réinitialiser
          </span>
          {loading && (
            <TailSpin
              visible={true}
              height="20"
              width="20"
              color="#6b7280"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </button>
      </div>
    </form>
  );
}

function RightSideFormForgotPassword() {
  return (
    <div className="relative w-full h-screen lg:w-[500px] bg-teltonikaGray-500 text-white">
      <div className="m-auto w-4/5 pt-20 sm:w-1/2 lg:w-5/6 h-full  flex flex-col space-y-8">
        <div className="lg:hidden flex flex-row justify-center items-center space-x-2 mb-10">
          <Image
            className="w-8 h-8 sm:w-10 sm:h-10"
            src={DynsightLogo}
            alt="soft-icon"
          />

          <div className="flex flex-row items-center space-x-2">
            <span className="tracking-widest font-opensans text-4xl text-white">
              DYNISIGHT
            </span>
          </div>
        </div>
        <div className="w-full border-b border-gray-400 space-x-3 text-lg">
          <span className="px-2 uppercase font-oswald text-gray-400 tracking-widest">
            Login
          </span>
          {/* <span className="uppercase font-oswald">
            Register
          </span> */}
        </div>
        <div className="text-left">
          <span className="text-3xl font-oswald tracking-wide uppercase">
            Mot de passe oublié{" "}
          </span>
        </div>
        <UserCredentialsForgotPassword />
      </div>
    </div>
  );
}
function ForgotPassword() {
  return (
    <>
      <RightSideFormForgotPassword />
    </>
  );
}

export default ForgotPassword;
