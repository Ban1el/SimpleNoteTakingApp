import { http } from "./http";

export const addPage = () => {
  const token = localStorage.getItem("token");
  return http("pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  });
};
