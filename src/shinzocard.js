import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
padding-bottom: 2%;
text-align: justify;
margin-top: -4rem;
margin-bottom: 2rem;
`;

const StyledTitleCard = styled.h3`
color: #011120;
font-size: 3rem;
padding: 1%;
font-family: Bebas Neue, sans-serif;
letter-spacing: 5px;
margin-bottom: 1.75rem;
text-align: center;
`;

const StyledSubtitleCard = styled.h4`
font-size: 2.5rem;
font-family: Kristi;
color: #0b5394;
height: 10%;
width: 55%;
margin-top: -3.75rem;
margin-left: 30rem;
text-align: center;
margin-bottom: 1rem;
`;

const StyledCardInfo = styled.span`
color: black;
font-size: 1rem;
padding: 1rem;
font-family: Lexend, sans-serif;
letter-spacing: 2px; 
`;

export default class ShinzoCard extends React.Component {
constructor(props) {
    super(props);
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.info = props.info;
    }

  render() {
    return (
    <div>
        <StyledCard> 
            <StyledTitleCard>{this.props.title}</StyledTitleCard>
            <StyledSubtitleCard>{this.props.subtitle}</StyledSubtitleCard>
            <StyledCardInfo>{this.props.info}</StyledCardInfo>
        </StyledCard>
    </div>
    );
  }
}