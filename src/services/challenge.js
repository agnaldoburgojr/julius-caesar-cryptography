import api from "./api";

const params = { token: process.env.TOKEN };

export const generateData = () => {
  return api.get("/generate-data", { params });
};

export const submitSolution = data => {
  return api.post("/submit-solution", data, {
    params,
    headers: data.getHeaders()
  });
};
