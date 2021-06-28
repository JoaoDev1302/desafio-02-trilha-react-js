import { useContext } from "react"
import { Content } from '../components/Content';
import { Button } from "./Button"
import { MoviesContext } from '../Context'
import '../styles/sidebar.scss';

export function SideBar() {

  const { selectedGenreId, genres, handleClickButton } = useContext(MoviesContext)
  
  return(
    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
      
    </div>
  )
}