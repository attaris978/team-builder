import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MemberCard from "./components/MemberCard";
import MemberForm from "./components/MemberForm";

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 0,
      name: "Ryan Magro",
      email: "ryancare@protonmail.com",
      role: "Overlord",
    },
  ]);

  const addToTeamList = (memberValues) => {
    const newMember = (memberValues) => {
      const member = {
        id:teamList.length,
        name:memberValues.name,
        email:memberValues.email,
        role:memberValues.role,
      }
      return member;
    }
    setTeamList([...teamList,newMember])
  }
  return <div className="App">
    <MemberCard member={teamList[0]} />
    <MemberForm add={addToTeamList} /> 
  </div>;
}

export default App;
