import React, { useEffect , useState } from "react";
import axios from "axios"

export default function Projects() {
const [data , setData] = useState([])

function animate() {
  document.querySelector('#card-box').style.animation = "Box1 1s forwards";
}


useEffect(()=>{
axios.get('http://localhost:9090/Project')
.then((resp)=>setData(resp.data))
.catch((err)=>console.log(err))
},[])

useEffect(() => {
  // Run animation when data has been updated and the component has re-rendered
  
  // if (data.length <= 0) {
  //   document.querySelector('#loading').innerHTML = "loading..."
  // }
  if(data.length > 0){
    document.querySelector('#loading').style.display = "none"

    animate();

  }
}, [data]); // Dependency on `data` means this runs every time `data` is updated


  return (
    <>
    <main className='homeFlex1221'>
      <h1 id="loading">loading...</h1>
      <span id="card-box">
        { data.map((item)=>{
    return <a href={item.Link}>< div key={item._id} id='card'>
     <img src={item.Img} alt="image-project" />
        <h1 >{item.Name}</h1>
      </div>
      </a>
      })
      }
      </span>
    </main>
    </>
  );
}
