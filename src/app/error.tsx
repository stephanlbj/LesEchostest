'use client' 
 
import styled  from "styled-components"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    
    <html>
      <body>
        <Wrapper>
        <h2>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
        </Wrapper>
      </body>
    </html>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center; 
gap:20px;
width:100%;
height:100vh;
`;