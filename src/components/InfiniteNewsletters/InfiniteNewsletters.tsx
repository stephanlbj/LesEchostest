"use client";
import { useEffect } from "react";
import NewsletterItem from "../NewsletterItem/NewsletterItem";
import { groupNewsLetters } from "@/utils/groupNewsLetters";
import { useInfiniteNewsletters } from "@/hooks/useInfiniteNewsletters";
import { UserWithSubscriptions } from "@/types/user";
import { NewsSection, H2Style, H2Rectangle, TopSection,
LoadingParagraph ,NewsSectionList } from "./InfiniteNews.styles";
import CustomMessage from "../CustomMessage/CustomMessage";
import { useInView } from 'react-intersection-observer';

interface InfiniteNewslettersProps  {
    user: UserWithSubscriptions
}


export default function InfiniteNewsletters({user}:InfiniteNewslettersProps) {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteNewsletters();

   const {ref, inView} = useInView(
    {  threshold: 0.3, rootMargin: "100px"}
   )
    
   useEffect(()=>{
   if(inView && hasNextPage  && !isFetchingNextPage){
    fetchNextPage()
   }
   }, [fetchNextPage, inView, hasNextPage, isFetchingNextPage])
    
    
    if (status === "pending") {
        return <CustomMessage message="Chargement...."/>;
    }

     if (status === "error") {
        return <CustomMessage message="An error occured."/>;
    }
    if (!data || data.length === 0) {
         return <CustomMessage message="No newsletters available." />;
    }

    const groupedNewsletters = groupNewsLetters(data);
    
    return (
       <>
        {Array.from(groupedNewsletters.entries()).map(([site, newsletters]) => (
                <NewsSection key={`group-${site}`}>
                    <TopSection>
                    <H2Style>{site}</H2Style>
                    <H2Rectangle></H2Rectangle>
                    </TopSection>
                    <NewsSectionList>
                     {newsletters.length > 0 ? newsletters.map((newsletter, index) => (
                             <NewsletterItem 
                                key={`${newsletter.id}-${index}`} 
                                newsletter={newsletter} 
                                user={user} 
                                isAboveTheFold={index < 3}
                                isCurrentlyVisible={inView}
                                />
                        )) : 
                        <CustomMessage message="No NewsLetter found!"/> }
                    </NewsSectionList>
                </NewsSection>
            ))}
      <div ref={ref}> {isFetchingNextPage &&  <LoadingParagraph>Loading more...</LoadingParagraph>}</div>
       </>
           
    );
}