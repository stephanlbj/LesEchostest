import {QueryClient} from '@tanstack/react-query'
import { getNewsletters } from '@/lib/api/getNewsLetters';
import { NewslettersResponse } from '@/types/newsletters';

export default async function prefetchNewsLetters(queryClient: QueryClient) {
      try { 
        await queryClient.prefetchInfiniteQuery({
            queryKey: ['newsletters'],  
            queryFn: ({ pageParam = 0 }) => getNewsletters({ pageParam }),
            initialPageParam: 0,
            getNextPageParam: (lastPage:NewslettersResponse) => lastPage.nextPage
        });
              
    } catch (error) {
        console.error("Error prefetching newLetters:", error);
        queryClient.setQueryData(['newsletters'], () => {});
    }
}