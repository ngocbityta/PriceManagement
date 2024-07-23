import React, { useEffect, useState } from 'react'
import Header from './Header';


const App = () => {
  let [data, setData] = useState(5);
  const [render, setRender] = useState(1);

  const showdata = () => {
    data *= 5;
    setRender(render + 1);
    console.log(data);
  }

  return (
    <div>
      <Header />
      <a href='indexcopy.html'> link</a>
      <input type='number' onChange={(e) => { setData(e.target.value) }} />
      <button onClick={showdata}> Nhap So</button>
      <h>So da nhap vao {data}</h>
      <h>Render{render}</h>
    </div>
  )
}

export default App
// STATE EFFECT -> QUA -> DUNG DU LIEU
// COMPONENNT -> PROP 
// context 