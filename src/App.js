  import logo from './logo.svg';
  import './App.css';
  import React , {useState, useEffect} from 'react'; 
  function App() {
    
    
      const [ActrosData , setActrosData]= useState([])

      useEffect(()=>{ 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setActrosData(data));


  },[])
    //const ActrosData = [{name :'Tina', age: 44},{name :'Jina', age:78}, {name :'Minia', age:34},{name:'Tamanna-Begum', age:23},{name:'Deepjol-Caca', age:33},{name :'OmorSani', age:22},{name :'Bobita', age:22}];
    
    return (
      <div className="App">
        <MovieCounter></MovieCounter>
        {

        gActrosData.map(nk => <Nayok name ={nk.name} key= {nk.id} age ={nk.age}></Nayok>) // Map  Data Get from Object Name and Age: and show in Ui ... 

        }

        
      </div>
    );
  }
  // For Incrase Button 
  function MovieCounter(){
    const [count, setCount] = useState(4); // Use useState:
      const handler = () => {

        const AddMovie = count+1;
        setCount(AddMovie);
      }

      // For Decrase Button 
      
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
    <h2> My Age is : {props.age}</h2>
    <h3>Bangladesh FDC</h3>
    </div> 

    )
  }
  export default App;
