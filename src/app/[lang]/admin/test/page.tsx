"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { Session } from "inspector";
const posts: { id: number; title: string }[] = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
];

function page() {
  const { data: _session } = useSession();
  let session = _session as CustomSession;
  console.log(session);

  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      };
      const data = await axios.get(
        "http://38.242.254.49:5000/api/organizations",
        config
      );
      return data.data;
    },

    /* queryFn:()=>Promise.reject("error") */
  });

  if (postQuery.isLoading) {
    return <h1>isLoading</h1>;
  }
  if (postQuery.isError) {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }
  if (postQuery.isSuccess) {
    console.log(postQuery.data);
  }
  return <div></div>;
}

export default page;
