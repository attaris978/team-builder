import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  width: 40%;
  margin: 0 auto 0 auto;
  text-align: right;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 0.3fr);
  grid-column-gap: 2%;
  grid-row-gap: 0.2em;
  & label:nth-of-type(1) {
    grid-area: 2 / 1 / 3 / 2;
  }
  & label:nth-of-type(2) {
    grid-area: 4 / 1 / 5 / 2;
  }
  & label:nth-of-type(3) {
    grid-area: 6 / 1 / 7 / 2;
  }
  & input:nth-of-type(1) {
    grid-area: 1 / 2 / 3 / 6;
  }
  & input:nth-of-type(2) {
    grid-area: 5 / 2 / 7 / 6;
  }
  & select {
    grid-area: 3 / 2 / 5 / 6;
  }
  & button {
    grid-area: 7/ 3 / 11 / 5;
    &:hover {
      background-color:darkred;
    }
    
  }
`;

// const Form = styled.form`
//   display: flex;
//   flex-flow: column nowrap;
//   width: 30%;
//   margin: 2% auto 2% auto;
// `;

const MemberForm = (props) => {
  const { add } = props;
  const [formValues, setFormValues] = useState({
    name: "",
    role: "Full Stack",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    add(formValues);
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    // <Form onSubmit={(e) => handleSubmit(e)}>
    //   <label>
    //     Name:
    //     <input
    //       name="name"
    //       id="memberName"
    //       type="text"
    //       maxLength="30"
    //       placeholder="Team Member Name"
    //       onChange={(e) => handleChange(e)}
    //     ></input>
    //   </label>
    //   <label>
    //     Role:
    //     <select name="role" id="memberRole" onChange={(e) => handleChange(e)}>
    //       <option value="Front End">Front End</option>
    //       <option value="Back End">Back End</option>
    //       <option value="Full Stack">Full Stack</option>
    //       <option value="UX">UX</option>
    //       <option value="Propagandist">Propagandist</option>
    //     </select>
    //   </label>
    //   <label>
    //     E-Mail:
    //     <input
    //       type="email"
    //       name="email"
    //       id="mEmail"
    //       maxLength="30"
    //       placeholder="Email Address"
    //       onChange={(e) => handleChange(e)}
    //     />
    //   </label>
    //   <button>Join the Team!</button>
    // </Form>
    <Form onSubmit={(e) => handleSubmit(e)}>
      <label for="memberName">Name:</label>
      <input
        name="name"
        id="memberName"
        type="text"
        maxLength="30"
        placeholder="Team Member Name"
        onChange={(e) => handleChange(e)}
      ></input>

      <label for="memberRole">Role:</label>

      <select name="role" id="memberRole" onChange={(e) => handleChange(e)}>
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Full Stack">Full Stack</option>
        <option value="UX">UX</option>
        <option value="Propagandist">Propagandist</option>
      </select>

      <label for="mEmail">Email:</label>

      <input
        type="email"
        name="email"
        id="mEmail"
        maxLength="30"
        placeholder="Email Address"
        onChange={(e) => handleChange(e)}
      />

      <button>Join the Team!</button>
    </Form>
  );
};
export default MemberForm;
