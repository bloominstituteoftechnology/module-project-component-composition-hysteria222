import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black; 
  padding: .5rem; 
  width: 80vw;
  display: flex;
  flex-flow: column wrap;
  align-items: center; 
  background-color: white;
  h2 {
    font-size: 2.5rem;
    letter-spacing: .5rem;
    margin-bottom: 1rem;
    color: black;
  }
  p {
    width: 55vw;
    text-align: justify;
    margin-bottom: 1.5rem;
  }
  
`


export default function Card ({title, text, imageURL, date}) {
    return (
      <StyledCard className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure
      imageURL={imageURL} 
      caption={date}/>
    </ StyledCard>
    )
  }