import NavBar from './Components/NavBar';
import {useState} from "react";
import NewsBoard from './Components/NewsBoard';
const App=()=>{
  const [category,setCategory]=useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}
export default App