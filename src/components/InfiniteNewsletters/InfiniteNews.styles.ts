"use client"
import styled from "styled-components";

export const NewsSection = styled.section`
  width: min(90%, 970px);
  margin-block:1.5rem;
  margin-inline:auto;
`;

export const TopSection = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;
 margin-block:15px;
`;

export const H2Style = styled.h2`
 width: 100%;
 font-family: var(--font-body);
 font-weight: 700;
 font-size: clamp(0.8rem, 2vw + 0.5rem, 1.375rem);
`;

export const H2Rectangle = styled.div`
 width: min(30%, 70px);
 height:4px;
 background-color:#B00005;
 border-radius:10px;
`;

export const NewsSectionList = styled.ul`
 width: 100%;
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
 grid-auto-rows: minmax(349px, auto);
 gap:20px; 
 justify-content: center;
`;

export const LoadingParagraph = styled.p`
 text-align:center;
 font-family: var(--font-body);
 font-weight: 700;
 font-size: clamp(0.8rem, 2vw + 0.5rem, 1.375rem);
`;

 
