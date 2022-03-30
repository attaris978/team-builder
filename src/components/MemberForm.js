import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  margin: 2% auto 2% auto;
`;

const MemberForm = (props) => {
  const { add, currentLength } = props;
  const [formValues, setFormValues] = useState({
    name: "",
    role: "Full Stack",
    email: "",
  });
  const handleSubmit = (e) => {
    console.log(formValues);
    e.preventDefault();
    add(formValues);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormValues({...formValues, [e.target.name]: e.target.value});
    console.log(formValues);
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name:
        <input
          name="name"
          id="memberName"
          type="text"
          maxLength="30"
          placeholder="Team Member Name"
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <label>
        Role:
        <select name="role" id="memberRole" onChange={(e) => handleChange(e)}>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Full Stack">Full Stack</option>
          <option value="UX">UX</option>
          <option value="Propagandist">Propagandist</option>
        </select>
      </label>
      <label>E-Mail:
          <input
          type="email"
          name="email"
          id="mEmail"
          maxLength="30"
          placeholder="Email Address"
          onChange={(e) => handleChange(e)}
          />
      </label>
      <button>Join the Team!</button>
    </Form>
  );
};
export default MemberForm;
