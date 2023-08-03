import { useCallback } from "react";
import { RemoteService } from "../RemoteServices";
import { ResultProps } from "./types";
import { useRickAndMortyAtom } from "@/hook/useRickAndMorty";

const useGetRiackAndMortyEpisodes = () => {
  const { rickAndMortyAtom, setRickAndMortyData } = useRickAndMortyAtom();
  const GetRiackAndMortyEpisodes = useCallback(async () => {
    try {
      setRickAndMortyData({
        called: false,
        loading: true,
      });

      const response = await RemoteService.request<ResultProps>({
        method: "GET",
        resource: "https://rickandmortyapi.com/api/episode",
      });
      setRickAndMortyData({
        data: response.data,
        called: false,
        loading: true,
      });
    } catch (err) {
      const error = err as any;
      setRickAndMortyData({
        called: true,
        loading: false,
        error: error.message,
      });
    }
  }, []);

  const { data, called, loading, error } = rickAndMortyAtom;

  return {
    GetRiackAndMortyEpisodes,
    data,
    called,
    loading,
    error,
  };
};

export default useGetRiackAndMortyEpisodes;
