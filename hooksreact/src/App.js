import './App.css';
import MovieList from './component/MovieList';
import Add from './component/add';
import Filter from './component/filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
function App() {
  const [filteredMovie,setFilteredMovie] = useState([])
  const [searchKeys,setSearchKeys] = useState({
    key:"",
    rate:1
  })

  
  const [movies,setMovies] = useState([
    {
      title:"Fight Club",
      imgurl:"https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg",
      discription:"season 1 (2000)",
      rating:5
   },
    {
        title:"Prison Break",
        imgurl:"https://images6.alphacoders.com/469/thumbbig-469280.webp",
        discription:"season 3 (2014)",
        rating:3
    },
    {
        title:"Usual Suspects",
        imgurl:"https://imusic.b-cdn.net/images/item/original/805/3700259801805.jpg?movie-usual-suspects-dvd&class=scaled",
        discription:"season 1 (1995)",
        rating:4
    },
    {
        title:"Chernobyl",
        imgurl:"https://images.6play.fr/v2/images/3401257/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=2c7274d86697ef2fa03084c270ed7f7c04a83d3c",
        discription:"season 1 (2010)",
        rating:5
    },
    {
      title:"The Lion King",
      imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh",
      discription:"season 2 (2020)",
      rating:1
   },
]);
const add = (newmovie) => {
  setMovies((movies) => movies.concat(newmovie));
};
const search = (e) => {
  setSearchKeys({...searchKeys,[e.target.name]:e.target.value})
};

useEffect(() => {
  setFilteredMovie(movies.filter(m => (m.rating >= searchKeys.rate) && (searchKeys.key === "" || m.title.startsWith(searchKeys.key) )))
}, [movies,searchKeys])
  return (
    <div className="App">
      <Filter search={search} />
      <Add add={(newmovie)=>add(newmovie)}/>
      <MovieList movies={filteredMovie} />
    </div>
  );
}

export default App;