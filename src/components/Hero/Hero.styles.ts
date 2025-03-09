"use client"
import styled from "styled-components";

export const HeroSection = styled.section`
  text-align: center;
  color: #333;
  font-weight: 700;
  line-height: 2;
  margin-inline:auto;
  width: min(90%, 970px);
  background-color:#F4F4F4;
  min-height: clamp(100px, 10vw, 135px);
  margin-block-start:1.875rem;
  padding:1.25rem;
  border-radius:10px;
`;

export const HeroTitle = styled.h1`
  text-align: center;
  color:var(--text-color);
  font-weight: 700;
  line-height: 1.5;
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw + 1rem, 1.875rem);
`;

export const HeroDescription = styled.p`
  margin-inline:auto;
  width: min(90%, 930px);
  font-weight: 400;
  color:var(--text-color);
  font-size:clamp(0.6rem, 2vw + 0.5rem, 1rem);
  line-height: 1.625rem;
  font-family: var(--font-body);
`;
