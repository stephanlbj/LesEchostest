"use client"
import styled from "styled-components"
export default function Loading (){
  return (
    <LoadingWrapper>
        <LoadingParagraph>Loading</LoadingParagraph>
        <LoadingParagraph>🚀🚀🚀</LoadingParagraph>
    </LoadingWrapper>
  )
}

 const LoadingWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center; 
  gap:10px;
  width:100%;
  height:100vh;
`;

 const LoadingParagraph = styled.p`
 text-align:center;
 font-family: var(--font-body);
 font-weight: 700;
 font-size: clamp(0.8rem, 2vw + 0.5rem, 1.375rem);
`;


