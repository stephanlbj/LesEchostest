import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { NewslettersResponse } from "@/types/newsletters";

 export async function getNewsletters({pageParam}:{pageParam:number}): Promise<NewslettersResponse> {

  const LIMIT = 10
  return new Promise((resolve) => {
    setTimeout(() => resolve({
         data: NEWSLETTER_ITEMS.slice(pageParam, pageParam + LIMIT),
         currentPage:pageParam,
         nextPage: pageParam + LIMIT < NEWSLETTER_ITEMS.length ? pageParam + LIMIT : null
        })
      
    , 1000);
  });
}
