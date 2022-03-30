import styled from "styled-components";
import MemberCard from "./MemberCard";

const CardCarrier = styled.div`
background-color:black;
display:flex;
flex-flow:column nowrap;
width:95%;
margin:2% auto 2% auto;
border-radius:10px;
`

const MemberCards = (props) => {
    const {memberList} = props;
    console.log(memberList);
    return (
        <CardCarrier>
            {memberList.map(mem => <MemberCard member={mem} />)}
        </CardCarrier>
        
    )
}
export default MemberCards;
