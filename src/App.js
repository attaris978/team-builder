import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [teamList,setTeamList] = useState([{
    id:0,
    name:"Ryan Magro",
    email:"ryancare@protonmail.com",
    role:"overlord"
  }]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
