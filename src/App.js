import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'; 
function App() {
  const ActorData = ['Tina', 'Jina','Minia','Tamanna-Begum','Deepjol-Caca']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>

      <Nayok name="Josim"></Nayok>
      <Nayok name = {ActorData[4]}></Nayok>
      <Nayok name ="Rubal"></Nayok>
      <Nayok name ="Bappa Raj"></Nayok>
      <Nayok name = {ActorData [3]}></Nayok>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(4); // Use useState:
    const handler = () => {

      const AddMovie = count+1;
      setCount(AddMovie);
    }
    const handlerDedact = () => {

      const DedactMovie = count-1;
      setCount(DedactMovie);
    }
  
  return(
    <div>
      <button onClick = {handler} style= {{marginTop:'24px'}}>Movie-Counter</button>
      <button onClick = {handlerDedact}>Movie-Decrase</button>
      <h3>Number Of Movie :{count} </h3>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count}></MovieDisplay>
      
    </div>




  )
}
function MovieDisplay(props){

  return <h4> I Made This Movie:{props.movie} </h4>
}

function Nayok(props){
const nayokstyle ={
  border:'2px solid red',
  margin: '10px',
 



}
  return(    
  <div style={nayokstyle } >
  <h1 style={{color:'yellowgreen'}}>I M Actores . / Actress :{props.name} </h1> 
  <h3>Bangladesh FDC</h3>
  </div> 

   )
}
export default App;
