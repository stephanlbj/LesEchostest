"use client"

import styled from "styled-components"

export const StyledButton = styled.button<{ $status?: "subscribed" | "notsubscribed"}>`
  background-color: ${({ $status }) => ($status === "subscribed" ? "#B00005" : "#FAEC70")}; 
  color: ${({ $status }) => ($status === "subscribed"  ? "#FFFFFF" : "#212121")};
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: clamp(.5rem, 1vw + .4rem, .9rem);
  min-width:118px
  font-weight:700;
  font-family: var(--font-body);
`;