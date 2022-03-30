import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  background-color: lightgrey;
  display: flex;
  justify-content: space-around;
  margin: 2% auto 2% auto;
  border-radius: 8px;
  & h2 {
    display: flex;
    align-items: center;
  }
  & h2 i {
    font-size: 0.5em;
  }
  & h2:nth-of-type(1) {
    width: 30%;
  }
  & h2:nth-of-type(2) {
    width: 20%;
  }
  & h2:nth-of-type(3) {
    width: 50%;
  }
`;
const MemberCard = (props) => {
  const { member } = props;
  return (
    <Card>
      <h2>
        <i>Name: </i>
        {member.name}
      </h2>
      <h2>
        <i>Role: </i>
        {member.role}
      </h2>
      <h2>
        <i>Email: </i>
        {member.email}
      </h2>
    </Card>
  );
};
export default MemberCard;
