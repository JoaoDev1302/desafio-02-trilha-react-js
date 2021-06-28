import "@babel/polyfill";
import { Content } from './components/Content'
import { SideBar } from './components/SideBar';
import { Context } from './Context'

import './styles/global.scss';

export function App() {
  
  return (
    <Context>
      <div style={{display:'flex',flexDirection:'row'}}>
        <SideBar />
        <Content />
      </div>
    </Context>
  )
}