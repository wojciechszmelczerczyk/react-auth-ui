import axiosInstance from "../api/axiosInstance";

export const signup = async (email: string, password: string) =>
  await axiosInstance.post("/signup", { email, password });

export const signin = async (email: string, password: string) =>
  await axiosInstance.post("/signin", { email, password });
