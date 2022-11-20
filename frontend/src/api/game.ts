import { useQuery } from "react-query";
import { apiClient } from "./client";
import { Game } from "../../../common/types/Game";
import type { AxiosError } from "axios";

export const useGames = () =>
  useQuery<Game[], AxiosError>(["games"], fetchGames);

const fetchGames = async (): Promise<Game[]> => {
  console.log("asd?");
  const response = await apiClient.get<Game[]>("games");
  console.log(response);
  return response.data;
};
