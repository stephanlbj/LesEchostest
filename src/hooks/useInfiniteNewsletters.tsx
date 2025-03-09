"use client";
import { useInfiniteQuery  } from '@tanstack/react-query';
import { getNewsletters } from "@/lib/api/getNewsLetters";


export const useInfiniteNewsletters = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['newsletters'],
        queryFn: getNewsletters,
        initialPageParam: 0, 
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    const flattenedData = data?.pages.flatMap((page) => page.data) || [];

    return {
        data : flattenedData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    };
};