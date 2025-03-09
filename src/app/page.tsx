import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero/Hero";  
import { MainSection } from "./page.styles";
import Newsletters from "@/components/NewsLetters/NewsLetters";

export default async function HomePage() {

  await new Promise((resolve)=>setTimeout(resolve, 1000))
  return (
    <MainSection>

    <Hero/>

    <ErrorBoundary >
    <Newsletters/>
    </ErrorBoundary>
    </MainSection>
  )
};


