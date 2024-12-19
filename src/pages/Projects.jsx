import React, { useEffect } from "react";
// import axios from "axios"

export default function Projects() {
// const [data , setData] = useState([])

function animate() {
  document.querySelector('#card-box').style.animation = "Box1 1s forwards";
}


// useEffect(()=>{
// axios.get('http://localhost:9090/Project')
// .then((resp)=>setData(resp.data))
// .catch((err)=>console.log(err))
// },[])

useEffect(() => {
  // Run animation when data has been updated and the component has re-rendered
  
  // if (data.length <= 0) {
  //   document.querySelector('#loading').innerHTML = "loading..."
  // }

  animate();
  // if(data.length > 0){
  //   document.querySelector('#loading').style.display = "none"

  

  // }
}); // Dependency on `data` means this runs every time `data` is updated


  return (
    <>
    <main className='homeFlex1221'>
      <h1 id="loading">loading...</h1>
      <span id="card-box">
        
     <a href="https://liveworldsweather.netlify.app/">< div id='card'>
     <img src="https://dl.memuplay.com/new_market/img/com.appsinnova.weatherforecast.liveweather.icon.2023-09-15-22-20-27.png" alt="image-project" />
        <h1 style={{fontSize : "2rem"}} >Live Weather</h1>
      </div>
      </a>


      <a href="https://getitnoww.netlify.app/">< div id='card'>
     <img src="https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=" alt="image-project" />
        <h1 style={{fontSize : "2rem"}}>Front-End design</h1>
      </div>
      </a>
      
      
      </span>
    </main>
    </>
  );
}
