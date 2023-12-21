import React,{useState} from 'react';
import ImageSearch from './components/ImageSearch';
import ImageList from './components/ImageList';
import "./style.css"

export default function App() {
    const [imagelist, setImagelist] = useState([]);
  return (
    <div id='main'>
      <ImageSearch setImagelist={setImagelist}/>
      <ImageList imagelist={imagelist}/>
    </div>
  )
}
