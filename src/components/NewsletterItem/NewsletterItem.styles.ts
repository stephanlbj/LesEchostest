"use client"
import styled from "styled-components"

export const LiWrapper = styled.li`
width:100%; 
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`

export const TopSection = styled.div`
width:100%; 
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`

export const Title = styled.h3`
  color:#FFFFFF;
  font-size:clamp(1rem, 1vw + 0.5rem, 1.9rem);
  font-family: var(--merriweathe);
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  translate: -50% -50%;
`

export const Description = styled.p`
  padding-inline: 1rem;
  margin-inline:auto;
  font-weight: 400;
  color:var(--text-color);
  font-size:clamp(0.6rem, 2vw + 0.5rem, 1rem);
  font-family: var(--font-body);
  text-align:center;
`