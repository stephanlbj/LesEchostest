import { Newsletter } from "@/types/newsletters";
import { UserWithSubscriptions } from "@/types/user";

export const checkSubscriptionAccess = (newsletter: Newsletter, user: UserWithSubscriptions) => {
     
  if (!newsletter?.subscriptions || newsletter?.subscriptions?.length === 0) {
    return true;
  }
      const userSubscriptionsSet = new Set(user.subscriptions);

      return newsletter.subscriptions.some((right) => userSubscriptionsSet.has(right));

    };