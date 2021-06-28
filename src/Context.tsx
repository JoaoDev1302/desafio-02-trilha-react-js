import { useEffect, useState, createContext, ReactNode } from "react";
import { api } from "./services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  
  interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

  interface MoviesProviderProps {
    children: ReactNode;
  }

  interface MoviesContextData {
    movies: MovieProps[];
    selectedGenre: GenreResponseProps;
    selectedGenreId: Number;
    genres: GenreResponseProps[];
    handleClickButton:(id: number) => Promise<void>;
  }

  export const MoviesContext = createContext(
    {} as MoviesContextData
  );

export function Context({ children } : MoviesProviderProps){

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  

  useEffect(() => {
      api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
      });
  }, []);
  
  useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
      });
  
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
      })
  }, [selectedGenreId]);

  async function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
    
  return(
    <MoviesContext.Provider value={{selectedGenre, selectedGenreId, genres, movies, handleClickButton}}>
      {children}
    </MoviesContext.Provider>
  )

}