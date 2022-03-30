import "./App.css";
import { useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberCards from "./components/MemberCards";

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
    const newMember = {
      id: teamList.length,
      name: memberValues.name,
      email: memberValues.email,
      role: memberValues.role,
    };
    setTeamList([...teamList, newMember]);
  };
  return (
    <div className="App">
      <h1>The Dream Team</h1>
      <MemberForm add={addToTeamList} />
      <MemberCards memberList={teamList} />
    </div>
  );
}

export default App;
