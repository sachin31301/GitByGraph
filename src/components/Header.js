import React from 'react'
import styled from 'styled-components';
import imageg from '../images/william-iven-jrh5lAq-mIs-unsplash.jpg'

function Header() {
    return (
        
        <Wrapper>
            <img src={imageg}/>
        <h1 >Gitbychart</h1>
        </Wrapper>
        
    )
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  //margin-bottom: 4rem;
  background:"#0B0B15";
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 80px;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 150px !important;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  h1{
      color:"#0B0B15";
      transparent:0;
      font-size:100px;
      font-family:Arial;
      opacity:4.0;
      font-style:oblique;
  }
`;

export default Header
