"use client"

import styled  from "styled-components";

export default function CustomMessage({ message }: { message: string }){
    return <MessageParagraph>{message}</MessageParagraph>
};

const MessageParagraph = styled.p`
 text-align:center;
 font-family: var(--font-body);
 font-weight: 700;
 font-size: clamp(0.8rem, 2vw + 0.5rem, 1.375rem);
 padding:2rem;
`;