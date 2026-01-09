import { http } from "./http";

export const login = (Username, Password) => {
  const data = { Username, Password };
  return http("account/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
