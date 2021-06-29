import { Content } from './components/Content'
import { SideBar } from './components/SideBar';
import { MoviesContext } from './hooks/MoviesContext'

import './styles/global.scss';

export function App() {
  
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <MoviesContext>
        <SideBar />
        <Content />
      </MoviesContext>
    </div>
  )
}