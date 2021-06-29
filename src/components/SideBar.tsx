import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { api } from "../services/api";
import { MoviesContext, MoviesContextCreate } from '../hooks/MoviesContext'
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const { selectedGenreId,handleClickButton } = useContext(MoviesContextCreate)

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
    setGenres(response.data);
    });
  }, []);
 
  
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}