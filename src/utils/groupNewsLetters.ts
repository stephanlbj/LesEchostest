import { Newsletter } from "@/types/newsletters";

export const groupNewsLetters = (newsletters:Newsletter[])=>{
    return newsletters.reduce((acc, newsletter) => {
        const site = newsletter.site;
        if (!acc.has(site)) {
          acc.set(site, []);
        }
        acc.get(site)?.push(newsletter);
        return acc;
      }, new Map<string, Newsletter[]>());
}