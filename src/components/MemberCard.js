import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  background-color: lightgrey;
  display:flex;
  justify-content:space-around;
  margin:2% auto 0 auto;
  border-radius:8px;
  & h2 {
      display:flex;
      align-items:center;
  }
  & h2 i{
      font-size:.5em;
  }
`;
const MemberCard = (props) => {
  const { member } = props;
  return (
    <Card>
      <h2><i>Name: </i>{member.name}</h2>
      <h2><i>Role: </i>{member.role}</h2>
      <h2><i>Email: </i>{member.email}</h2>
    </Card>
  );
};
export default MemberCard;
