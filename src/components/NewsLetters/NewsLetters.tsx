import { getUser } from "@/lib/api/getUser"; 
import prefetchNewsLetters from "@/utils/prefetchNewsLetters";
import {
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import InfiniteNewsletters from "../InfiniteNewsletters/InfiniteNewsletters";
  

export default async function Newsletters() {

  const queryClient = new QueryClient();
  const dehydratedState = await prefetchNewsLetters(queryClient); 
  const user = await getUser();
  
  return (
      <HydrationBoundary state={dehydratedState}>
      <InfiniteNewsletters user={user} />
     </HydrationBoundary>
      );
 
}
