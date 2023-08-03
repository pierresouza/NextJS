import { atom } from "jotai";

interface charactersProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface RickAndMortyProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: charactersProps[];
  url: string;
  created: string;
}

interface rickApi {
  results: RickAndMortyProps[];
}

interface RickAndMortyAtom {
  data?: rickApi;
  called: boolean;
  loading: boolean;
  error?: string;
}

export const rickAndMorty = atom<RickAndMortyAtom>({
  data: undefined,
  called: false,
  loading: false,
  error: "",
});
