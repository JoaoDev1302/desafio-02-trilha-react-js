import { Button } from "./Button"
import { Context } from '../Context'

export function SideBar() {
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