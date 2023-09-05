"use client";

import { useQuery } from "@tanstack/react-query";

export const useGetSavedJobs = () => {
  const { data: savedJobs = [], refetch: reload } = useQuery({
    queryKey: ["savedJob"],
    queryFn: () => {
      const saved = localStorage.getItem("savedJobs")
        ? JSON.parse(localStorage.getItem("savedJobs"))
        : null;
      return saved;
    },
  });
  return [savedJobs, reload];
};

export const useLoginQuery = () => {
  const {
    isLoading,
    data: user,
    refetch: loginReload,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/users")
        .then((res) => {
          if (!res.ok) {
            throw "Something went wrong!";
          }
          return res.json();
        })
        .catch((err) => {
          throw err;
        }),
  });
  return [user, loginReload];
};

export const useGetLoggedUser = () => {
  const { data: user, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const user = localStorage.getItem("user");
      return JSON.parse(user);
    },
  });
  return [user, refetch];
};

export const useGetAllJobs = () => {
  const {
    isLoading,
    data = [],
    refetch: reloadAll,
  } = useQuery({
    queryKey: ["allData"],
    queryFn: () =>
      fetch(`https://64eb3b83e51e1e82c5771ee6.mockapi.io/api/jobs`)
        .then((res) => {
          if (!res.ok) {
            throw "Something went wrong!";
          }
          return res.json();
        })
        .catch((err) => {
          throw err;
        }),
  });
  return [data, reloadAll];
};
